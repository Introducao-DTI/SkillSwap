using Microsoft.Extensions.DependencyInjection;
using SkillSwap.Application.Usuarios.Services;

namespace SkillSwap.Application;

public static class DependencyInjection
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        services.AddScoped<IUsuarioService, UsuarioService>();

        return services;
    }
}