using SkillSwap.Core.Usuarios.Enums;

namespace SkillSwap.Application.Usuarios.DTOs;

public record CriarUsuarioResponseDTO(
    Guid Id,
    string Nome,
    RoleEnum Role,
    string Token
);