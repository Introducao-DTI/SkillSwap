namespace SkillSwap.Core.Usuarios.Exceptions;

public class UsuarioNaoEncontradoException : Exception
{
    public UsuarioNaoEncontradoException(string message) : base(message)
    {
    }
}