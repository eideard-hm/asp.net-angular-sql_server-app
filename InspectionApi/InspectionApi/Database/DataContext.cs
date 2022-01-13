using InspectionApi.Models;
using Microsoft.EntityFrameworkCore;

namespace InspectionApi.Database
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options) { }
        public DbSet<Inspection> Inspections { get; set; }
        public DbSet<InspectionType> InspectionTypes { get; set; }
        public DbSet<Status> Statuses { get; set; }
    }
}
