using System.ComponentModel.DataAnnotations;

namespace EmployeeManagement.Application.DTOs
{
    public class SubSectionDto
    {
        [Required]
        [StringLength(100)]
        public string Name { get; set; }

        [Required]
        public int SectionId { get; set; }
    }
}
