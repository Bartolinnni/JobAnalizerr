using Duende.IdentityServer.EntityFramework.Options;
using JobAnalizer.Model;
using JobAnalizer.WebApp.Models;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace JobAnalizer.WebApp.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions)
            : base(options, operationalStoreOptions)
        {

        }
        public DbSet<Processing> ProcessingData { get; set; }
        public DbSet<JobOfferModel> JobOfferData { get; set; }
    }
}