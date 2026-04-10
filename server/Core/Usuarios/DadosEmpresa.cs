using SkillSwap.Core.Usuarios.Exceptions;

namespace SkillSwap.Core.Usuarios;

public class DadosEmpresa
{
    public string RazaoSocial { get; private set; }
    public string CNPJ { get; private set; }
    public string DominioAcesso { get; private set; }

    public DadosEmpresa(string razaoSocial, string cnpj, string dominioAcesso)
    {
        if (string.IsNullOrWhiteSpace(razaoSocial))
            throw new EmpresaInvalidaException("A razão social da empresa é obrigatória.");

        if (string.IsNullOrWhiteSpace(cnpj))
            throw new EmpresaInvalidaException("O CNPJ da empresa é obrigatório.");

        if (string.IsNullOrWhiteSpace(dominioAcesso))
            throw new EmpresaInvalidaException("O domínio de acesso da empresa é obrigatório.");

        if (!ValidarCNPJ(cnpj))
            throw new EmpresaInvalidaException("O CNPJ fornecido é inválido.");

        RazaoSocial = razaoSocial;
        CNPJ = cnpj;
        DominioAcesso = dominioAcesso;
    }

    protected DadosEmpresa()
    {
        RazaoSocial = null!;
        CNPJ = null!;
        DominioAcesso = null!;
    }

    public bool ValidarCNPJ(string cnpj)
    {
        // Valida se o CNPJ tem 14 dígitos
        if (cnpj.Length != 14)
            return false;

        // Valida se o CNPJ contém apenas números
        if (!long.TryParse(cnpj, out _))
            return false;

        return true;
    }
}