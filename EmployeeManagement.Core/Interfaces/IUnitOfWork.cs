namespace EmployeeManagement.Core.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IUserRepository Users { get; }
        IDepartmentRepository Departments { get; }
        ISectionRepository Sections { get; }
        ISubSectionRepository SubSections { get; }
        Task<int> CompleteAsync();
    }
}
