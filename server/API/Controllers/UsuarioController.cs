using Microsoft.AspNetCore.Mvc;
using SkillSwap.Application.Usuarios.DTOs;
using SkillSwap.Application.Usuarios.Services;

namespace SkillSwap.API.Controllers;

[ApiController]
[Route("api/v1/usuario")]
public class UsuarioController(IUsuarioService usuarioService, IVerificacaoService verificacaoService) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> CriarUsuario([FromBody] CriarUsuarioRequestDTO dto)
    {
        var resultado = await usuarioService.CriarUsuarioAsync(dto);

        return resultado.Sucesso
            ? CreatedAtAction(nameof(ObterUsuarioPorId), new { id = resultado.Value!.Id }, resultado.Value)
            : Conflict(resultado.Erro);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> ObterUsuarioPorId(Guid id)
    {
        var resultado = await usuarioService.ObterUsuarioPorIdAsync(id);

        return resultado.Sucesso
            ? Ok(resultado.Value)
            : NotFound(resultado.Erro);
    }

    [HttpPut("{id}/informacoes")]
    public async Task<IActionResult> AtualizarInformacoes(Guid id, [FromBody] InformacoesDTO dto)
    {
        var resultado = await usuarioService.AtualizarInformacoesAsync(id, dto);

        return resultado.Sucesso
          ? Ok(resultado.Value)
          : BadRequest(resultado.Erro);
    }

    [HttpGet("{id}/informacoes")]
    public async Task<IActionResult> ObterInformacoes(Guid id)
    {
        var resultado = await usuarioService.ObterInformacoesAsync(id);

        return resultado.Sucesso
            ? Ok(resultado.Value)
            : NotFound(resultado.Erro);
    }

    [HttpPost("{id}/verificacao/enviar")]
    public async Task<IActionResult> EnviarCodigoVerificacao(Guid id,
    [FromBody] EnviarCodigoRequestDTO dto)
    {
        var resultado = await verificacaoService.EnviarCodigoAsync(id, dto.Metodo);

        return resultado.Sucesso
            ? Ok()
            : BadRequest(resultado.Erro);
    }

    [HttpPost("{id}/verificacao/validar")]
    public async Task<IActionResult> ValidarCodigoVerificacao(Guid id, [FromBody] ValidarCodigoRequestDTO dto)
    {
        var resultado = await verificacaoService.ValidarCodigoAsync(id, dto.Codigo);

        return resultado.Sucesso
            ? Ok()
            : BadRequest(resultado.Erro);
    }
}