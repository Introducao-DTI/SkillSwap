using SkillSwap.Application.Usuarios.DTOs;
using SkillSwap.Core.Shared;

namespace SkillSwap.Application.Usuarios.Services;

public interface IUsuarioService
{
    Task<Result<UsuarioDTO>> CriarUsuarioAsync(CriarUsuarioRequestDTO dto);
    Task<Result<UsuarioDTO>> ObterUsuarioPorIdAsync(Guid id);
}