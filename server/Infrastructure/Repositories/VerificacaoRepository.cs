using Microsoft.EntityFrameworkCore;
using SkillSwap.Core.Usuarios.Models;
using SkillSwap.Core.Usuarios.Ports.Out;
using SkillSwap.Infrastructure.Data;

namespace SkillSwap.Infrastructure.Repositories;

public class VerificacaoRepository(SkillSwapDbContext _context) : IVerificacaoRepository
{
  public async Task SalvarAsync(CodigoVerificacao codigo)
  {
    _context.CodigosVerificacao.Add(codigo);
    await _context.SaveChangesAsync();
  }

  public async Task<CodigoVerificacao?> ObterUltimoCodigoAsync(Guid usuarioId)
  {
    return await _context.CodigosVerificacao
        .Where(c => c.UsuarioId == usuarioId)
        .OrderByDescending(c => c.Expiracao)
        .FirstOrDefaultAsync();
  }

  public async Task AtualizarAsync(CodigoVerificacao codigo)
  {
    _context.CodigosVerificacao.Update(codigo);
    await _context.SaveChangesAsync();
  }
}