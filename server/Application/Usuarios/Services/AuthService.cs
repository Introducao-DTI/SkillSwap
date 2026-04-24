using SkillSwap.Application.Usuarios.DTOs;
using SkillSwap.Core.Shared;
using SkillSwap.Core.Usuarios.Ports.Out;
using SkillSwap.Core.Usuarios.Enums;

namespace SkillSwap.Application.Usuarios.Services;

public class AuthService(IUsuarioRepository usuarioRepository, ISenhaService senhaService, ITokenService tokenService) : IAuthService
{
  public async Task<Result<LoginResponseDTO>> LoginAsync(LoginRequestDTO dto)
  {
    var usuario = await usuarioRepository.ObterUsuarioPorEmailAsync(dto.Email);

    if (usuario is null)
      return Result<LoginResponseDTO>.Falha("Email ou senha inválidos.");

    var senhaValida = senhaService.VerificarSenha(usuario.SenhaHash, dto.Senha);

    if (senhaValida == ResultadoVerificacaoSenhaEnum.Falha)
      return Result<LoginResponseDTO>.Falha("Email ou senha inválidos.");

    var token = tokenService.GenerateToken(usuario.Id, usuario.Email, usuario.Role.ToString());

    return Result<LoginResponseDTO>.Ok(new LoginResponseDTO(token, usuario.Nome, usuario.Role.ToString()));
  }
}