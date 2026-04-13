using SkillSwap.Application.Usuarios.DTOs;

namespace SkillSwap.Application.Usuarios.Services;

public interface IUsuarioService
{
    Task<UsuarioDTO> CriarUsuarioAsync(CriarUsuarioRequestDTO criarUsuarioRequestDTO);
    Task<UsuarioDTO> ObterUsuarioPorIdAsync(Guid id);
}