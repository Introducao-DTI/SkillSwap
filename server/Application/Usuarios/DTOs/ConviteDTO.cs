namespace SkillSwap.Application.Usuarios.DTOs;

public record ConviteDTO(
string Token,
string Email,
string Nome,
string Role,
DateTime Expiracao,
Guid? UsuarioId,
string Etapa
);