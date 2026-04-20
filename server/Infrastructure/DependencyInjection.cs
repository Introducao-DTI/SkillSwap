using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SkillSwap.Core.Usuarios.Ports.Out;
using SkillSwap.Infrastructure.Data;
using SkillSwap.Infrastructure.Repositories;
using SkillSwap.Infrastructure.Security;
using SkillSwap.Infrastructure.Services;

namespace SkillSwap.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services)
    {
        services.AddScoped<IUsuarioRepository, UsuarioRepository>();
        services.AddScoped<IVerificacaoRepository, VerificacaoRepository>();

        services.AddScoped<ISenhaService, SenhaService>();
        services.AddScoped<IEmailService, SmtpEmailService>();

        services.AddDbContext<SkillSwapDbContext>(options =>
            options.UseSqlite("Data Source=skillswap.db"));

        return services;
    }
}