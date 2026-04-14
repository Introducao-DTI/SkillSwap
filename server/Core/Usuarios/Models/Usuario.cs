using SkillSwap.Core.Usuarios.Enums;
using SkillSwap.Core.Usuarios.Exceptions;

namespace SkillSwap.Core.Usuarios.Models;

public class Usuario
{
    public Guid Id { get; private set; }
    public string Email { get; private set; }
    public RoleEnum Role { get; private set; }
    public string SenhaHash { get; private set; }
    public DateTime DataCriacao { get; private set; }
    public StatusUsuarioEnum Status { get; private set; }
    public InformacoesUsuario? Perfil { get; private set; }

    public Usuario(string email, RoleEnum role, string senhaHash)
    {
        ValidarEmail(email);

        if (string.IsNullOrWhiteSpace(senhaHash))
            throw new UsuarioInvalidoException("A senha é obrigatória.");

        Id = Guid.NewGuid();
        Email = email;
        Role = role;
        SenhaHash = senhaHash;
        DataCriacao = DateTime.UtcNow;
        Status = StatusUsuarioEnum.Ativo;
    }
    public void Congelar()
    {
        if (Status == StatusUsuarioEnum.Congelado)
            throw new UsuarioInvalidoException("O usuário já está congelado.");

        Status = StatusUsuarioEnum.Congelado;
    }

    public void Ativar()
    {
        if (Status == StatusUsuarioEnum.Ativo)
            throw new UsuarioInvalidoException("O usuário já está ativo.");

        Status = StatusUsuarioEnum.Ativo;
    }

    public void Desativar()
    {
        if (Status == StatusUsuarioEnum.Inativo)
            throw new UsuarioInvalidoException("O usuário já está inativo.");

        Status = StatusUsuarioEnum.Inativo;
    }

    public void AlterarEmail(string novoEmail)
    {
        ValidarEmail(novoEmail);
        Email = novoEmail;
    }

    public void AlterarSenha(string novaSenhaHash)
    {
        if (string.IsNullOrWhiteSpace(novaSenhaHash))
            throw new UsuarioInvalidoException("A nova senha é obrigatória.");

        SenhaHash = novaSenhaHash;
    }

    public void DefinirPerfil(InformacoesUsuario perfil)
    {
        ArgumentNullException.ThrowIfNull(perfil);
        Perfil = perfil;
    }

    public void PromoverParaAdmin()
    {
        if (Role == RoleEnum.Admin)
            throw new UsuarioInvalidoException("O usuário já é administrador.");

        Role = RoleEnum.Admin;
    }

    protected Usuario()
    {
        Email = null!;
        SenhaHash = null!;
    }

    private static void ValidarEmail(string email)
    {
        if (string.IsNullOrWhiteSpace(email))
            throw new UsuarioInvalidoException("O email é obrigatório.");

        if (!email.Contains('@'))
            throw new UsuarioInvalidoException("O email é inválido.");

        if (email.Length < 5)
            throw new UsuarioInvalidoException("O email deve conter pelo menos 5 caracteres.");
    }
}