namespace SkillSwap.Core.Usuarios.Exceptions;

public class UsuarioInvalidoException : Exception
{
    public UsuarioInvalidoException(string message) : base(message)
    {
    }
}