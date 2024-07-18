using System.ComponentModel.DataAnnotations;

namespace EmployeeManagement.Application.DTOs
{
    public class RegisterDto
    {
        [Required(ErrorMessage = "First name is required.")]
        public string Name { get; set; }

        [Required(ErrorMessage = "PhoneNumber is required.")]
        [DataType(DataType.PhoneNumber, ErrorMessage = "Invalid PhoneNumber")]
        public string PhoneNumber { get; set; }

        [Required(ErrorMessage = "Email address is required.")]
        [DataType(DataType.EmailAddress, ErrorMessage = "Invalid email address")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required.")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        public string Address { get; set; }

        [Required]
        public int SubSectionId { get; set; }

    }
}
