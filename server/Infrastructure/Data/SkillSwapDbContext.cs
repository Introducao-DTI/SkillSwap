using Microsoft.EntityFrameworkCore;
using SkillSwap.Core.Usuarios.Models;

namespace SkillSwap.Infrastructure.Data;

public class SkillSwapDbContext : DbContext
{
    public SkillSwapDbContext(DbContextOptions<SkillSwapDbContext> options) : base(options)
    {
    }

    public DbSet<Usuario> Usuarios { get; set; }
    public DbSet<CodigoVerificacao> CodigosVerificacao { get; set; }
    public DbSet<ConviteToken> ConviteTokens { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Usuario>(usuario =>
        {
            usuario.HasKey(u => u.Id);

            usuario.Property(u => u.Role).HasConversion<string>();

            usuario.Property(u => u.Status).HasConversion<string>();

            usuario.OwnsOne(u => u.Perfil, perfil =>
            {
                perfil.ToTable("Informacoes");

                perfil.Property(p => p.MetodoVerificacaoEnum).HasConversion<string>();

                perfil.OwnsOne(p => p.Telefone);
                perfil.OwnsOne(p => p.Endereco);
                perfil.OwnsOne(p => p.Empresa, empresa =>
                {
                    empresa.OwnsOne(e => e.CNPJ);
                });
            });
        });

        modelBuilder.Entity<ConviteToken>(ct =>
        {
            ct.HasKey(c => c.Id);
            ct.Property(c => c.Role).HasConversion<string>();
        });

        modelBuilder.Entity<CodigoVerificacao>(cv =>
        {
            cv.HasKey(c => c.Id);
        });
    }
}