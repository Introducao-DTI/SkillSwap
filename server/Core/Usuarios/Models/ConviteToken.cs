using SkillSwap.Core.Usuarios.Enums;

namespace SkillSwap.Core.Usuarios.Models;

public class ConviteToken
{
  public Guid Id { get; private set; }
  public string Token { get; private set; }
  public string Email { get; private set; }
  public string Nome { get; private set; }
  public RoleEnum Role { get; private set; }
  public DateTime Expiracao { get; private set; }
  public bool Utilizado { get; private set; }

  public ConviteToken(string email, string nome, RoleEnum role)
  {
    Id = Guid.NewGuid();
    Token = Guid.NewGuid().ToString("N");
    Email = email;
    Nome = nome;
    Role = role;
    Expiracao = DateTime.UtcNow.AddDays(2);
    Utilizado = false;
  }

  public bool EstaValido() =>
      !Utilizado && DateTime.UtcNow < Expiracao;

  public void Utilizar()
  {
    if (!EstaValido())
      throw new Exception("Convite inválido ou expirado.");
    Utilizado = true;
  }

  protected ConviteToken()
  {
    Token = null!;
    Email = null!;
    Nome = null!;
  }
}