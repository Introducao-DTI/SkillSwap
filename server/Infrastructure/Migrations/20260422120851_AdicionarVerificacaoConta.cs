using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AdicionarVerificacaoConta : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "ContaVerificada",
                table: "Informacoes",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "MetodoVerificacao",
                table: "Informacoes",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "VerificadoEm",
                table: "Informacoes",
                type: "TEXT",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ContaVerificada",
                table: "Informacoes");

            migrationBuilder.DropColumn(
                name: "MetodoVerificacao",
                table: "Informacoes");

            migrationBuilder.DropColumn(
                name: "VerificadoEm",
                table: "Informacoes");
        }
    }
}
