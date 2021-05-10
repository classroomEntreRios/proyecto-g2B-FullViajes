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
    public class ReplyController : ApiController
    {
        private FullViajesEntities db = new FullViajesEntities();

        // GET: api/Reply
        public IQueryable<Respuestas> GetRespuestas()
        {
            return db.Respuestas;
        }

        // GET: api/Reply/5
        [ResponseType(typeof(Respuestas))]
        public IHttpActionResult GetRespuestas(long id)
        {
            Respuestas respuestas = db.Respuestas.Find(id);
            if (respuestas == null)
            {
                return NotFound();
            }

            return Ok(respuestas);
        }

        // PUT: api/Reply/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutRespuestas(long id, Respuestas respuestas)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != respuestas.id_respuesta)
            {
                return BadRequest();
            }

            db.Entry(respuestas).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RespuestasExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Reply
        [ResponseType(typeof(Respuestas))]
        public IHttpActionResult PostRespuestas(Respuestas respuestas)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            respuestas.fecha_creacion = DateTime.Now;
            db.Respuestas.Add(respuestas);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = respuestas.id_respuesta }, respuestas);
        }

        // DELETE: api/Reply/5
        [ResponseType(typeof(Respuestas))]
        public IHttpActionResult DeleteRespuestas(long id)
        {
            Respuestas respuestas = db.Respuestas.Find(id);
            if (respuestas == null)
            {
                return NotFound();
            }

            db.Respuestas.Remove(respuestas);
            db.SaveChanges();

            return Ok(respuestas);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool RespuestasExists(long id)
        {
            return db.Respuestas.Count(e => e.id_respuesta == id) > 0;
        }
    }
}