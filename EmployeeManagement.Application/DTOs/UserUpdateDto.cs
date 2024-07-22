namespace EmployeeManagement.Application.DTOs
{
    public class UserUpdateDto
    {
        public string? Name { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Email { get; set; }
        public string? Address { get; set; }
        public int? SubSectionId { get; set; }
    }
}
