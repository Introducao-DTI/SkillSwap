using SkillSwap.Core.Empresas.Exceptions;

namespace SkillSwap.Core.Empresas.ValueObjects;

public record Cnpj
{
    public string Valor { get; init; }

    public Cnpj(string valor)
    {
        var apenasDigitos = new string(valor.Where(char.IsDigit).ToArray());

        if (string.IsNullOrEmpty(apenasDigitos) || apenasDigitos.Length != 14)
        {
            throw new EmpresaInvalidaException("CNPJ deve conter exatamente 14 dígitos.");
        }

        Valor = apenasDigitos;
    }

    protected Cnpj() { Valor = null!; }

    public override string ToString() =>
        $"{Valor[..2]}.{Valor[2..5]}.{Valor[5..8]}/{Valor[8..12]}-{Valor[12..]}";
}