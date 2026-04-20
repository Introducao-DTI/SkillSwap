using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AdicionarNomeUsuario : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Nome",
                table: "InformacoesUsuarios");

            migrationBuilder.AddColumn<string>(
                name: "Nome",
                table: "Usuarios",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Nome",
                table: "Usuarios");

            migrationBuilder.AddColumn<string>(
                name: "Nome",
                table: "InformacoesUsuarios",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }
    }
}
