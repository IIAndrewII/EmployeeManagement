using EmployeeManagement.Application.DTOs;
using EmployeeManagement.Application.Services;
using EmployeeManagement.Core.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeManagement.Presentation.Controllers
{
    [Authorize(Policy = "RequireAdminRole")]
    [ApiController]
    [Route("api/[controller]")]
    public class SectionsController : ControllerBase
    {
        private readonly SectionService _sectionService;

        public SectionsController(SectionService sectionService)
        {
            _sectionService = sectionService;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Section>> GetSection(int id)
        {
            var section = await _sectionService.GetSectionByIdAsync(id);
            if (section == null)
            {
                return NotFound();
            }
            return Ok(section);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Section>>> GetAllSections()
        {
            var sections = await _sectionService.GetAllSectionsAsync();
            return Ok(sections);
        }

        [HttpPost]
        public async Task<ActionResult<Section>> AddSection(SectionDto sectionDto)
        {
            var section = new Section
            {
                Name = sectionDto.Name,
                DepartmentId = sectionDto.DepartmentId
            };

            await _sectionService.AddSectionAsync(section);
            return CreatedAtAction(nameof(GetSection), new { id = section.Id }, section);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateSection(int id, SectionDto sectionDto)
        {
            var section = await _sectionService.GetSectionByIdAsync(id);
            if (section == null)
            {
                return NotFound();
            }

            section.Name = sectionDto.Name;
            section.DepartmentId = sectionDto.DepartmentId;

            await _sectionService.UpdateSectionAsync(section);
            return NoContent();
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSection(int id)
        {
            await _sectionService.DeleteSectionAsync(id);
            return NoContent();
        }
    }

}
