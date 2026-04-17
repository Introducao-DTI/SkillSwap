namespace SkillSwap.Application.Usuarios.DTOs;

public record InformacoesDTO(
    string Nome,
    string Email,
    string Telefone,
    string Rua,
    string Numero,
    string Bairro,
    string Cidade,
    string Estado,
    string Cep
);