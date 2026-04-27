using SkillSwap.Core.Usuarios.Models;

public interface IConviteRepository
{
  Task SalvarAsync(ConviteToken convite);
  Task<ConviteToken?> ObterPorTokenAsync(string token);
  Task AtualizarAsync(ConviteToken convite);
  Task InvalidarTokenPorEmailAsync(string email);
  Task ConsumirTokenAsync(string token);
  Task AvancarEtapaAsync(Guid usuarioId, string novaEtapa);
}
