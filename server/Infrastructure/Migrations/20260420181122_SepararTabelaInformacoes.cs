using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class SepararTabelaInformacoes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
                name: "Informacoes",
                columns: table => new
                {
                    UsuarioId = table.Column<Guid>(type: "TEXT", nullable: false),
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Telefone_Numero = table.Column<string>(type: "TEXT", nullable: false),
                    Endereco_Rua = table.Column<string>(type: "TEXT", nullable: true),
                    Endereco_Numero = table.Column<string>(type: "TEXT", nullable: true),
                    Endereco_Complemento = table.Column<string>(type: "TEXT", nullable: true),
                    Endereco_Bairro = table.Column<string>(type: "TEXT", nullable: true),
                    Endereco_Cidade = table.Column<string>(type: "TEXT", nullable: true),
                    Endereco_Estado = table.Column<string>(type: "TEXT", nullable: true),
                    Endereco_Cep = table.Column<string>(type: "TEXT", nullable: true),
                    Empresa_RazaoSocial = table.Column<string>(type: "TEXT", nullable: true),
                    Empresa_CNPJ_Valor = table.Column<string>(type: "TEXT", nullable: true),
                    Empresa_DominioAcesso = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Informacoes", x => x.UsuarioId);
                    table.ForeignKey(
                        name: "FK_Informacoes_Usuarios_UsuarioId",
                        column: x => x.UsuarioId,
                        principalTable: "Usuarios",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Informacoes");

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
        }
    }
}
