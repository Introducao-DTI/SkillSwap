using SkillSwap.Core.Usuarios.Exceptions;

namespace SkillSwap.Core.Usuarios.ValueObjects;

public record Telefone
{
    public string Numero { get; init; }

    public Telefone(string numero)
    {
        var apenasDigitos = new string(numero.Where(char.IsDigit).ToArray());

        if (string.IsNullOrWhiteSpace(apenasDigitos))
            throw new UsuarioInvalidoException("O telefone é obrigatório.");

        if (apenasDigitos.Length < 10 || apenasDigitos.Length > 11)
            throw new UsuarioInvalidoException("O telefone deve conter 10 ou 11 dígitos.");

        Numero = apenasDigitos;
    }

    protected Telefone() { Numero = null!; }

    public override string ToString() => Numero.Length == 11
        ? $"({Numero[..2]}) {Numero[2..7]}-{Numero[7..]}"
        : $"({Numero[..2]}) {Numero[2..6]}-{Numero[6..]}";
}