using EmployeeManagement.Application.DTOs;
using EmployeeManagement.Application.Services;
using EmployeeManagement.Core.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeManagement.Presentation.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class SubSectionsController : ControllerBase
    {
        private readonly SubSectionService _subSectionService;

        public SubSectionsController(SubSectionService subSectionService)
        {
            _subSectionService = subSectionService;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<SubSection>> GetSubSection(int id)
        {
            var subSection = await _subSectionService.GetSubSectionByIdAsync(id);
            if (subSection == null)
            {
                return NotFound();
            }
            return Ok(subSection);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<SubSection>>> GetAllSubSections()
        {
            var subSections = await _subSectionService.GetAllSubSectionsAsync();
            return Ok(subSections);
        }

        [HttpPost]
        public async Task<ActionResult<SubSection>> AddSubSection(SubSectionDto subSectionDto)
        {
            var subSection = new SubSection
            {
                Name = subSectionDto.Name,
                SectionId = subSectionDto.SectionId
            };

            await _subSectionService.AddSubSectionAsync(subSection);
            return CreatedAtAction(nameof(GetSubSection), new { id = subSection.Id }, subSection);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateSubSection(int id, SubSectionDto subSectionDto)
        {
            var subSection = await _subSectionService.GetSubSectionByIdAsync(id);
            if (subSection == null)
            {
                return NotFound();
            }

            subSection.Name = subSectionDto.Name;
            subSection.SectionId = subSectionDto.SectionId;

            await _subSectionService.UpdateSubSectionAsync(subSection);
            return NoContent();
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSubSection(int id)
        {
            await _subSectionService.DeleteSubSectionAsync(id);
            return NoContent();
        }
    }
}
