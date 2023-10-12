using JobAnalizer.Model;
using System.Net;
using System.Net.NetworkInformation;
using System.Text.Json.Nodes;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;


namespace JobAnalizer.ArbeitNow
{
    public class ArbeitNow
    {
        public static async Task<List<JobOfferModel>> DownloadData()
        {
            using (var webClient = new WebClient())
            {
                var stringData = await webClient.DownloadStringTaskAsync("https://arbeitnow.com/api/job-board-api");
                var jsonData = JObject.Parse(stringData)["data"];
                
                Console.WriteLine(jsonData);
                var transformedArray = ParseData(jsonData);
                return transformedArray;
            }
        }

        private static List<JobOfferModel> ParseData(JToken jsonData)
        {
            var allJobs = jsonData
                .Select(t => new JobOfferModel
                {
                    Title = (string)t["title"],
                    Location = (string)t["location"] ?? null,
                    CompanyName = (string)t["company_name"] ?? null,
                    OfferUrl = (string)t["url"],
                    JobTypes = null
                })
                .ToList();
            return allJobs;
        }
    }
}