// Application/Usuarios/Services/ConviteService.cs
using SkillSwap.Application.Usuarios.DTOs;
using SkillSwap.Core.Shared;
using SkillSwap.Core.Usuarios.Enums;
using SkillSwap.Core.Usuarios.Models;
using SkillSwap.Core.Usuarios.Ports.Out;

namespace SkillSwap.Application.Usuarios.Services;

public class ConviteService(IConviteRepository conviteRepository) : IConviteService
{
  public async Task<Result<ConviteDTO>> GerarConviteAsync(GerarConviteRequestDTO dto)
  {
    var role = dto.Role == "Admin" ? RoleEnum.Admin : RoleEnum.Usuario;

    var convite = new ConviteToken(dto.Email, dto.Nome, role);

    await conviteRepository.SalvarAsync(convite);

    return Result<ConviteDTO>.Ok(new ConviteDTO(
        convite.Token,
        convite.Email,
        convite.Nome,
        convite.Role.ToString(),
        convite.Expiracao
    ));
  }

  public async Task<Result<ConviteDTO>> ValidarTokenAsync(string token)
  {
    var convite = await conviteRepository.ObterPorTokenAsync(token);

    if (convite is null)
      return Result<ConviteDTO>.Falha("Convite não encontrado.");

    if (!convite.EstaValido())
      return Result<ConviteDTO>.Falha("Convite inválido ou expirado.");

    return Result<ConviteDTO>.Ok(new ConviteDTO(
        convite.Token,
        convite.Email,
        convite.Nome,
        convite.Role.ToString(),
        convite.Expiracao
    ));
  }
}