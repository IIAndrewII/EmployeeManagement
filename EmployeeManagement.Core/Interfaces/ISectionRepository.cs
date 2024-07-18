using EmployeeManagement.Core.Models;

namespace EmployeeManagement.Core.Interfaces
{
    public interface ISectionRepository
    {
        Task<Section> GetSectionByIdAsync(int id);
        Task<IEnumerable<Section>> GetAllSectionsAsync();
        Task AddSectionAsync(Section section);
        Task UpdateSectionAsync(Section section);
        Task DeleteSectionAsync(int id);
    }
}
