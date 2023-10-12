using JobAnalizer.ArbeitNow;
using JobAnalizer.Model;
using JobAnalizer.WebApp.Models;
using JobAnalizer.WebApp.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace JobAnalizer.WebApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProcessingController : ControllerBase
    {
        private readonly IProcessingServices _processing;

        public ProcessingController(IProcessingServices processing)
        {
            _processing = processing;
        }

        [ProducesResponseType(200)]
        [HttpGet]
        public Task<List<Processing>> Display()
        {
            return _processing.Display();
        }

        [ProducesResponseType(200)]
        [HttpPost]
        public async Task<ActionResult<Processing>> UploadProcess(Processing processing)
        {
            var result = await _processing.AddProcess(processing);
            if (result == null)
                return BadRequest();

            return Ok(result);
        }
        [ProducesResponseType(200)]
        [HttpGet("{id}")]
        public Task<Processing> GetProcess(int id)
        {
            return _processing.GetProcess(id);
        }
        [HttpDelete]
        public Task<int> DeleteProcess(int id)
        {
            return _processing.Delete(id);
        }

        [HttpGet("withOffers")]
        public Task<List<Processing>> GetProcessOffers()
        {
            return _processing.GetProcessOffers();
        }
    }
}
