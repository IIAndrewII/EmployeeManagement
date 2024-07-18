using EmployeeManagement.Core.Models;

namespace EmployeeManagement.Core.Interfaces
{
    public interface ISubSectionRepository
    {
        Task<SubSection> GetSubSectionByIdAsync(int id);
        Task<IEnumerable<SubSection>> GetAllSubSectionsAsync();
        Task AddSubSectionAsync(SubSection subSection);
        Task UpdateSubSectionAsync(SubSection subSection);
        Task DeleteSubSectionAsync(int id);
    }
}
