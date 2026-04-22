using SkillSwap.Core.Shared;

namespace SkillSwap.Application.Usuarios.Services;

public interface IConviteService
{
  Task<Result<ConviteDTO>> GerarConviteAsync(GerarConviteRequestDTO dto);
  Task<Result<ConviteDTO>> ValidarTokenAsync(string token);
}