namespace SkillSwap.Application.Usuarios.DTOs;

public record InformacoesDTO(
    string Email,
    string Telefone,
    string Rua,
    string Numero,
    string? Complemento,
    string Bairro,
    string Cidade,
    string Estado,
    string Cep
);