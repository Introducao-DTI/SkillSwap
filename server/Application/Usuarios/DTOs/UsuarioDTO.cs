using SkillSwap.Core.Usuarios.Enums;

namespace SkillSwap.Application.Usuarios.DTOs;

public record UsuarioDTO(
    Guid Id,
    string Nome,
    RoleEnum Role
);