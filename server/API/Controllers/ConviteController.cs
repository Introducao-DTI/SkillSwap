using Microsoft.AspNetCore.Mvc;
using SkillSwap.Application.Usuarios.Services;

namespace SkillSwap.API.Controllers;

[ApiController]
[Route("api/v1/convite")]
public class ConviteController(IConviteService conviteService) : ControllerBase
{
  [HttpPost("gerar")]
  public async Task<IActionResult> GerarConvite([FromBody] GerarConviteRequestDTO dto)
  {
    var resultado = await conviteService.GerarConviteAsync(dto);

    return resultado.Sucesso
        ? CreatedAtAction(nameof(ValidarToken), new { token = resultado.Value!.Token }, resultado.Value)
        : BadRequest(resultado.Erro);
  }

  [HttpGet("validar")]
  public async Task<IActionResult> ValidarToken([FromQuery] string token)
  {
    var resultado = await conviteService.ValidarTokenAsync(token);

    return resultado.Sucesso
        ? Ok(resultado.Value)
        : resultado.Erro!.Contains("não encontrado")
            ? NotFound(resultado.Erro)
            : BadRequest(resultado.Erro);
  }
}