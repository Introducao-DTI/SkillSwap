using SkillSwap.Core.Usuarios.Exceptions;
using SkillSwap.Core.Usuarios.ValueObjects;

namespace SkillSwap.Core.Usuarios.Models;

public class InformacoesUsuario
{
    public Guid Id { get; private set; }
    public Guid UsuarioId { get; private set; }
    public Telefone Telefone { get; private set; }
    public Endereco? Endereco { get; private set; }
    public DadosEmpresa? Empresa { get; private set; }

    public InformacoesUsuario(Guid usuarioId, Telefone telefone)
    {
        Id = Guid.NewGuid();
        UsuarioId = usuarioId;
        Telefone = telefone;
    }

    protected InformacoesUsuario() { Telefone = null!; Endereco = null!; }

    public void DefinirEndereco(Endereco endereco)
    {
        ArgumentNullException.ThrowIfNull(endereco);
        Endereco = endereco;
    }

    public void AssociarEmpresa(DadosEmpresa empresa)
    {
        ArgumentNullException.ThrowIfNull(empresa);
        Empresa = empresa;
    }
    public void AtualizarTelefone(Telefone telefone)
    {
        ArgumentNullException.ThrowIfNull(telefone);
        Telefone = telefone;
    }
}