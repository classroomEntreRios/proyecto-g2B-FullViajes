using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using FullViajes.Models;

namespace FullViajes.Controllers
{
    public class CiudadesController : ApiController
    {
        private FullViajesEntities db = new FullViajesEntities();
        public string MessaError { get; private set; }








        // GET: api/Ciudades                         RETORNA LAS CIUDADES
        public IQueryable<Ciudad> GetCiudad()
        {
            return db.Ciudad;
        }


        //RETORNA CIUDADES DEL MENU
        public List<Ciudad> GetCiudades()
        {
            return db.Ciudad.Where(c => c.menu == true).ToList();
        }






        // GET: api/Ciudades/5
        [ResponseType(typeof(Ciudad))]              //DEVUELVE DETALLES DE CIUDAD , RECIBE ID
        public IHttpActionResult GetCiudad(long id)
        {   
            Ciudad ciudad = db.Ciudad.Find(id);
            if (ciudad == null)
            {

                return NotFound(); //NO SE ENCONTRÓ LA CIUDAD
            }

            return Ok(ciudad);
        }








        // PUT: api/Ciudades/5                      //MODIFICA UNA CIUDAD, RECIBE EL FORM Y EL ID
        
        [ResponseType(typeof(Ciudad))]
        public IHttpActionResult putCiudad(long id, Ciudad ciudad)
        {
            string MensajeError = "Error";

            if (!ModelState.IsValid) //COMPRUEBA QUE EL FORM RECIBIDO SEA VALIDO
            {
                MensajeError = "DATOS INGRESADOS NO VALIDOS";
                return BadRequest(MensajeError);
            }
            
            if (id != ciudad.id_ciudad)
            {
                MensajeError = "VALOR DE ID NO COINCIDE CON ID DEL FORM";
                return BadRequest(MensajeError);
            }

            //chequeo que las nuevas coordenadas no se encuentren registradas salvo la del mismo id
            Ciudad coordenadascheck = db.Ciudad.Where(a => a.coordenadas == ciudad.coordenadas && a.id_ciudad != id).FirstOrDefault();
            if (coordenadascheck != null)
            {
                MensajeError = "LAS COORDENADAS YA SE ENCUENTRA EN LA BASE DE DATOS";
                return BadRequest(MensajeError);
            }


            db.Entry(ciudad).State = EntityState.Modified;    //modifica

            try
            {
                db.SaveChanges();  //guarda cambios
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CiudadExists(id)) //si id no existia en las ciudades retorna error
                {
                    MensajeError = "LA CIUDAD NO SE ENCUENTRA EN LA BASE DE DATOS";
                    return BadRequest(MensajeError);

                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }










        // POST: api/Ciudades                           //AGREGA UNA CIUDAD
        [Route("api/Ciudades/register")]
        [HttpPost]
        [ResponseType(typeof(Ciudad))]
        public IHttpActionResult Register(Ciudad ciudad)
        {
            string MensajeError = "Error";

            foreach (var modelValue in ModelState.Values) { modelValue.Errors.Clear(); }
            if (!ModelState.IsValid)//comprueba que el modelo sea valido
            {
                MensajeError = "DATOS INGRESADOS NO VALIDOS";
                return BadRequest(MensajeError);

            }


            Ciudad coordenadascheck = db.Ciudad.Where(a => a.coordenadas == ciudad.coordenadas).FirstOrDefault();
            if (coordenadascheck != null)
            {
                MensajeError = "LAS COORDENADAS YA SE ENCUENTRA EN LA BASE DE DATOS";
                return BadRequest(MensajeError);

            }



            //SI LA DESCRIPCION DE USUARIO ES VACIA CREO UNA CADENA PARA RELLENAR EL CAMPO
            if (ciudad.descripcion == null)
            {
                ciudad.descripcion = "El Administrador: no agregó descripción de ésta ciudad";
            }


            db.Ciudad.Add(ciudad);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = ciudad.id_ciudad }, ciudad);
        }









        // DELETE: api/Ciudades/5
        [ResponseType(typeof(Ciudad))]
        public IHttpActionResult DeleteCiudad(long id)
        {
            string MensajeError = "Error";
            Ciudad ciudad = db.Ciudad.Find(id);
            if (ciudad == null)
            {
                MensajeError = "LA CIUDAD NO SE ENCUENTRA EN LA BASE DE DATOS";
                return BadRequest(MensajeError);

            }

            db.Ciudad.Remove(ciudad);
            db.SaveChanges();

            return Ok(ciudad);
        }


        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CiudadExists(long id)   //funcion para ver si existe la ciudad en la base de datos
        {
            return db.Ciudad.Count(e => e.id_ciudad == id) > 0;
        }
    }
}