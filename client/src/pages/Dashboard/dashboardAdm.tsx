import { PageLayout } from "../../components/PageLayout";
import { Painel } from "../../components/Dashboard/Painel";
import GraphOfMetrics from "../../components/Dashboard/Graph";
import { FeedActivity } from "../../components/Dashboard/FeedActivity";
import { OnbordingCard } from "../../components/Dashboard/OnbordingCard";

const metricsAttention = [
  { name: "Chamados", number: 4 },
  { name: "Mentorias irregulares", number: 6 },
];

const metricsGeneral = [
  { name: "Ativas", number: 4 },
  { name: "Congeladas", number: 2 },
  { name: "Encerradas", number: 8 },
];

const recentActivities = [
  {
    title: "Mentoria aprovada",
    detail: "Ana Souza validou a mentoria de UX Design.",
    time: "ha 12 min",
    status: "Concluido",
    tone: "success",
  },
  {
    title: "Chamado aberto",
    detail: "Novo chamado de suporte para acesso a plataforma.",
    time: "ha 27 min",
    status: "Urgente",
    tone: "alert",
  },
  {
    title: "Colaborador convidado",
    detail: "Convite enviado para marcos@skillswap.com.",
    time: "ha 1 h",
    status: "Novo",
    tone: "info",
  },
  {
    title: "Mentoria congelada",
    detail: "Sessao pausada por falta de confirmacao do mentor.",
    time: "ha 2 h",
    status: "Atencao",
    tone: "warning",
  },
];

export const DashboardAdm = () => {
  return (
    <PageLayout className="max-w-6xl mx-auto space-y-6">
      <OnbordingCard />
      <section className="grid gap-4 md:grid-cols-2">
        <Painel title="Painel de Atenção" description="Itens que precisam de ação rapida hoje." metrics={metricsAttention}/>

        <Painel title="Visao Geral" description="Resumo rapido das mentorias cadastradas." metrics={metricsGeneral}/>

        <Painel
          title="Feed de Atividades Recentes"
          description="Ultimas ações importantes registradas hoje na sua empresa."
        >
          <FeedActivity Activities={recentActivities} />
        </Painel>

        <Painel title="Gráficos de Engajamento" description="Confira a distribuição das mentorias por status, a quantidade de skills cadastradas e as avaliações associadas a cada mentoria.">
            <GraphOfMetrics />
        </Painel>
      </section>
    </PageLayout>
  );
};
