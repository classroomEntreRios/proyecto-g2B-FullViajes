using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace FullViajes.Models
{
    public class UsuarioPartial
    {
        [Required]
        [StringLength(50)]
        [Display(Name = "Nombre de Usuario")]
        public string nickname { get; set; }
        [Required]
        [Display(Name = "Correo Electrónico")]
        [EmailAddress]
        // [RegularExpression(@"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}")]
        public string email { get; set; }
        [Required]
        [MinLength(2)]
        [Display(Name = "Contraseña")]
        // [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$")]
        public string password { get; set; }
        [Display(Name = "Rol de Usuario")]
        public byte rol { get; set; }
        [Display(Name = "Foto de Perfil")]
        public string user_foto { get; set; }
        [Display(Name = "Descripción de Usuario")]
        public string user_descripcion { get; set; }
        [Display(Name = "Nombre")]
        public string nombre { get; set; }
        [Display(Name = "Apellido")]
        public string apellido { get; set; }
        public Nullable<bool> active { get; set; }
        public string token { get; set; }
        /* [NotMapped]
         [Required]
         [System.ComponentModel.DataAnnotations.Compare("Password")]
         [Display(Name = "Confirma Contraseña")]
         public string confirmapassword { get; set; }*/
    }
    [MetadataType(typeof(UsuarioPartial))]
    public partial class Usuario
    {
        public string nomapel
        {
            get
            { return nombre + " " + apellido; }
        }
    }
}