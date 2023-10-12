using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobAnalizer.Model
{
    public class JobOfferModel
    {
        public int Id { get; set; }
        public required string Title { get; set; }
        public string? Location { get; set; }
        public string? JobTypes { get; set; }
        public string? CompanyName { get; set; }
        public string? OfferUrl { get; set; }
        public int ProcessingId { get; set; }
    }
}
