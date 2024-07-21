using System.ComponentModel.DataAnnotations;

namespace EmployeeManagement.Application.DTOs
{
    public class UserDto
    {
        public int? ID { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; }

        public string? Password { get; set; }


        [Required]
        [EmailAddress]
        [StringLength(100)]
        public string Email { get; set; }

        [Phone]
        [StringLength(15)]
        public string PhoneNumber { get; set; }

        [StringLength(200)]
        public string Address { get; set; }

        [Required]
        public int SubSection { get; set; }

    }
}
