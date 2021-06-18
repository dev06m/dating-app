using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("Photos")]
    public class Photo
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public bool IsMain { get; set; }
        public string PublicId { get; set; }
        public AppUser AppUser { get; set; } // this is known as fully defining the relationship between 2 table - fully defineship - deniyor 
        public int AppUserId { get; set; } // bu ikisi sayesinde cascase-delete saglaniyor yani kullanici silindiginde fotograflari da db'den silinecek
    }
}