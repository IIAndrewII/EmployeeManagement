using EmployeeManagement.Core.Models;

namespace EmployeeManagement.Core.Interfaces
{
    public interface IDepartmentRepository
    {
        Task<Department> GetDepartmentByIdAsync(int id);
        Task<IEnumerable<Department>> GetAllDepartmentsAsync();
        Task AddDepartmentAsync(Department department);
        Task UpdateDepartmentAsync(Department department);
        Task DeleteDepartmentAsync(int id);
    }
}
