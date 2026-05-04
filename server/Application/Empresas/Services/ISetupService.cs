using SkillSwap.Application.Usuarios.DTOs;
using SkillSwap.Application.Empresas.DTOs;
using SkillSwap.Core.Shared;

namespace SkillSwap.Application.Empresas.Services;

public interface ISetupService
{
  Task<Result<SetupEmpresaResponseDTO>> ConfigurarEmpresaAsync(SetupEmpresaRequestDTO request);
}