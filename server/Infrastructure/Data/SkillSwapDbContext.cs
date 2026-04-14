using Microsoft.EntityFrameworkCore;
using SkillSwap.Core.Usuarios.Models;

namespace SkillSwap.Infrastructure.Data;

public class SkillSwapDbContext : DbContext
{
    public SkillSwapDbContext(DbContextOptions<SkillSwapDbContext> options) : base(options)
    {
    }

    public DbSet<Usuario> Usuarios { get; set; }
    public DbSet<InformacoesUsuario> InformacoesUsuarios { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<InformacoesUsuario>()
            .OwnsOne(i => i.Endereco);

        modelBuilder.Entity<Usuario>()
            .HasOne(u => u.Perfil)
            .WithOne()
            .HasForeignKey<InformacoesUsuario>(i => i.UsuarioId);
    }
}