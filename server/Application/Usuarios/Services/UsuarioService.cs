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

        var usuario = new Usuario(dto.Nome, dto.Email, RoleEnum.Usuario, senhaHash);
        var telefone = new Telefone(dto.Telefone);
        var perfil = new InformacoesUsuario(usuario.Id, telefone);

        usuario.DefinirPerfil(perfil);

        await usuarioRepository.CriarUsuarioAsync(usuario, perfil);

        return Result<UsuarioDTO>.Ok(new UsuarioDTO(usuario.Id, usuario.Nome, usuario.Role));
    }

    public async Task<Result<UsuarioDTO>> ObterUsuarioPorIdAsync(Guid id)
    {
        var usuario = await usuarioRepository.ObterUsuarioPorIdAsync(id);

        if (usuario is null)
            return Result<UsuarioDTO>.Falha("Usuário não encontrado.");

        return Result<UsuarioDTO>.Ok(new UsuarioDTO(usuario.Id, usuario.Nome, usuario.Role));
    }

    public async Task<Result<InformacoesDTO>> AtualizarInformacoesAsync(Guid id, InformacoesDTO dto)
    {
        var usuario = await usuarioRepository.ObterUsuarioPorIdAsync(id);

        if (usuario is null)
            return Result<InformacoesDTO>.Falha("Usuário não encontrado.");

        var endereco = new Endereco(
            dto.Rua, dto.Numero, dto.Bairro, dto.Cidade, dto.Estado, dto.Cep, dto.Complemento
        );

        usuario.Perfil!.AtualizarTelefone(new Telefone(dto.Telefone));
        usuario.Perfil!.DefinirEndereco(endereco);

        await usuarioRepository.AtualizarInformacoesAsync(usuario);

        return Result<InformacoesDTO>.Ok(new InformacoesDTO(
            usuario.Email,
            usuario.Perfil.Telefone.Numero,
            usuario.Perfil.Endereco!.Rua,
            usuario.Perfil.Endereco.Numero,
            usuario.Perfil.Endereco.Complemento,
            usuario.Perfil.Endereco.Bairro,
            usuario.Perfil.Endereco.Cidade,
            usuario.Perfil.Endereco.Estado,
            usuario.Perfil.Endereco.Cep
        ));
    }

    public async Task<Result<InformacoesDTO>> ObterInformacoesAsync(Guid id)
    {
        var usuario = await usuarioRepository.ObterUsuarioPorIdAsync(id);

        if (usuario is null || usuario.Perfil is null)
            return Result<InformacoesDTO>.Falha("Informações não encontradas.");

        var endereco = usuario.Perfil.Endereco;

        return Result<InformacoesDTO>.Ok(new InformacoesDTO(
            usuario.Email,
            usuario.Perfil.Telefone.Numero,
            endereco?.Rua ?? string.Empty,
            endereco?.Numero ?? string.Empty,
            endereco?.Complemento ?? string.Empty,
            endereco?.Bairro ?? string.Empty,
            endereco?.Cidade ?? string.Empty,
            endereco?.Estado ?? string.Empty,
            endereco?.Cep ?? string.Empty
        ));
    }
}