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
    public class ForoController : ApiController
    {
        private FullViajesEntities db = new FullViajesEntities();

        // GET: api/Foro
        public IQueryable<Topicos> GetTopicos()
        {
            return db.Topicos;
        }

        // GET: api/Foro/5
        [ResponseType(typeof(Topicos))]
        public IHttpActionResult GetTopicos(long id)
        {
            Topicos topicos = db.Topicos.Find(id);
            if (topicos == null)
            {
                return NotFound();
            }

            return Ok(topicos);
        }

        // PUT: api/Foro/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTopicos(long id, Topicos topicos)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != topicos.id_topics)
            {
                return BadRequest();
            }

            db.Entry(topicos).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TopicosExists(id))
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

        // POST: api/Foro
        [ResponseType(typeof(Topicos))]
        public IHttpActionResult PostTopicos(Topicos topicos)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            topicos.fecha_creacion = DateTime.Now;
            db.Topicos.Add(topicos);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = topicos.id_topics }, topicos);
        }

        // DELETE: api/Foro/5
        [ResponseType(typeof(Topicos))]
        public IHttpActionResult DeleteTopicos(long id)
        {
            Topicos topicos = db.Topicos.Find(id);
            if (topicos == null)
            {
                return NotFound();
            }

            db.Topicos.Remove(topicos);
            db.SaveChanges();

            return Ok(topicos);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TopicosExists(long id)
        {
            return db.Topicos.Count(e => e.id_topics == id) > 0;
        }
    }
}