using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class RemoverDadosEmpresaDeInformacoes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Empresa_CNPJ_Valor",
                table: "Informacoes");

            migrationBuilder.DropColumn(
                name: "Empresa_DominioAcesso",
                table: "Informacoes");

            migrationBuilder.DropColumn(
                name: "Empresa_RazaoSocial",
                table: "Informacoes");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Empresa_CNPJ_Valor",
                table: "Informacoes",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Empresa_DominioAcesso",
                table: "Informacoes",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Empresa_RazaoSocial",
                table: "Informacoes",
                type: "TEXT",
                nullable: true);
        }
    }
}
