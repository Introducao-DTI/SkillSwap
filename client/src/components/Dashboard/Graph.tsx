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

export default function Grafico() {
  return (
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

        <Area
          type="monotone"
          dataKey="mentoria"
          stroke="#FF5A3C"
          fill="url(#colorMentoria)"
          strokeWidth={2}
        />

        <Area
          type="monotone"
          dataKey="membros"
          stroke="#0B3C78"
          fill="url(#colorMembros)"
          strokeWidth={2}
        />

        <Area
          type="monotone"
          dataKey="pontos"
          stroke="#39D353"
          fill="url(#colorPontos)"
          strokeWidth={2}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}