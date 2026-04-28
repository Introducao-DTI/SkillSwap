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


        services.AddDbContext<MasterDbContext>(options =>
            options.UseSqlite(
                configuration.GetConnectionString("Master")
            ));

        services.AddDbContext<SkillSwapDbContext>(options =>
            options.UseSqlite("Data Source=skillswap.db"));

        return services;
    }
}