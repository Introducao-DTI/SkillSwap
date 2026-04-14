using SkillSwap.Core.Usuarios.Models;

namespace SkillSwap.Core.Usuarios.Ports.Out;

public interface IUsuarioRepository
{
    Task<Usuario> CriarUsuarioAsync(Usuario usuario, InformacoesUsuario informacoes);
    Task<Usuario?> ObterUsuarioPorIdAsync(Guid id);
    Task<bool> ExisteEmailAsync(string email);
}