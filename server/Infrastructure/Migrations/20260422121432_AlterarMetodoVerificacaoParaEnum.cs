using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AlterarMetodoVerificacaoParaEnum : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MetodoVerificacao",
                table: "Informacoes");

            migrationBuilder.AddColumn<string>(
                name: "MetodoVerificacaoEnum",
                table: "Informacoes",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MetodoVerificacaoEnum",
                table: "Informacoes");

            migrationBuilder.AddColumn<string>(
                name: "MetodoVerificacao",
                table: "Informacoes",
                type: "TEXT",
                nullable: true);
        }
    }
}
