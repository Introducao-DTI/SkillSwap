namespace SkillSwap.Core.Empresas.Ports.Out;

public interface ITenantService
{
  Guid ObterEmpresaId();
  Task<string> ObterBancoDeDadosAsync();
}