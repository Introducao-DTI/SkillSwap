using SkillSwap.Core.Usuarios.Enums;

namespace SkillSwap.Core.Usuarios.Ports.Out;

public interface ISenhaService
{
    string HashSenha(string password);
    ResultadoVerificacaoSenhaEnum VerificarSenha(string senhaHash, string senhaEnviada);
}