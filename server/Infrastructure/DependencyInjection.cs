using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SkillSwap.Core.Usuarios.Ports.Out;
using SkillSwap.Core.Empresas.Ports.Out;
using SkillSwap.Infrastructure.Data;
using SkillSwap.Infrastructure.Repositories;
using SkillSwap.Infrastructure.Security;
using SkillSwap.Infrastructure.Services;

namespace SkillSwap.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddScoped<IUsuarioRepository, UsuarioRepository>();
        services.AddScoped<IEmpresaRepository, EmpresaRepository>();
        services.AddScoped<IVerificacaoRepository, VerificacaoRepository>();
        services.AddScoped<IConviteRepository, ConviteRepository>();

        services.AddScoped<ISenhaService, SenhaService>();
        services.AddScoped<IEmailService, SmtpEmailService>();
        services.AddScoped<ITokenService, TokenService>();
        services.AddScoped<ITenantService, TenantService>();
        services.AddScoped<IMigrationService, MigrationService>();

        services.AddHttpContextAccessor();

        services.AddDbContext<MasterDbContext>(options =>
            options.UseSqlite(
                configuration.GetConnectionString("Master")
            ));

        services.AddScoped<SkillSwapDbContext>(provider =>
        {
            var tenantService = provider.GetRequiredService<ITenantService>();
            var empresaId = tenantService.ObterEmpresaId();

            if (empresaId == Guid.Empty)
            {
                var defaultOptions = new DbContextOptionsBuilder<SkillSwapDbContext>()
            .UseSqlite("Data Source=skillswap.db")
            .Options;
                return new SkillSwapDbContext(defaultOptions);
            }

            var bancoDados = tenantService.ObterBancoDeDadosAsync()
        .GetAwaiter().GetResult();

            var options = new DbContextOptionsBuilder<SkillSwapDbContext>()
        .UseSqlite($"Data Source={bancoDados}.db")
        .Options;

            return new SkillSwapDbContext(options);
        });


        return services;
    }
}