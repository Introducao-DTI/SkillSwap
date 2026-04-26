using Microsoft.AspNetCore.Mvc;
using SkillSwap.Application.Usuarios.Services;
using SkillSwap.Application.Usuarios.DTOs;
using Microsoft.AspNetCore.Authorization;

namespace SkillSwap.API.Controllers;

[ApiController]
[Route("api/v1/convite")]
public class ConviteController(IConviteService conviteService) : ControllerBase
{
  [HttpPost("gerar")]
  [Authorize(Roles = "Admin")]
  public async Task<IActionResult> GerarConvite([FromBody] GerarConviteRequestDTO dto)
  {
    var resultado = await conviteService.GerarConviteAsync(dto);

    return resultado.Sucesso
        ? CreatedAtAction(nameof(ValidarToken), new { token = resultado.Value!.Token }, resultado.Value)
        : BadRequest(resultado.Erro);
  }

  [HttpGet("validar")]
  [AllowAnonymous]
  public async Task<IActionResult> ValidarToken([FromQuery] string token)
  {
    var resultado = await conviteService.ValidarTokenAsync(token);

    return resultado.Sucesso
        ? Ok(resultado.Value)
        : resultado.Erro!.Contains("não encontrado")
            ? NotFound(resultado.Erro)
            : BadRequest(resultado.Erro);
  }

  [HttpPost("consumir")]
  [Authorize]
  public async Task<IActionResult> ConsumirToken([FromBody] ConsumirTokenRequestDTO dto)
  {
    var resultado = await conviteService.ConsumirTokenAsync(dto.Token);

    return resultado.Sucesso
        ? Ok()
        : BadRequest(resultado.Erro);
  }
}