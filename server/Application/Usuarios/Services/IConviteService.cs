using SkillSwap.Core.Shared;
using SkillSwap.Application.Usuarios.DTOs;

namespace SkillSwap.Application.Usuarios.Services;

public interface IConviteService
{
  Task<Result<ConviteDTO>> GerarConviteAsync(GerarConviteRequestDTO dto);
  Task<Result<ConviteDTO>> ValidarTokenAsync(string token);

  Task<Result> ConsumirTokenAsync(string token);
}