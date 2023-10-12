using JobAnalizer.Model;
using JobAnalizer.WebApp.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JobAnalizer.WebApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ArbeitNowController : ControllerBase
    {

        private readonly IArbeitNowServices _arbeitNow;

        public ArbeitNowController(IArbeitNowServices arbeitNow)
        {
            _arbeitNow = arbeitNow;
        }

        [ProducesResponseType(200)]
        [HttpGet]
        public async Task<ActionResult<List<JobOfferModel>>> DownloadingData()
        {
            var result = await _arbeitNow.DownloadArbeitNowData();
            if(result == null)
                return BadRequest();
            
            return Ok(result);
        }
        [ProducesResponseType(200)]
        [HttpGet("{procId}")]
        public async Task<ActionResult<List<JobOfferModel>>> GetByProcId(int procId)
        {
            var result = await _arbeitNow.GetByProcId(procId);
            return Ok(result);
        }

    }
}