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

  public async Task InvalidarTokenPorEmailAsync(string email)
  {
    var tokensAtivos = await context.ConviteTokens
      .Where(c => c.Email == email && !c.Utilizado)
      .ToListAsync();

    foreach (var token in tokensAtivos)
      token.Utilizar();

    await context.SaveChangesAsync();
  }

  public async Task ConsumirTokenAsync(string token)
  {
    var convite = await context.ConviteTokens
      .FirstOrDefaultAsync(c => c.Token == token);

    if (convite is null)
      return;

    convite.Utilizar();
    await context.SaveChangesAsync();
  }

  public async Task AvancarEtapaAsync(Guid usuarioId, string novaEtapa)
  {
    var convite = await context.ConviteTokens
        .FirstOrDefaultAsync(c => c.UsuarioId == usuarioId && !c.Utilizado);

    if (convite is null) return;

    convite.AvancarEtapa(novaEtapa);
    await context.SaveChangesAsync();
  }
}