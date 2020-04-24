using System.ComponentModel.DataAnnotations;

namespace Refuge.Engine.Dtos
{
    public class UserForLoginDto
    {
        public string Username { get; set; }
        
        public string Password { get; set; }
    }
}