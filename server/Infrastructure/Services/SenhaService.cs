using SkillSwap.Core.Usuarios.Models;
using BC = BCrypt.Net.BCrypt;
using SkillSwap.Core.Usuarios.Enums;
using SkillSwap.Core.Usuarios.Ports.Out;

namespace SkillSwap.Infrastructure.Services;

public class SenhaService : ISenhaService
{
    public string HashSenha(string password)
    {
        return BC.HashPassword(password);
    }

    public ResultadoVerificacaoSenhaEnum VerificarSenha(string senhaHash, string senhaEnviada)
    {
        return BC.Verify(senhaEnviada, senhaHash) ? ResultadoVerificacaoSenhaEnum.Sucesso : ResultadoVerificacaoSenhaEnum.Falha;
    }
}