using SkillSwap.Core.Empresas.Ports.Out;
using Microsoft.AspNetCore.Http;

namespace SkillSwap.Infrastructure.Services;

public class TenantService(IHttpContextAccessor httpContextAccessor, IEmpresaRepository empresaRepository) : ITenantService
{
  public Guid ObterEmpresaId()
  {
    var context = httpContextAccessor.HttpContext;
    if (context == null) return Guid.Empty;

    var claim = context.User.FindFirst("empresa_id");
    if (claim == null) return Guid.Empty;

    return Guid.TryParse(claim.Value, out var empresaId)
        ? empresaId
        : Guid.Empty;
  }


  public async Task<string> ObterBancoDeDadosAsync()
  {
    var empresaId = ObterEmpresaId();

    var empresa = await empresaRepository.ObterEmpresaPorIdAsync(empresaId)
        ?? throw new InvalidOperationException("Empresa não encontrada no master database.");

    return empresa.BancoDadosNome;
  }

}