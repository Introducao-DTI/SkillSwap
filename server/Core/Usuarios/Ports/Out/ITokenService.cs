namespace SkillSwap.Core.Usuarios.Ports.Out;

public interface ITokenService
{
  string GenerateToken(Guid usuarioId, string email, string role, Guid? empresaId = null);
}