using SkillSwap.Core.Usuarios.Exceptions;

namespace SkillSwap.Core.Usuarios;

public class Endereco
{
    public string Rua { get; private set; }
    public string Numero { get; private set; }
    public string Complemento { get; private set; }
    public string Bairro { get; private set; }
    public string Cidade { get; private set; }
    public string Estado { get; private set; }
    public string Cep { get; private set; }

    public Endereco(string rua, string numero, string complemento, string bairro, string cidade, string estado, string cep)
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
        Cep = cep;
    }

    protected Endereco()
    {
        Rua = null!; Numero = null!; Complemento = null!;
        Bairro = null!; Cidade = null!; Estado = null!; Cep = null!;
    }
}