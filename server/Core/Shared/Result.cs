namespace SkillSwap.Core.Shared;

public class Result<T>
{
    public T? Value { get; }
    public string? Erro { get; }
    public bool Sucesso => Erro is null;

    private Result(T value) => Value = value;
    private Result(string erro) => Erro = erro;

    public static Result<T> Ok(T value) => new(value);
    public static Result<T> Falha(string erro) => new(erro);
}

public class Result
{
    public string? Erro { get; }
    public bool Sucesso => Erro is null;

    private Result() { }
    private Result(string erro) => Erro = erro;

    public static Result Ok() => new();
    public static Result Falha(string erro) => new(erro);
}