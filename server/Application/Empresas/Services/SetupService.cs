using SkillSwap.Application.Empresas.DTOs;
using SkillSwap.Application.Usuarios.DTOs;
using SkillSwap.Core.Empresas.Models;
using SkillSwap.Core.Empresas.Ports.Out;
using SkillSwap.Core.Empresas.ValueObjects;
using SkillSwap.Core.Shared;
using SkillSwap.Core.Usuarios.Enums;
using SkillSwap.Core.Usuarios.Ports.Out;

namespace SkillSwap.Application.Empresas.Services;

public class SetupService(IConviteRepository conviteRepository, IEmpresaRepository empresaRepository, IMigrationService migrationService, ITokenService tokenService) : ISetupService
{
  public async Task<Result<SetupEmpresaResponseDTO>> ConfigurarEmpresaAsync(SetupEmpresaRequestDTO request)
  {
    var token = await conviteRepository.ObterPorTokenAsync(request.TokenConvite);

    if (token == null || !token.EstaValido())
      return Result<SetupEmpresaResponseDTO>.Falha("Token de convite inválido ou expirado.");

    if (token.Role != RoleEnum.Admin)
      return Result<SetupEmpresaResponseDTO>.Falha("Token de convite não é de administrador.");

    if (await empresaRepository.ExisteCnpjAsync(request.DadosEmpresa.Cnpj))
      return Result<SetupEmpresaResponseDTO>.Falha("CNPJ já cadastrado.");

    if (await empresaRepository.ExisteDominioAsync(request.DadosEmpresa.DominioAcesso))
      return Result<SetupEmpresaResponseDTO>.Falha("Domínio de acesso já em uso.");

    var empresa = new Empresa(
        new Cnpj(request.DadosEmpresa.Cnpj),
        request.DadosEmpresa.RazaoSocial,
        request.DadosEmpresa.DominioAcesso
    );

    await empresaRepository.CriarEmpresaAsync(empresa);
    await migrationService.AplicarMigracoesAsync(empresa.BancoDadosNome);
    await conviteRepository.ConsumirTokenAsync(request.TokenConvite);

    var idAdmin = token.UsuarioId ?? request.UsuarioAdminId;

    var jwtToken = tokenService.GenerateToken(idAdmin, token.Email, token.Role.ToString(), empresa.Id);

    return Result<SetupEmpresaResponseDTO>.Ok(
        new SetupEmpresaResponseDTO(jwtToken, empresa.Id, idAdmin)
    );
  }
}