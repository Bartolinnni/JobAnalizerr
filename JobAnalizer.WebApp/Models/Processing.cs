using JobAnalizer.Model;

namespace JobAnalizer.WebApp.Models
{
    public class Processing
    {
        public int Id { get; set; }
        public DateTimeOffset Date { get; set; }
        public virtual required List<JobOfferModel> Offers { get; set; }
    }
}
