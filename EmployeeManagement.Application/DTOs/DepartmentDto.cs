using System.ComponentModel.DataAnnotations;

namespace EmployeeManagement.Application.DTOs
{
    public class DepartmentDto
    {
        [Required]
        [StringLength(100)]
        public string Name { get; set; }
    }
}
