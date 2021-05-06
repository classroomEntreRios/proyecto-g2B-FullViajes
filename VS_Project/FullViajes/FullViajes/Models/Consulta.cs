
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace FullViajes.Models
{
    public class Consulta
    {
        [Required]
        [StringLength(50)]
        [Display(Name = "Nombre de Usuario")]
        public string nombre { get; set; }
        [Required]
        [Display(Name = "Correo Electrónico")]
        [EmailAddress]
        // [RegularExpression(@"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}")]
        public string correo { get; set; }
        [Required]
        [MinLength(2)]
        [Display(Name = "Consulta")]
        
        public string consulta { get; set; }
        
    }
  }
