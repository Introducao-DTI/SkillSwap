type Props = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  metrics?: MetricItem[];
  fullWidth?: boolean;
};

type MetricItem = {
  name: string;
  number: number;
  statusCritical: boolean;
}

import { AnimatedNumber } from "../AnimateNumber";

export const Painel = ({ children, title, description, metrics, fullWidth = false }: Props) => {
  const metricsCritical = metrics?.filter(metric => metric.statusCritical == true);
  const metricsNoCritical = metrics?.filter(metric => metric.statusCritical == false);

  return (
    <section className="rounded-2xl border border-primary-dark/10 bg-white p-2 md:p-5 shadow-sm">
      <h2 className="text-primary-dark font-bold">{title}</h2>
        <div className="mt-4">
            <div className="space-y-3">
                <p className="text-support text-primary-dark/70">
                    {description}
                </p>
                <div>
                    {(metrics || []).length > 0 ? (
                      <div className="flex flex-col gap-4">
                        <div className="flex w-full md:gap-6">
                          {(metricsCritical || []).map((item, index) => (
                            <div 
                              key={index} 
                              className="bg-accent-red rounded-2xl p-2 md:p-5 mx-1 w-full flex justify-between"
                            >
                              <p className="md:text-2xl text-white text-center">
                                {item.name}
                              </p>
                              <p className="mt-2 ml-3 text-5xl md:text-6xl font-semibold text-white flex justify-end">
                                <AnimatedNumber value={item.number} />
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="flex gap-2 md:w-full w-auto ">
                          {(metricsNoCritical || []).map((item, index) => (
                            <div 
                              key={index}
                              className="bg-primary-light rounded-2xl p-2 md:p-5 w-full"
                            >
                              <p className="text-support md:text-xl text-primary-dark">
                                {item.name}
                              </p>
                              <p className="mt-2 text-4xl md:text-5xl font-semibold text-white flex justify-end">
                                <AnimatedNumber value={item.number} />
                              </p>
                            </div>
                          ))}
                        </div>

                      </div>
                    ) : (
                      children
                    )}
                </div>
            </div>
        </div>
    </section>
  );
};
