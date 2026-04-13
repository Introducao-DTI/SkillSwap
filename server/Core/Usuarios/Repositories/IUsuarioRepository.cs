namespace SkillSwap.Core.Usuarios.Repositories;

public interface IUsuarioRepository
{
    Task<Usuario> CriarUsuarioAsync(Usuario usuario, InformacoesUsuario informacoes);
    Task<Usuario?> ObterUsuarioPorIdAsync(Guid id);
    Task<bool> ExisteEmailAsync(string email);
}