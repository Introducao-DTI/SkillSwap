using Microsoft.Extensions.DependencyInjection;
using SkillSwap.Application.Usuarios.Services;
using SkillSwap.Application.Verificacao.Services;

namespace SkillSwap.Application;

public static class DependencyInjection
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        services.AddScoped<IUsuarioService, UsuarioService>();
        services.AddScoped<IVerificacaoService, VerificacaoService>();
        services.AddScoped<IConviteService, ConviteService>();

        return services;
    }
}