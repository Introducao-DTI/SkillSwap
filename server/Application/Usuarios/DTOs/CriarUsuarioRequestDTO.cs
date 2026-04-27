namespace SkillSwap.Application.Usuarios.DTOs;

public record CriarUsuarioRequestDTO(
    string Nome,
    string Email,
    string Telefone,
    string Senha,
    string TokenConvite
);