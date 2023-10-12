using JobAnalizer.Model;
using JobAnalizer.WebApp.Data;
using JobAnalizer.WebApp.Models;
using Microsoft.EntityFrameworkCore;

namespace JobAnalizer.WebApp.Services
{
    public class ProcessingServices : IProcessingServices
    {
        private readonly ApplicationDbContext _context;
        public ProcessingServices(ApplicationDbContext context)
        {
            _context = context;
        }
        public Task<List<Processing>> Display()
        {
            return _context.ProcessingData.ToListAsync();
        }
        public async Task<Processing> AddProcess(Processing proccessing)
        {
            _context.ProcessingData.Add(proccessing);
            await _context.SaveChangesAsync();
            return proccessing;
        }
        public async Task<Processing> GetProcess(int id)
        {

            var result = await _context.ProcessingData.FindAsync(id);
            return result;
        }
        public async Task<int> Delete(int id)
        {
            var result = await _context.ProcessingData.Where(t => t.Id == id).ExecuteDeleteAsync();
            return result;

        }
        public async Task<List<Processing>> GetProcessOffers()
        {
            var listOfProcessing = _context.ProcessingData.ToList();
            List<JobOfferModel> offers = await _context.JobOfferData.ToListAsync();
            for (int i = 0; i < listOfProcessing.Count(); i++)
            {
                var costam = (from p in offers
                              where p.ProcessingId == listOfProcessing[i].Id
                              select p).ToList();

                listOfProcessing[i].Offers = (List<JobOfferModel>)costam;
            }
            return listOfProcessing;
        }
    }
}
