using SkillSwap.Core.Usuarios;
using Microsoft.AspNetCore.Identity;

namespace SkillSwap.Application.Usuarios.Services;

public interface ISenhaService
{
    string HashSenha(string password);
    PasswordVerificationResult VerificarSenha(Usuario usuario, string senhaHash, string senhaEnviada);
}