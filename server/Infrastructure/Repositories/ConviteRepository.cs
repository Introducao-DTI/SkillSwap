using Microsoft.EntityFrameworkCore;
using SkillSwap.Core.Usuarios.Models;
using SkillSwap.Core.Usuarios.Ports.Out;
using SkillSwap.Infrastructure.Data;

namespace SkillSwap.Infrastructure.Repositories;

public class ConviteRepository(SkillSwapDbContext context) : IConviteRepository
{
  public async Task SalvarAsync(ConviteToken convite)
  {
    context.ConviteTokens.Add(convite);
    await context.SaveChangesAsync();
  }

  public async Task<ConviteToken?> ObterPorTokenAsync(string token)
  {
    return await context.ConviteTokens
        .FirstOrDefaultAsync(c => c.Token == token);
  }

  public async Task AtualizarAsync(ConviteToken convite)
  {
    context.ConviteTokens.Update(convite);
    await context.SaveChangesAsync();
  }
}