type CepResponse = {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
};

export const buscarCep = async (cep: string): Promise<CepResponse> => {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

  if (!response.ok) {
    throw new Error("Erro ao buscar o CEP");
  }

  const data: CepResponse = await response.json();

  if (data.erro) {
    throw new Error("CEP não encontrado");
  }

  return data;
};
