using JobAnalizer.Model;

namespace JobAnalizer.WebApp.Services
{
    public interface IArbeitNowServices
    {
        public Task<List<JobOfferModel>> DownloadArbeitNowData();
        public Task<IEnumerable<JobOfferModel>> GetByProcId(int procId);
    }
}
