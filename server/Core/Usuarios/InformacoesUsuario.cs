using SkillSwap.Core.Usuarios.Exceptions;

namespace SkillSwap.Core.Usuarios;

public class InformacoesUsuario
{
    public Guid Id { get; private set; }
    public Guid UsuarioId { get; private set; }
    public string Nome { get; private set; }
    public string Telefone { get; private set; }

    public Endereco Endereco { get; private set; }

    public InformacoesUsuario(Guid usuarioId, string nome, string telefone, Endereco endereco)
    {
        if (string.IsNullOrWhiteSpace(nome))
            throw new UsuarioInvalidoException("O nome é obrigatório.");

        Id = Guid.NewGuid();
        Nome = nome;
        UsuarioId = usuarioId;
        Telefone = telefone;
        Endereco = endereco;
    }

    protected InformacoesUsuario() { Telefone = null!; Nome = null!; Endereco = null!; }
}