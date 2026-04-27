using SkillSwap.Core.Shared;

namespace SkillSwap.Application.Usuarios.Services;

public interface IVerificacaoService
{
  Task<Result> EnviarCodigoAsync(Guid usuarioId, string metodo);
  Task<Result> ValidarCodigoAsync(Guid usuarioId, string codigo);
}