using EmployeeManagement.Core.Interfaces;
using EmployeeManagement.Core.Models;
using EmployeeManagement.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace EmployeeManagement.Infrastructure.Repositories
{
    public class SubSectionRepository : ISubSectionRepository
    {
        private readonly ApplicationDbContext _context;

        public SubSectionRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<SubSection> GetSubSectionByIdAsync(int id)
        {
            return await _context.SubSections.FindAsync(id);
        }

        public async Task<IEnumerable<SubSection>> GetAllSubSectionsAsync()
        {
            return await _context.SubSections.ToListAsync();
        }

        public async Task AddSubSectionAsync(SubSection subSection)
        {
            await _context.SubSections.AddAsync(subSection);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateSubSectionAsync(SubSection subSection)
        {
            _context.SubSections.Update(subSection);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteSubSectionAsync(int id)
        {
            var subSection = await _context.SubSections.FindAsync(id);
            if (subSection != null)
            {
                _context.SubSections.Remove(subSection);
                await _context.SaveChangesAsync();
            }
        }
    }
}
