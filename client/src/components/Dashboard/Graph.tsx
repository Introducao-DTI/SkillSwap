import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "jun", mentoria: 100, membros: 120, pontos: 450 },
  { name: "jul", mentoria: 300, membros: 200, pontos: 500 },
  { name: "ago", mentoria: 100, membros: 350, pontos: 200 },
  { name: "set", mentoria: 300, membros: 450, pontos: 500 },
  { name: "out", mentoria: 400, membros: 250, pontos: 250 },
  { name: "nov", mentoria: 350, membros: 100, pontos: 380 },
  { name: "dez", mentoria: 500, membros: 350, pontos: 150 },
];

const metrics = [
  {
    label: "Mentorias",
    dataKey: "mentoria",
    stroke: "#FF5A3C",
    fill: "url(#colorMentoria)",
  },
  {
    label: "Membros ativos",
    dataKey: "membros",
    stroke: "#0B3C78",
    fill: "url(#colorMembros)",
  },
  {
    label: "Pontos",
    dataKey: "pontos",
    stroke: "#39D353",
    fill: "url(#colorPontos)",
  },
] as const;

type MetricKey = (typeof metrics)[number]["dataKey"];

export default function Grafico() {
  const [activeMetric, setActiveMetric] = useState<MetricKey>("pontos");
  const orderedMetrics = [
    ...metrics.filter((metric) => metric.dataKey !== activeMetric),
    metrics.find((metric) => metric.dataKey === activeMetric)!,
  ];

  return (
    <div className="space-y-4">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorMentoria" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF5A3C" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#FF5A3C" stopOpacity={0} />
            </linearGradient>

            <linearGradient id="colorMembros" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0B3C78" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#0B3C78" stopOpacity={0} />
            </linearGradient>

            <linearGradient id="colorPontos" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#39D353" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#39D353" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          {orderedMetrics.map((metric) => (
            <Area
              key={metric.dataKey}
              type="monotone"
              dataKey={metric.dataKey}
              stroke={metric.stroke}
              fill={metric.fill}
              strokeWidth={activeMetric === metric.dataKey ? 3 : 2}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>

      <div className="flex flex-wrap gap-2 justify-center items-center">
        {metrics.map((metric) => {
          const isActive = activeMetric === metric.dataKey;

          return (
            <button
              key={metric.dataKey}
              type="button"
              onClick={() => setActiveMetric(metric.dataKey)}
              className={`rounded-lg border px-3 py-2 text-sm font-medium transition ${
                isActive
                  ? "border-transparent text-white shadow-sm"
                  : "border-primary-dark/10 bg-white text-primary-dark hover:bg-neutral-cream"
              }`}
              style={isActive ? { backgroundColor: metric.stroke } : undefined}
              aria-pressed={isActive}
            >
              {metric.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
