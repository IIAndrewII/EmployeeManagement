using EmployeeManagement.Core.Interfaces;
using EmployeeManagement.Core.Models;

namespace EmployeeManagement.Application.Services
{
    public class SubSectionService
    {
        private readonly IUnitOfWork _unitOfWork;

        public SubSectionService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<SubSection> GetSubSectionByIdAsync(int id)
        {
            return await _unitOfWork.SubSections.GetSubSectionByIdAsync(id);
        }

        public async Task<IEnumerable<SubSection>> GetAllSubSectionsAsync()
        {
            return await _unitOfWork.SubSections.GetAllSubSectionsAsync();
        }

        public async Task AddSubSectionAsync(SubSection subSection)
        {
            await _unitOfWork.SubSections.AddSubSectionAsync(subSection);
            await _unitOfWork.CompleteAsync();
        }

        public async Task UpdateSubSectionAsync(SubSection subSection)
        {
            await _unitOfWork.SubSections.UpdateSubSectionAsync(subSection);
            await _unitOfWork.CompleteAsync();
        }

        public async Task DeleteSubSectionAsync(int id)
        {
            await _unitOfWork.SubSections.DeleteSubSectionAsync(id);
            await _unitOfWork.CompleteAsync();
        }
    }
}
