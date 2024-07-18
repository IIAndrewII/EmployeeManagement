using EmployeeManagement.Core.Models;
using System.Linq.Expressions;

namespace EmployeeManagement.Core.Interfaces
{
    public interface IUserRepository
    {
        Task<User> GetUserByIdAsync(int id);
        Task<IEnumerable<User>> GetAllUsersAsync();
        Task AddUserAsync(User user);
        Task UpdateUserAsync(User user);
        Task DeleteUserAsync(int id);
        Task<User> FindAsync(Expression<Func<User, bool>> criteria, string[] includes = null);

        Task<User> GetUserByEmailAsync(string email);


    }
}
