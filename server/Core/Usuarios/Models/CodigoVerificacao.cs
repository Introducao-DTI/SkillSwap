using SkillSwap.Core.Usuarios.Exceptions;

namespace SkillSwap.Core.Usuarios.Models;

public class CodigoVerificacao
{
  public Guid Id { get; private set; }
  public Guid UsuarioId { get; private set; }
  public string Codigo { get; private set; }
  public string Metodo { get; private set; }
  public DateTime Expiracao { get; private set; }
  public bool Utilizado { get; private set; }

  public CodigoVerificacao(Guid usuarioId, string metodo)
  {
    Id = Guid.NewGuid();
    UsuarioId = usuarioId;
    Codigo = GerarCodigo();
    Metodo = metodo;
    Expiracao = DateTime.UtcNow.AddHours(2);
    Utilizado = false;
  }

  public bool EstaValido() =>
      !Utilizado && DateTime.UtcNow < Expiracao;

  public void Utilizar()
  {
    if (!EstaValido())
      throw new UsuarioInvalidoException("Código inválido ou expirado.");

    Utilizado = true;
  }

  protected CodigoVerificacao()
  {
    Codigo = null!;
    Metodo = null!;
  }

  private static string GerarCodigo() =>
      Random.Shared.Next(100000, 999999).ToString();
}