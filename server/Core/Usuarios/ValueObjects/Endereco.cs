using SkillSwap.Core.Usuarios.Exceptions;

namespace SkillSwap.Core.Usuarios.ValueObjects;

public record Endereco
{
    public string Rua { get; init; }
    public string Numero { get; init; }
    public string? Complemento { get; init; }
    public string Bairro { get; init; }
    public string Cidade { get; init; }
    public string Estado { get; init; }
    public string Cep { get; init; }

    public Endereco(string rua, string numero, string bairro,
                    string cidade, string estado, string cep,
                    string? complemento = null)
    {
        if (string.IsNullOrWhiteSpace(rua))
            throw new EnderecoInvalidoException("A rua é obrigatória.");

        if (string.IsNullOrWhiteSpace(numero))
            throw new EnderecoInvalidoException("O número é obrigatório.");

        if (string.IsNullOrWhiteSpace(bairro))
            throw new EnderecoInvalidoException("O bairro é obrigatório.");

        if (string.IsNullOrWhiteSpace(cidade))
            throw new EnderecoInvalidoException("A cidade é obrigatória.");

        if (string.IsNullOrWhiteSpace(estado))
            throw new EnderecoInvalidoException("O estado é obrigatório.");

        if (string.IsNullOrWhiteSpace(cep))
            throw new EnderecoInvalidoException("O CEP é obrigatório.");

        Rua = rua;
        Numero = numero;
        Complemento = complemento;
        Bairro = bairro;
        Cidade = cidade;
        Estado = estado;
        Cep = new string(cep.Where(char.IsDigit).ToArray());
    }

    protected Endereco()
    {
        Rua = null!; Numero = null!;
        Bairro = null!; Cidade = null!;
        Estado = null!; Cep = null!;
    }
}