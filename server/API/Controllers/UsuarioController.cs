using Microsoft.AspNetCore.Mvc;
using SkillSwap.Application.Usuarios.DTOs;
using SkillSwap.Application.Usuarios.Services;
using SkillSwap.Core.Usuarios.Exceptions;

namespace SkillSwap.API.Controllers;

[ApiController]
[Route("api/v1/usuario")]
public class UsuarioController(IUsuarioService usuarioService) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> CriarUsuario([FromBody] CriarUsuarioRequestDTO criarUsuarioRequestDTO)
    {
        try
        {
            var usuarioDTO = await usuarioService.CriarUsuarioAsync(criarUsuarioRequestDTO);
            return CreatedAtAction(nameof(ObterUsuarioPorId), new { id = usuarioDTO.Id }, usuarioDTO);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> ObterUsuarioPorId(Guid id)
    {
        try
        {
            var usuarioDTO = await usuarioService.ObterUsuarioPorIdAsync(id);
            return Ok(usuarioDTO);
        }
        catch (UsuarioNaoEncontradoException ex)
        {
            return NotFound(ex.Message);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
}