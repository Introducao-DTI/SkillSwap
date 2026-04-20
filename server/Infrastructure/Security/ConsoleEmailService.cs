using SkillSwap.Core.Usuarios.Ports.Out;

namespace SkillSwap.Infrastructure.Services;

public class ConsoleEmailService : IEmailService
{
  public Task EnviarCodigoVerificacaoAsync(string destinatario, string codigo)
  {
    Console.WriteLine("─────────────────────────────────");
    Console.WriteLine($"📧 Para: {destinatario}");
    Console.WriteLine($"🔑 Código: {codigo}");
    Console.WriteLine($"⏰ Expira em: 2 horas");
    Console.WriteLine("─────────────────────────────────");

    return Task.CompletedTask;
  }
}