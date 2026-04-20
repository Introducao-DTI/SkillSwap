using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AdicionarCodigoVerificacao : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "InformacoesUsuarios");

            migrationBuilder.AddColumn<string>(
                name: "Perfil_Empresa_CNPJ_Valor",
                table: "Usuarios",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Perfil_Empresa_DominioAcesso",
                table: "Usuarios",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Perfil_Empresa_RazaoSocial",
                table: "Usuarios",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Perfil_Endereco_Bairro",
                table: "Usuarios",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Perfil_Endereco_Cep",
                table: "Usuarios",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Perfil_Endereco_Cidade",
                table: "Usuarios",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Perfil_Endereco_Complemento",
                table: "Usuarios",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Perfil_Endereco_Estado",
                table: "Usuarios",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Perfil_Endereco_Numero",
                table: "Usuarios",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Perfil_Endereco_Rua",
                table: "Usuarios",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "Perfil_Id",
                table: "Usuarios",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Perfil_Telefone_Numero",
                table: "Usuarios",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "CodigosVerificacao",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    UsuarioId = table.Column<Guid>(type: "TEXT", nullable: false),
                    Codigo = table.Column<string>(type: "TEXT", nullable: false),
                    Metodo = table.Column<string>(type: "TEXT", nullable: false),
                    Expiracao = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Utilizado = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CodigosVerificacao", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CodigosVerificacao");

            migrationBuilder.DropColumn(
                name: "Perfil_Empresa_CNPJ_Valor",
                table: "Usuarios");

            migrationBuilder.DropColumn(
                name: "Perfil_Empresa_DominioAcesso",
                table: "Usuarios");

            migrationBuilder.DropColumn(
                name: "Perfil_Empresa_RazaoSocial",
                table: "Usuarios");

            migrationBuilder.DropColumn(
                name: "Perfil_Endereco_Bairro",
                table: "Usuarios");

            migrationBuilder.DropColumn(
                name: "Perfil_Endereco_Cep",
                table: "Usuarios");

            migrationBuilder.DropColumn(
                name: "Perfil_Endereco_Cidade",
                table: "Usuarios");

            migrationBuilder.DropColumn(
                name: "Perfil_Endereco_Complemento",
                table: "Usuarios");

            migrationBuilder.DropColumn(
                name: "Perfil_Endereco_Estado",
                table: "Usuarios");

            migrationBuilder.DropColumn(
                name: "Perfil_Endereco_Numero",
                table: "Usuarios");

            migrationBuilder.DropColumn(
                name: "Perfil_Endereco_Rua",
                table: "Usuarios");

            migrationBuilder.DropColumn(
                name: "Perfil_Id",
                table: "Usuarios");

            migrationBuilder.DropColumn(
                name: "Perfil_Telefone_Numero",
                table: "Usuarios");

            migrationBuilder.CreateTable(
                name: "InformacoesUsuarios",
                columns: table => new
                {
                    UsuarioId = table.Column<Guid>(type: "TEXT", nullable: false),
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Empresa_DominioAcesso = table.Column<string>(type: "TEXT", nullable: true),
                    Empresa_RazaoSocial = table.Column<string>(type: "TEXT", nullable: true),
                    Empresa_CNPJ_Valor = table.Column<string>(type: "TEXT", nullable: true),
                    Endereco_Bairro = table.Column<string>(type: "TEXT", nullable: true),
                    Endereco_Cep = table.Column<string>(type: "TEXT", nullable: true),
                    Endereco_Cidade = table.Column<string>(type: "TEXT", nullable: true),
                    Endereco_Complemento = table.Column<string>(type: "TEXT", nullable: true),
                    Endereco_Estado = table.Column<string>(type: "TEXT", nullable: true),
                    Endereco_Numero = table.Column<string>(type: "TEXT", nullable: true),
                    Endereco_Rua = table.Column<string>(type: "TEXT", nullable: true),
                    Telefone_Numero = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InformacoesUsuarios", x => x.UsuarioId);
                    table.ForeignKey(
                        name: "FK_InformacoesUsuarios_Usuarios_UsuarioId",
                        column: x => x.UsuarioId,
                        principalTable: "Usuarios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });
        }
    }
}
