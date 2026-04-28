using Microsoft.EntityFrameworkCore;
using SkillSwap.Core.Empresas.Models;

namespace SkillSwap.Infrastructure.Data;

public class MasterDbContext : DbContext
{
  public MasterDbContext(DbContextOptions<MasterDbContext> options) : base(options)
  {
  }

  public DbSet<Empresa> Empresas { get; set; }


  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    modelBuilder.Entity<Empresa>(empresa =>
    {
      empresa.HasKey(e => e.Id);
      empresa.OwnsOne(e => e.Cnpj, cnpj =>
      {
        cnpj.HasIndex(c => c.Valor).IsUnique();
      });
      empresa.HasIndex(e => e.DominioAcesso).IsUnique();
    });
  }
}