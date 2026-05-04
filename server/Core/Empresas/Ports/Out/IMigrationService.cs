namespace SkillSwap.Core.Empresas.Ports.Out;

public interface IMigrationService
{
  Task AplicarMigracoesAsync(string bancoDadosNome);
}