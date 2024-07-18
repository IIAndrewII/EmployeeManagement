using EmployeeManagement.Core.Interfaces;
using EmployeeManagement.Infrastructure.Data;

namespace EmployeeManagement.Infrastructure.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext _context;

        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
            Users = new UserRepository(context);
            Departments = new DepartmentRepository(context);
            Sections = new SectionRepository(context);
            SubSections = new SubSectionRepository(context);
        }

        public IUserRepository Users { get; private set; }
        public IDepartmentRepository Departments { get; private set; }
        public ISectionRepository Sections { get; private set; }
        public ISubSectionRepository SubSections { get; private set; }

        public async Task<int> CompleteAsync()
        {
            return await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
