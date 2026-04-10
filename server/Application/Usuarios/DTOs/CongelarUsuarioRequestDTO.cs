namespace SkillSwap.Application.Usuarios.DTOs;

public record CongelarUsuarioRequestDTO(
    DateTime DataExpiracao,
    string Motivo
);