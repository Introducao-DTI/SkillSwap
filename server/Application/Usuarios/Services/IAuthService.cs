using SkillSwap.Application.Usuarios.DTOs;
using SkillSwap.Core.Shared;

namespace SkillSwap.Application.Usuarios.Services;

public interface IAuthService
{
  Task<Result<LoginResponseDTO>> LoginAsync(LoginRequestDTO dto);
}