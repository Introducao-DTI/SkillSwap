using Microsoft.AspNetCore.Mvc;
using SkillSwap.Application.Usuarios.DTOs;
using SkillSwap.Application.Usuarios.Services;

namespace SkillSwap.API.Controllers;

[ApiController]
[Route("api/v1/auth")]
public class AuthController(IAuthService authService) : ControllerBase
{
  [HttpPost("login")]
  public async Task<IActionResult> Login([FromBody] LoginRequestDTO dto)
  {
    var resultado = await authService.LoginAsync(dto);

    return resultado.Sucesso
        ? Ok(resultado.Value)
        : Unauthorized(resultado.Erro);
  }
}