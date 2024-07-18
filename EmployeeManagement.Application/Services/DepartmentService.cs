using EmployeeManagement.Core.Interfaces;
using EmployeeManagement.Core.Models;

namespace EmployeeManagement.Application.Services
{
    public class DepartmentService
    {
        private readonly IUnitOfWork _unitOfWork;

        public DepartmentService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<Department> GetDepartmentByIdAsync(int id)
        {
            return await _unitOfWork.Departments.GetDepartmentByIdAsync(id);
        }

        public async Task<IEnumerable<Department>> GetAllDepartmentsAsync()
        {
            return await _unitOfWork.Departments.GetAllDepartmentsAsync();
        }

        public async Task AddDepartmentAsync(Department department)
        {
            await _unitOfWork.Departments.AddDepartmentAsync(department);
            await _unitOfWork.CompleteAsync();
        }

        public async Task UpdateDepartmentAsync(Department department)
        {
            _unitOfWork.Departments.UpdateDepartmentAsync(department);
            await _unitOfWork.CompleteAsync();
        }

        public async Task DeleteDepartmentAsync(int id)
        {
            await _unitOfWork.Departments.DeleteDepartmentAsync(id);
            await _unitOfWork.CompleteAsync();
        }
    }
}
