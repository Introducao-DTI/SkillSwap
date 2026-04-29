import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Scatter } from 'recharts';

const data = [
  {
    name: 'Janeiro',
    Andamento: 590,
    Congeladas: 800,
    Skills: 1400,
    Avaliações: 490,
  },
  {
    name: 'Fevereiro',
    Andamento: 868,
    Congeladas: 967,
    Skills: 1506,
    Avaliações: 590,
  },
  {
    name: 'Março',
    Andamento: 1397,
    Congeladas: 1098,
    Skills: 989,
    Avaliações: 350,
  },
  {
    name: 'Abril',
    Andamento: 1480,
    Congeladas: 1200,
    Skills: 1228,
    Avaliações: 480,
  },
];

const GraphOfMetrics = () => {
  return (
    <ComposedChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        bottom: 0,
        left: 0,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" scale="band" />
      <YAxis width="auto" niceTicks="snap125" />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="Andamento" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="Congeladas" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="Skills" stroke="#ff7300" />
      <Scatter dataKey="Avaliações" fill="red" />
    </ComposedChart>
  );
};

export default GraphOfMetrics;