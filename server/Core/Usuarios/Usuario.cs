using SkillSwap.Core.Usuarios.Exceptions;
using SkillSwap.Core.Usuarios.Enums;

namespace SkillSwap.Core.Usuarios;

public class Usuario
{
    public Guid Id { get; private set; }
    public string Email { get; private set; }
    public RoleEnum Role { get; private set; }
    public string SenhaHash { get; private set; }
    public DateTime DataCriacao { get; private set; }
    public InformacoesUsuario? Perfil { get; private set; }

    public Usuario(string email, RoleEnum role, string senhaHash)
    {
        if (string.IsNullOrWhiteSpace(email))
            throw new UsuarioInvalidoException("O email do usuário é obrigatório.");

        if (!email.Contains("@"))
            throw new UsuarioInvalidoException("O email do usuário é inválido.");

        if (email.Length < 5)
            throw new UsuarioInvalidoException("O email do usuário deve conter pelo menos 5 caracteres.");

        if (string.IsNullOrWhiteSpace(senhaHash))
            throw new UsuarioInvalidoException("A senha é obrigatória.");

        Id = Guid.NewGuid();
        Email = email;
        Role = role;
        SenhaHash = senhaHash;
        DataCriacao = DateTime.UtcNow;
    }

    // Construtor para ORM EF Core
    protected Usuario()
    {
        Email = null!;
        SenhaHash = null!;
        Perfil = null!;
    }
}