using SkillSwap.Core.Usuarios;
using BC = BCrypt.Net.BCrypt;
using Microsoft.AspNetCore.Identity;

namespace SkillSwap.Application.Usuarios.Services;

public class SenhaService : ISenhaService
{
    public string HashSenha(string password)
    {
        return BC.HashPassword(password);
    }

    public PasswordVerificationResult VerificarSenha(Usuario usuario, string senhaHash, string senhaEnviada)
    {
        return BC.Verify(senhaEnviada, senhaHash) ? PasswordVerificationResult.Success : PasswordVerificationResult.Failed;
    }
}