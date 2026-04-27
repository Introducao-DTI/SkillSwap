namespace SkillSwap.Core.Usuarios.Ports.Out;

public interface IEmailService
{
  Task EnviarCodigoVerificacaoAsync(string destinatario, string codigo);
}