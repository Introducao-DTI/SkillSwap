using SkillSwap.Core.Usuarios.Models;

namespace SkillSwap.Core.Usuarios.Ports.Out;

public interface IVerificacaoRepository
{
  Task SalvarAsync(CodigoVerificacao codigo);
  Task<CodigoVerificacao?> ObterUltimoCodigoAsync(Guid usuarioId);
  Task AtualizarAsync(CodigoVerificacao codigo);
}
