#if DEBUG
using Microsoft.AspNetCore.Mvc;
using SkillSwap.Core.Usuarios.Models;
using SkillSwap.Core.Usuarios.Enums;
using SkillSwap.Core.Usuarios.ValueObjects;
using SkillSwap.Core.Usuarios.Ports.Out;

namespace SkillSwap.API.Controllers;

[ApiController]
[Route("api/v1/dev")]
public class DevController(
 IUsuarioRepository usuarioRepository,
 ISenhaService senhaService,
 ITokenService tokenService
) : ControllerBase
{
  [HttpPost("seed-admin")]
  public async Task<IActionResult> CriarAdmin()
  {
    var email = "admin@skillswap.com";

    if (await usuarioRepository.ExisteEmailAsync(email))
      return Conflict(new { erro = "Admin já existe. Use o endpoint de login." });

    var senhaHash = senhaService.HashSenha("Admin@123");
    var admin = new Usuario("Admin SkillSwap", email, RoleEnum.Admin, senhaHash);
    var perfil = new InformacoesUsuario(admin.Id, new Telefone("31999999999"));

    admin.DefinirPerfil(perfil);
    await usuarioRepository.CriarUsuarioAsync(admin, perfil);

    var token = tokenService.GenerateToken(admin.Id, admin.Email, admin.Role.ToString());

    return Ok(new
    {
      mensagem = "Admin criado com sucesso.",
      token,
      email,
      senha = "Admin@123"
    });
  }
}
#endif