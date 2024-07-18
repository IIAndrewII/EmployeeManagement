using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EmployeeManagement.Core.Models
{

    public class SubSection
    {
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; }

        [Required]
        public int SectionId { get; set; }

        [ForeignKey("SectionId")]
        public Section Section { get; set; }

    }
}
