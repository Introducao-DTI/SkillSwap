using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using SkillSwap.Core.Usuarios.Ports.Out;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using System.Security.Claims;

namespace SkillSwap.Infrastructure.Security;

public class TokenService(IConfiguration configuration) : ITokenService
{
  public string GenerateToken(Guid usuarioId, string email, string role)
  {

    var securityKey = configuration["Jwt:SecretKey"]!;
    var issuer = configuration["Jwt:Issuer"]!;
    var audience = configuration["Jwt:Audience"]!;
    var expiracao = int.Parse(configuration["Jwt:ExpiracaoMinutos"]!);

    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(securityKey));
    var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

    var claims = new[]
    {
      new Claim(JwtRegisteredClaimNames.Sub,   usuarioId.ToString()),
      new Claim(JwtRegisteredClaimNames.Email, email),
      new Claim(ClaimTypes.Role,               role),
      new Claim(JwtRegisteredClaimNames.Jti,   Guid.NewGuid().ToString())
    };


    var token = new JwtSecurityToken(
        issuer: issuer,
        audience: audience,
        claims: claims,
        expires: DateTime.UtcNow.AddMinutes(expiracao),
        signingCredentials: credentials
    );

    return new JwtSecurityTokenHandler().WriteToken(token);
  }
}