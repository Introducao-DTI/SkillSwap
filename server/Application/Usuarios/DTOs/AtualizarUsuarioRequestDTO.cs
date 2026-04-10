using SkillSwap.Core.Usuarios.Enums;

namespace SkillSwap.Application.Usuarios.DTOs;

public record AtualizarUsuarioRequestDTO(
    string Nome,
    RoleEnum Role
);