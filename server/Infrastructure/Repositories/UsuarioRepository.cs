using SkillSwap.Core.Usuarios.Repositories;
using SkillSwap.Core.Usuarios;
using SkillSwap.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace SkillSwap.Infrastructure.Repositories;

public class UsuarioRepository(SkillSwapDbContext _context) : IUsuarioRepository
{
    public async Task<Usuario> CriarUsuarioAsync(Usuario usuario, InformacoesUsuario informacoes)
    {
        _context.Usuarios.Add(usuario);
        await _context.SaveChangesAsync();

        return usuario;
    }

    public async Task<Usuario?> ObterUsuarioPorIdAsync(Guid id)
    {
        return await _context.Usuarios.FirstOrDefaultAsync(u => u.Id == id);
    }

    public async Task<bool> ExisteEmailAsync(string email)
    {
        return await _context.Usuarios.AnyAsync(u => u.Email == email);
    }
}