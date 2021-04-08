using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FullViajes.Models
{
    public class CiudadPartial
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public CiudadPartial()
        {
            this.Alojamiento = new HashSet<Alojamiento>();
            this.Atracciones = new HashSet<Atracciones>();
            this.Clima = new HashSet<Clima>();
            this.Imagen = new HashSet<Imagen>();
        }
        [Required]
        public string nombre { get; set; }
        [Required]
        public string cp { get; set; }
        [Required]
        public string coordenadas { get; set; }
        [Required]
        public byte[] itinerario { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Alojamiento> Alojamiento { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Atracciones> Atracciones { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Clima> Clima { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Imagen> Imagen { get; set; }
    }
}