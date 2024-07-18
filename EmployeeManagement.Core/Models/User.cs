using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EmployeeManagement.Core.Models
{
    public class User
    {
        [Key]
        public int ID { get; set; }

        [Required(ErrorMessage = "Role is required.")]
        public string Role { get; set; } = "User"; // Default value set to "User"

        [Required(ErrorMessage = "Name is required.")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Email address is required.")]
        [DataType(DataType.EmailAddress, ErrorMessage = "Invalid email address.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "PhoneNumber is required.")]
        [DataType(DataType.PhoneNumber, ErrorMessage = "Invalid PhoneNumber")]
        public string PhoneNumber { get; set; }

        [DataType(DataType.Password)]
        public string? Password { get; set; }

        public string? Address { get; set; }

        [Required]
        public int SubSectionId { get; set; }

        [ForeignKey("SubSectionId")]
        public SubSection SubSection { get; set; }
    }
}
