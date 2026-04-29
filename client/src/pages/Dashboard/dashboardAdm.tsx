import { PageLayout } from "../../components/PageLayout";
import { Painel } from "../../components/Dashboard/Painel";
import GraphOfMetrics from "../../components/Dashboard/Graph";
import { FeedActivity } from "../../components/Dashboard/FeedActivity";
import { OnbordingCard } from "../../components/Dashboard/OnbordingCard";

const metricsAttention = [
  { name: "Chamados", number: 44, statusCritical: true, },
  { name: "Mentorias irregulares", number: 32, statusCritical: true, },
  { name: "Membros Ativos", number: 128, statusCritical: false, },
  { name: "Mentorias no mês", number: 48, statusCritical: false, },
  { name: "Pontos Circulados", number: 1200, statusCritical: false, },
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

      <Painel 
        title="Painel de Atenção" 
        metrics={metricsAttention} 
        fullWidth 
      />

      <section className="grid gap-4 md:grid-cols-2">
        <Painel>
          <FeedActivity Activities={recentActivities} />
        </Painel>

        <Painel 
          title="Gráficos de Engajamento" 
        >
          <GraphOfMetrics />
        </Painel>
      </section>
    </PageLayout>
  );
};
