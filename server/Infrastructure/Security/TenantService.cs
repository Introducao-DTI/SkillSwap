using SkillSwap.Core.Empresas.Ports.Out;
using Microsoft.AspNetCore.Http;

namespace SkillSwap.Infrastructure.Security;

public class TenantService(IHttpContextAccessor httpContextAccessor, IEmpresaRepository empresaRepository) : ITenantService
{
  public Guid ObterEmpresaId()
  {
    var context = httpContextAccessor.HttpContext
        ?? throw new InvalidOperationException("HttpContext não disponível.");

    var claim = context.User.FindFirst("empresa_id")
        ?? throw new UnauthorizedAccessException("Claim empresa_id não encontrada no token.");

    return Guid.TryParse(claim.Value, out var empresaId)
        ? empresaId
        : throw new UnauthorizedAccessException("empresa_id inválido no token.");
  }

  public async Task<string> ObterBancoDeDadosAsync()
  {
    var empresaId = ObterEmpresaId();

    var empresa = await empresaRepository.ObterEmpresaPorIdAsync(empresaId)
        ?? throw new InvalidOperationException("Empresa não encontrada no master database.");

    return empresa.BancoDadosNome;
  }

}