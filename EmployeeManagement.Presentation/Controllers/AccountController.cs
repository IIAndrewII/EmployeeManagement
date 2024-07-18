using EmployeeManagement.Application.DTOs;
using EmployeeManagement.Application.Services;
using EmployeeManagement.Core.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace EmployeeManagement.Presentation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly UserService _userService;

        public AccountController(UserService userService, IHttpContextAccessor httpContextAccessor)
        {
            _userService = userService;
            _httpContextAccessor = httpContextAccessor;
        }




        [HttpPost("register")]
        public IActionResult Registration([FromBody] RegisterDto model)
        {
            if (ModelState.IsValid)
            {
                // Hash the password
                string hashedPassword = new PasswordHashingService().HashPassword(model.Password);

                User account = new User
                {

                    Name = model.Name,
                    Email = model.Email,
                    Password = hashedPassword
                };

                try
                {
                    _userService.CreateUserAsync(account);
                    return Ok(new { message = $"{account.Name} registered successfully, Please Login." });
                }
                catch (DbUpdateException ex)
                {
                    return BadRequest(new { error = ex.Message });
                }
            }
            return BadRequest(ModelState);
        }


        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto model)
        {
            if (ModelState.IsValid)
            {
                var user = await _userService.GetUserByEmailAsync(model.Email);

                if (user != null && BCrypt.Net.BCrypt.Verify(model.Password, user.Password))
                {
                    var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, user.ID.ToString()),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Name, user.Name),
                new Claim(ClaimTypes.Role, user.Role)
            };
                    var claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
                    HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(claimsIdentity));

                    return Ok(new { message = "Login successful" });
                }
                else
                {
                    return Unauthorized(new { error = "Email or password is not correct" });
                }
            }
            return BadRequest(ModelState);
        }

        [HttpPost("logout")]
        [Authorize]
        public IActionResult LogOut()
        {
            HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return Ok(new { message = "Logout successful" });
        }


        private bool UserAccountExists(int id)
        {
            return _userService.GetUserByIdAsync(id) != null;
        }
    }
}
