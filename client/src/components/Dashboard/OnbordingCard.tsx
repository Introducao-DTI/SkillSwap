import { Button } from "../Button";
import {
    PackagePlus,
    UserPlus
 } from "lucide-react"

export const OnbordingCard = () => (
    <section className="rounded-3xl bg-primary-dark px-6 py-8 text-neutral-cream shadow-sm">
        <p className="text-support uppercase tracking-[0.2em] hidden md:block">
            Olá, Geovanna!
        </p>
        <h2 className="mt-2">Deixe sua plataforma pronta!</h2>
        <p className="mt-3 max-w-2xl text-neutral-cream/80">
          Organize produtos, acompanhe alertas e gerencie acessos do time em um
          so lugar.
        </p>

       <div className="mt-6 flex gap-4">
            <Button
                variant="primary"
                theme="accent-red"
                className="flex-1 flex items-center justify-center gap-2"
            >
                <PackagePlus size={25} />
                Novo Produto
            </Button>

            <Button
                variant="primary"
                theme="accent-red"
                className="flex-1 flex items-center justify-center gap-2"
            >
                <UserPlus size={25} />
                Convidar Colaborador
            </Button>
        </div>
      </section>
)