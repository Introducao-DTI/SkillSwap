using SkillSwap.Core.Empresas.Ports.Out;
using Microsoft.EntityFrameworkCore;
using SkillSwap.Infrastructure.Data;

namespace SkillSwap.Infrastructure.Services;

public class MigrationService() : IMigrationService
{
  public async Task AplicarMigracoesAsync(string bancoDadosNome)
  {
    var connectionString = $"Data Source={bancoDadosNome}.db";

    var optionsBuilder = new DbContextOptionsBuilder<SkillSwapDbContext>();
    optionsBuilder.UseSqlite(connectionString);

    using var context = new SkillSwapDbContext(optionsBuilder.Options);
    await context.Database.MigrateAsync();
  }
}