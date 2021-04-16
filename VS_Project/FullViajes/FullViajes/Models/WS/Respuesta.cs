using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace FullViajes.Models
{
    public class Respuesta
    {
        public int resultado { get; set; }
        public object datos { get; set; }
        public string mensaje { get; set; }
    }
}