using Microsoft.EntityFrameworkCore;
using Refuge.Engine.Models;

namespace Refuge.Engine.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}

        public DbSet<Story> Stories { get; set; }
    }
}