using SkillSwap.Application.Usuarios.DTOs;
using SkillSwap.Core.Usuarios;
using SkillSwap.Core.Usuarios.Enums;
using SkillSwap.Core.Usuarios.Exceptions;
using SkillSwap.Core.Usuarios.Repositories;

namespace SkillSwap.Application.Usuarios.Services;

public class UsuarioService(IUsuarioRepository usuarioRepository, ISenhaService senhaService) : IUsuarioService
{
    public async Task<UsuarioDTO> CriarUsuarioAsync(CriarUsuarioRequestDTO dto)
    {
        if (await usuarioRepository.ExisteEmailAsync(dto.Email))
        {
            throw new EmailExistenteException("Este email já está em uso. Por favor, escolha outro.");
        }

        var senhaHash = senhaService.HashSenha(dto.Senha);
        var usuario = new Usuario(dto.Email, RoleEnum.Usuario, senhaHash);
        var perfil = new InformacoesUsuario(usuario.Id, dto.Nome, dto.Telefone, null!);

        await usuarioRepository.CriarUsuarioAsync(usuario, perfil);

        return new UsuarioDTO(usuario.Id, perfil.Nome, usuario.Role);
    }

    public async Task<UsuarioDTO> ObterUsuarioPorIdAsync(Guid id)
    {
        var usuario = await usuarioRepository.ObterUsuarioPorIdAsync(id);

        if (usuario == null)
        {
            throw new UsuarioNaoEncontradoException("Usuário não encontrado.");
        }

        return new UsuarioDTO(usuario.Id, usuario.Perfil.Nome, usuario.Role);
    }
}