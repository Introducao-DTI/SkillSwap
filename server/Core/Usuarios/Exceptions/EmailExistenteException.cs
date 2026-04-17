namespace SkillSwap.Core.Usuarios.Exceptions;

public class EmailExistenteException : Exception
{
    public EmailExistenteException(string message) : base(message)
    {
    }
}