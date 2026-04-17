import { useState, useEffect } from "react";
import { useWatch, type UseFormSetValue, type Control } from "react-hook-form";
import { buscarCep } from "../api/cepApi";
import type { CompleteEnderecoFormData } from "../schemas/completeEnderecoSchema";

type UseCepProps = {
  control: Control<CompleteEnderecoFormData>;
  setValue: UseFormSetValue<CompleteEnderecoFormData>;
};

type UseCepReturn = {
  buscandoCep: boolean;
  erroCep: string | null;
};

export const useCep = ({ control, setValue }: UseCepProps): UseCepReturn => {
  const [buscandoCep, setBuscandoCep] = useState(false);
  const [erroCep, setErroCep] = useState<string | null>(null);

  const cep = useWatch({ control, name: "cep", defaultValue: "" });

  useEffect(() => {
    const cepLimpo = cep?.replace(/\D/g, "");
    if (cepLimpo?.length !== 8) return;

    const controller = new AbortController();

    const fetchCepData = async () => {
      try {
        setBuscandoCep(true);
        setErroCep(null);
        const data = await buscarCep(cepLimpo);
        if (!controller.signal.aborted) {
          setValue("logradouro", data.logradouro);
          setValue("bairro", data.bairro);
          setValue("cidade", data.localidade);
          setValue("estado", data.uf);
        }
      } catch (e) {
        if (!controller.signal.aborted) {
          setErroCep(e instanceof Error ? e.message : "Erro ao buscar CEP");
        }
      } finally {
        if (!controller.signal.aborted) {
          setBuscandoCep(false);
        }
      }
    };

    fetchCepData();
    return () => controller.abort();
  }, [cep, setValue]);

  return { buscandoCep, erroCep };
};
