using JobAnalizer.Model;
using JobAnalizer.ArbeitNow;
using Microsoft.EntityFrameworkCore;
using JobAnalizer.WebApp.Data;

namespace JobAnalizer.WebApp.Services
{
    public class ArbeitNowServices : IArbeitNowServices
    {
        private readonly ApplicationDbContext _context;

        public ArbeitNowServices(ApplicationDbContext context)
        {
            _context = context;
        }

        public Task<List<JobOfferModel>> DownloadArbeitNowData()
        {
            var downloadedData = ArbeitNow.ArbeitNow.DownloadData();
            return downloadedData;
        }
        public async Task<IEnumerable<JobOfferModel>> GetByProcId(int procId)
        {
            List<JobOfferModel> offers = await _context.JobOfferData.ToListAsync();
            var costam = from p in offers
                         where p.ProcessingId == procId
                         select p;

            return costam;
        }
    }
}
