using Microsoft.EntityFrameworkCore;
using SkillSwap.Core.Empresas.Models;
using SkillSwap.Core.Empresas.Ports.Out;
using SkillSwap.Infrastructure.Data;

namespace SkillSwap.Infrastructure.Repositories;

public class EmpresaRepository(MasterDbContext _context) : IEmpresaRepository
{
  public async Task<Empresa> CriarEmpresaAsync(Empresa empresa)
  {
    _context.Empresas.Add(empresa);
    await _context.SaveChangesAsync();
    return empresa;
  }

  public async Task<bool> ExisteCnpjAsync(string cnpj)
  {
    return await _context.Empresas.AnyAsync(e => e.Cnpj.Valor == cnpj);
  }

  public async Task<bool> ExisteDominioAsync(string dominio)
  {
    return await _context.Empresas.AnyAsync(e => e.DominioAcesso == dominio);
  }

  public async Task<Empresa?> ObterEmpresaPorDominioAsync(string dominio)
  {
    return await _context.Empresas.FirstOrDefaultAsync(e => e.DominioAcesso == dominio);
  }

  public async Task<Empresa?> ObterEmpresaPorIdAsync(Guid id)
  {
    return await _context.Empresas.FirstOrDefaultAsync(e => e.Id == id);
  }
}