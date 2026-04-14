using SkillSwap.Core.Usuarios.Exceptions;

namespace SkillSwap.Core.Usuarios.ValueObjects;

public record DadosEmpresa
{
    public string RazaoSocial { get; init; }
    public Cnpj CNPJ { get; init; }
    public string DominioAcesso { get; init; }

    public DadosEmpresa(string razaoSocial, Cnpj cnpj, string dominioAcesso)
    {
        if (string.IsNullOrWhiteSpace(razaoSocial))
            throw new EmpresaInvalidaException("A razão social é obrigatória.");

        if (string.IsNullOrWhiteSpace(dominioAcesso))
            throw new EmpresaInvalidaException("O domínio de acesso é obrigatório.");

        RazaoSocial = razaoSocial;
        CNPJ = cnpj;
        DominioAcesso = dominioAcesso;
    }

    protected DadosEmpresa() { RazaoSocial = null!; CNPJ = null!; DominioAcesso = null!; }
}