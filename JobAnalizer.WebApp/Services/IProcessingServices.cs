using JobAnalizer.WebApp.Models;

namespace JobAnalizer.WebApp.Services
{
    public interface IProcessingServices
    {
        public Task<List<Processing>> Display();
        public Task<Processing> AddProcess(Processing proccessing);
        public Task<Processing> GetProcess(int id);
        public Task<int> Delete(int id);
        public Task<List<Processing>> GetProcessOffers();
    }
}
