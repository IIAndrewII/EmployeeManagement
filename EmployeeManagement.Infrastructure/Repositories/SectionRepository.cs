using EmployeeManagement.Core.Interfaces;
using EmployeeManagement.Core.Models;
using EmployeeManagement.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace EmployeeManagement.Infrastructure.Repositories
{
    public class SectionRepository : ISectionRepository
    {
        private readonly ApplicationDbContext _context;

        public SectionRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Section> GetSectionByIdAsync(int id)
        {
            return await _context.Sections.FindAsync(id);
        }

        public async Task<IEnumerable<Section>> GetAllSectionsAsync()
        {
            return await _context.Sections.ToListAsync();
        }

        public async Task AddSectionAsync(Section section)
        {
            await _context.Sections.AddAsync(section);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateSectionAsync(Section section)
        {
            _context.Sections.Update(section);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteSectionAsync(int id)
        {
            var section = await _context.Sections.FindAsync(id);
            if (section != null)
            {
                _context.Sections.Remove(section);
                await _context.SaveChangesAsync();
            }
        }
    }
}
