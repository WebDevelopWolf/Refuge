using System.ComponentModel.DataAnnotations;

namespace Refuge.Engine.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        
        [Required]
        [StringLength(12, MinimumLength = 8, ErrorMessage = "You must specify a password between 8 and 12 characters")]
        public string Password { get; set; }
    }
}