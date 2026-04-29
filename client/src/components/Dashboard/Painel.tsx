type Props = {
  children?: React.ReactNode;
  title: string;
  description?: string;
  metrics?: MetricItem[]
};

type MetricItem = {
  name: string;
  number: number;
}

import { AnimatedNumber } from "../AnimateNumber";

export const Painel = ({ children, title, description, metrics }: Props) => {
  return (
    <section className="rounded-2xl border border-primary-dark/10 bg-white p-5 shadow-sm">
      <h4 className="text-primary-dark">{title}</h4>
        <div className="mt-4">
            <div className="space-y-3">
                <p className="text-support text-primary-dark/70">
                    {description}
                </p>
                <div className={`rounded-xl bg-neutral-cream p-4 ${
                    (metrics || []).length > 0 ? "flex justify-center gap-4 md:gap-8" : ""
                  }`}>
                    {(metrics || []).length > 0 ? (
                      (metrics || []).map((item, index) => (
                        <div key={index}>
                          <p className="mt-2 text-3xl font-semibold text-accent-red flex items-center justify-center">
                            <AnimatedNumber value={item.number}/>
                          </p>

                          <p className="text-support text-primary-dark/70">{item.name}</p>
                        </div>
                      ))
                    ) : children}
                </div>
            </div>
        </div>
    </section>
  );
};
