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
    public class UsuariosWebApiController : ApiController
    {
        private FullViajesEntities db = new FullViajesEntities();

        // GET: api/UsuariosWebApi
        public IQueryable<Usuario> GetUsuario()
        {
            return db.Usuario;
        }

        // GET: api/UsuariosWebApi/5
        [ResponseType(typeof(Usuario))]
        public IHttpActionResult GetUsuario(long id)
        {
            Usuario usuario = db.Usuario.Find(id);
            if (usuario == null)
            {
                return NotFound();
            }

            return Ok(usuario);
        }

        // PUT: api/UsuariosWebApi/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUsuario(long id, Usuario usuario)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != usuario.id_usuario)
            {
                return BadRequest();
            }

            db.Entry(usuario).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UsuarioExists(id))
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

        // POST: api/UsuariosWebApi
        [ResponseType(typeof(Usuario))]
        public IHttpActionResult PostUsuario(Usuario usuario)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Usuario.Add(usuario);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = usuario.id_usuario }, usuario);
        }

        // DELETE: api/UsuariosWebApi/5
        [ResponseType(typeof(Usuario))]
        public IHttpActionResult DeleteUsuario(long id)
        {
            Usuario usuario = db.Usuario.Find(id);
            if (usuario == null)
            {
                return NotFound();
            }

            db.Usuario.Remove(usuario);
            db.SaveChanges();

            return Ok(usuario);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UsuarioExists(long id)
        {
            return db.Usuario.Count(e => e.id_usuario == id) > 0;
        }
    }
}