using SkillSwap.Core.Empresas.Models;

namespace SkillSwap.Core.Empresas.Ports.Out;

public interface IEmpresaRepository
{
  Task<Empresa> CriarEmpresaAsync(Empresa empresa);
  Task<Empresa?> ObterEmpresaPorIdAsync(Guid id);
  Task<Empresa?> ObterEmpresaPorDominioAsync(string dominio);
  Task<bool> ExisteCnpjAsync(string cnpj);
  Task<bool> ExisteDominioAsync(string dominio);
}