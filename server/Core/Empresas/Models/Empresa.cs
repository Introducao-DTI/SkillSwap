using SkillSwap.Core.Empresas.ValueObjects;

namespace SkillSwap.Core.Empresas.Models;

public class Empresa
{
  public Guid Id { get; private set; }
  public Cnpj Cnpj { get; private set; }
  public string RazaoSocial { get; private set; }
  public string DominioAcesso { get; private set; }
  public string BancoDadosNome { get; private set; }
  public DateTime DataCriacao { get; private set; }
  public bool Ativo { get; private set; }

  public Empresa(Cnpj cnpj, string razaoSocial, string dominioAcesso)
  {
    if (string.IsNullOrWhiteSpace(razaoSocial) || razaoSocial.Length < 3 || razaoSocial.Length > 150)
      throw new ArgumentException("A razão social deve ter entre 3 e 150 caracteres.");

    ValidarDominioAcesso(dominioAcesso);

    Id = Guid.NewGuid();
    Cnpj = cnpj;
    RazaoSocial = razaoSocial;
    DominioAcesso = dominioAcesso;
    BancoDadosNome = GerarNomeBancoDados();
    DataCriacao = DateTime.UtcNow;
    Ativo = true;
  }

  protected Empresa()
  {
    Cnpj = null!;
    RazaoSocial = null!;
    DominioAcesso = null!;
    BancoDadosNome = null!;
  }

  private string GerarNomeBancoDados()
  {
    var dominioAcessoSomenteUrl = string.Empty;

    if (DominioAcesso.Contains("www"))
    {
      dominioAcessoSomenteUrl = DominioAcesso.Split('.').Skip(1).FirstOrDefault() ?? DominioAcesso;
    }
    else
    {
      dominioAcessoSomenteUrl = DominioAcesso.Split('.').FirstOrDefault() ?? DominioAcesso;
    }

    return $"tenant_{dominioAcessoSomenteUrl.ToLower()}_{Id.ToString().Replace("-", "")}";
  }

  private static void ValidarDominioAcesso(string dominioUrl)
  {
    if (!System.Text.RegularExpressions.Regex.IsMatch(dominioUrl, @"^[a-zA-Z0-9.\-]+$"))
      throw new ArgumentException("O domínio de acesso contém caracteres inválidos.");

    if (string.IsNullOrWhiteSpace(dominioUrl))
      throw new ArgumentException("O domínio de acesso é obrigatório.");

    if (dominioUrl.Length < 3 || dominioUrl.Length > 50)
      throw new ArgumentException("O domínio de acesso deve ter entre 3 e 50 caracteres.");

    if (dominioUrl.Contains(" "))
      throw new ArgumentException("O domínio de acesso não pode conter espaços.");
  }

  public void DesativarEmpresa()
  {
    if (!Ativo)
      throw new InvalidOperationException("A empresa já está desativada.");
    Ativo = false;
  }

  public void AtivarEmpresa()
  {
    if (Ativo)
      throw new InvalidOperationException("A empresa já está ativa.");
    Ativo = true;
  }
}