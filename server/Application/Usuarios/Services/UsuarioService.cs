using SkillSwap.Application.Usuarios.DTOs;
using SkillSwap.Core.Shared;
using SkillSwap.Core.Usuarios.Enums;
using SkillSwap.Core.Usuarios.Ports.Out;
using SkillSwap.Core.Usuarios.Models;
using SkillSwap.Core.Usuarios.ValueObjects;

namespace SkillSwap.Application.Usuarios.Services;

public class UsuarioService(
IUsuarioRepository usuarioRepository,
ISenhaService senhaService) : IUsuarioService
{
    public async Task<Result<UsuarioDTO>> CriarUsuarioAsync(CriarUsuarioRequestDTO dto)
    {
        if (await usuarioRepository.ExisteEmailAsync(dto.Email))
            return Result<UsuarioDTO>.Falha("Este email já está em uso.");

        var senhaHash = senhaService.HashSenha(dto.Senha);

        var usuario = new Usuario(dto.Email, RoleEnum.Usuario, senhaHash);
        var telefone = new Telefone(dto.Telefone);
        var perfil = new InformacoesUsuario(usuario.Id, dto.Nome, telefone);

        usuario.DefinirPerfil(perfil);

        await usuarioRepository.CriarUsuarioAsync(usuario, perfil);

        return Result<UsuarioDTO>.Ok(new UsuarioDTO(usuario.Id, perfil.Nome, usuario.Role));
    }

    public async Task<Result<UsuarioDTO>> ObterUsuarioPorIdAsync(Guid id)
    {
        var usuario = await usuarioRepository.ObterUsuarioPorIdAsync(id);

        if (usuario is null)
            return Result<UsuarioDTO>.Falha("Usuário não encontrado.");

        return Result<UsuarioDTO>.Ok(new UsuarioDTO(usuario.Id, usuario.Perfil!.Nome, usuario.Role));
    }
}