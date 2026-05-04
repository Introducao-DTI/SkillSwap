using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SkillSwap.Application.Empresas.DTOs;
using SkillSwap.Application.Empresas.Services;

namespace SkillSwap.API.Controllers;

[ApiController]
[Route("api/v1/onboarding")]
public class OnboardingController(ISetupService setupService) : ControllerBase
{
  [AllowAnonymous]
  [HttpPost("setup")]
  public async Task<IActionResult> Setup([FromBody] SetupEmpresaRequestDTO dto)
  {
    var resultado = await setupService.ConfigurarEmpresaAsync(dto);

    return resultado.Sucesso
        ? StatusCode(201, resultado.Value)
        : BadRequest(resultado.Erro);
  }
}