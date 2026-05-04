import { Button } from "../Button/Button";
import {
    PackagePlus,
    UserPlus
 } from "lucide-react"

export const OnbordingCard = () => (
    <section className="md:rounded-3xl bg-transparent md:bg-primary-dark md:px-6 md:py-8 text-neutral-cream md:shadow-sm">
        <h2 className="mt-2 text-primary-dark md:text-white">Deixe sua plataforma pronta!</h2>
       <div className="mt-6 flex gap-4">
            <Button
                variant="secondary"
                theme="primary-dark"
                className="flex-1 flex items-center justify-center gap-2 md:bg-accent-red md:text-neutral-cream md:border-transparent md:hover:bg-accent-peach"
            >
                <PackagePlus size={25} />
                Novo Produto
            </Button>

            <Button
                variant="secondary"
                theme="accent-red"
                className="flex-1 flex items-center justify-center gap-2 md:bg-accent-red md:text-neutral-cream md:border-transparent md:hover:bg-accent-peach"

            >
                <UserPlus size={25} />
                Gerar Convite
            </Button>
        </div>
      </section>
)