public record GerarConviteRequestDTO(
string Email,
string Nome,
string Role
);

public record ConviteDTO(
string Token,
string Email,
string Nome,
string Role,
DateTime Expiracao
);