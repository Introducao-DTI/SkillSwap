using SkillSwap.Application.Usuarios.Services;
using SkillSwap.Core.Usuarios.Repositories;
using SkillSwap.Infrastructure.Repositories;
using SkillSwap.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen();

builder.Services.AddScoped<IUsuarioService, UsuarioService>();
builder.Services.AddScoped<ISenhaService, SenhaService>();

builder.Services.AddScoped<IUsuarioRepository, UsuarioRepository>();

builder.Services.AddDbContext<SkillSwapDbContext>(options =>
    options.UseInMemoryDatabase("SkillSwapDb"));

builder.Services.AddControllers();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();

    app.UseSwaggerUI(options =>
    {
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "My API v1");
    });
}

app.MapControllers();
app.UseHttpsRedirection();

app.Run();