using MailKit.Net.Smtp;
using MimeKit;
using SkillSwap.Core.Usuarios.Ports.Out;
using Microsoft.Extensions.Configuration;

namespace SkillSwap.Infrastructure.Security;

public class SmtpEmailService(IConfiguration configuration) : IEmailService
{
  private readonly string _host = configuration["Smtp:Host"]!;
  private readonly int _port = int.Parse(configuration["Smtp:Port"]!);
  private readonly string _usuario = configuration["Smtp:Usuario"]!;
  private readonly string _senha = configuration["Smtp:Senha"]!;
  private readonly string _emailRemetente = configuration["Smtp:EmailRemetente"]!;
  private readonly string _nomeRemetente = configuration["Smtp:NomeRemetente"]!;

  public async Task EnviarCodigoVerificacaoAsync(string destinatario, string codigo)
  {
    var mensagem = new MimeMessage();

    mensagem.From.Add(new MailboxAddress(_nomeRemetente, _emailRemetente));
    mensagem.To.Add(new MailboxAddress("", destinatario));
    mensagem.Subject = "Código de Verificação - SkillSwap";

    mensagem.Body = new TextPart("html")
    {
      Text = $"""
            <h2>SkillSwap — Verificação de Conta</h2>
            <p>Seu código de verificação é:</p>
            <h1 style="letter-spacing: 8px;">{codigo}</h1>
            <p>Este código expira em <strong>2 horas</strong>.</p>
        """
    };

    using var client = new SmtpClient();
    await client.ConnectAsync(_host, _port, true);
    await client.AuthenticateAsync(_usuario, _senha);
    await client.SendAsync(mensagem);
    await client.DisconnectAsync(true);
  }
}