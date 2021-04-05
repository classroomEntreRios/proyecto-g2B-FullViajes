using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FullViajes.Models;

namespace FullViajes.Controllers
{
    public class CiudadController : Controller
    {

        FullViajesEntities db = new FullViajesEntities(); 
        // GET: Ciudad
        public ActionResult Index()
        {
            List<Ciudad> listaCiudades = db.Ciudad.ToList(); //de la base de datos generar una lista de ciudades
            return View(listaCiudades); //retorno como vista la lista de las ciudades
        }
    }
}