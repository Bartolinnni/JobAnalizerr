using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace JobAnalizer.WebApp.Data.Migrations
{
    /// <inheritdoc />
    public partial class InitialMigration2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PublishedDate",
                table: "JobOfferData");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PublishedDate",
                table: "JobOfferData",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
