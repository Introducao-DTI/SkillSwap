

using Microsoft.EntityFrameworkCore;
using SkillSwap.Core.Empresas.Ports.Out;

namespace SkillSwap.Infrastructure.Data;

public class TenantDbContextFactory(ITenantService tenantService)
{
  public async Task<SkillSwapDbContext> CriarBancoAsync()
  {
    var bancoDadosNome = await tenantService.ObterBancoDeDadosAsync();

    var connectionString = $"Data Source={bancoDadosNome}.db";

    var optionsBuilder = new DbContextOptionsBuilder<SkillSwapDbContext>();

    optionsBuilder.UseSqlite(connectionString);

    return new SkillSwapDbContext(optionsBuilder.Options);
  }
}