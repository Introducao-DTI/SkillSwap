using SkillSwap.Application.Usuarios.Services;
using SkillSwap.Core.Shared;
using SkillSwap.Core.Usuarios.Models;
using SkillSwap.Core.Usuarios.Ports.Out;

namespace SkillSwap.Application.Verificacao.Services;

public class VerificacaoService(
IVerificacaoRepository verificacaoRepository,
IUsuarioRepository usuarioRepository,
IEmailService emailService) : IVerificacaoService
{
  public async Task<Result> EnviarCodigoAsync(Guid usuarioId, string metodo)
  {
    var usuario = await usuarioRepository.ObterUsuarioPorIdAsync(usuarioId);

    if (usuario is null)
      return Result.Falha("Usuário não encontrado.");

    var codigo = new CodigoVerificacao(usuarioId, metodo);

    await verificacaoRepository.SalvarAsync(codigo);

    await emailService.EnviarCodigoVerificacaoAsync(usuario.Email, codigo.Codigo);

    return Result.Ok();
  }

  public async Task<Result> ValidarCodigoAsync(Guid usuarioId, string codigo)
  {
    var codigoVerificacao = await verificacaoRepository.ObterUltimoCodigoAsync(usuarioId);

    if (codigoVerificacao is null)
      return Result.Falha("Nenhum código encontrado para este usuário.");

    if (!codigoVerificacao.EstaValido())
      return Result.Falha("Código expirado.");

    if (codigoVerificacao.Codigo != codigo)
      return Result.Falha("Código inválido.");

    codigoVerificacao.Utilizar();

    await verificacaoRepository.AtualizarAsync(codigoVerificacao);

    return Result.Ok();
  }
}