using EmployeeManagement.Core.Interfaces;
using EmployeeManagement.Core.Models;

namespace EmployeeManagement.Application.Services
{
    public class SectionService
    {
        private readonly IUnitOfWork _unitOfWork;

        public SectionService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<Section> GetSectionByIdAsync(int id)
        {
            return await _unitOfWork.Sections.GetSectionByIdAsync(id);
        }

        public async Task<IEnumerable<Section>> GetAllSectionsAsync()
        {
            return await _unitOfWork.Sections.GetAllSectionsAsync();
        }

        public async Task AddSectionAsync(Section section)
        {
            await _unitOfWork.Sections.AddSectionAsync(section);
            await _unitOfWork.CompleteAsync();
        }

        public async Task UpdateSectionAsync(Section section)
        {
            _unitOfWork.Sections.UpdateSectionAsync(section);
            await _unitOfWork.CompleteAsync();
        }

        public async Task DeleteSectionAsync(int id)
        {
            await _unitOfWork.Sections.DeleteSectionAsync(id);
            await _unitOfWork.CompleteAsync();
        }
    }
}
