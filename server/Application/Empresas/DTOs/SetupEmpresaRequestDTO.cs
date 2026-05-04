namespace SkillSwap.Application.Empresas.DTOs;

public record SetupEmpresaRequestDTO(string TokenConvite, Guid UsuarioAdminId, DadosEmpresaDTO DadosEmpresa);