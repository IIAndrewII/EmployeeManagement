using System.ComponentModel.DataAnnotations;

namespace EmployeeManagement.Application.DTOs
{
    public class SectionDto
    {
        [Required]
        [StringLength(100)]
        public string Name { get; set; }

        [Required]
        public int DepartmentId { get; set; }

    }
}
