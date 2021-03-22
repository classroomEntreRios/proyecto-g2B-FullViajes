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
            } else
            {
                using (FullViajesEntities db = new FullViajesEntities())
                {
                    //CHEQUEA QUE EL NOMBRE NO ESTÉ VACÍO
                    string nombre = usuario.nombre;
                    if (nombre == null)
                    {
                        ModelState.AddModelError("nombre", "El campo no debe estar vacío");

                    }
                    // CHEQUEA QUE EL NOMBRE NO ESTÉ VACÍO
                    string apellido = usuario.apellido;
                    if (apellido == null)
                    {
                        ModelState.AddModelError("apellido", "El campo no debe estar vacío");
                        return CreatedAtRoute("usuario", "", usuario);
                    }
                    //CHEQUEA QUE EL MAIL NO ESTA EN USO
                    Usuario emailcheck = db.Usuario.Where(a => a.email == usuario.email).FirstOrDefault();
                    if (emailcheck != null)
                    {
                        ModelState.AddModelError("email", "El email ya se encuentra registrado");
                        return CreatedAtRoute("usuario", "", usuario);
                    }
                    //CHEQUEA QUE EL NOMBRE DE USUARIO NO ESTE EN USO
                    Usuario usercheck = db.Usuario.Where(a => a.nickname == usuario.nickname).FirstOrDefault();
                    if (usercheck != null)
                    {
                        ModelState.AddModelError("nickname", "El usuario " + usuario.nickname + " ya se encuentra registrado");
                        return CreatedAtRoute("usuario", "", usuario);
                    }
                    //CHEQUEA EL LARGO DE CONTRASEÑA
                    string passwordcheck = usuario.password;
                    int length = passwordcheck.Length;
                    int passlenght = length;
                    if (passlenght <= 7)
                    {
                        ModelState.AddModelError("password", "La contraseña debe tener más de 8 caracteres");
                        return CreatedAtRoute("usuario", "", usuario);
                    }
                    //ENCRIPTA CONTRASEÑA
                    string pswd = Encrypt.GetSHA256(usuario.password);
                    usuario.password = pswd;
                    usuario.user_foto = "/img/profile.png";
                    string tkn = Guid.NewGuid().ToString();
                    usuario.rol = 1;
                    usuario.active = false;
                    usuario.token = tkn;
                    //SI LA DESCRIPCION DE USUARIO ES VACIA CREO UNA CADENA PARA RELLENAR EL CAMPO
                    if (usuario.user_descripcion == null)
                    {
                        usuario.user_descripcion = "El Usuario: " + usuario.nickname + " no agregó descripción pero su email es: " + usuario.email;
                    }
                    db.Usuario.Add(usuario);
                    db.SaveChanges();
                    //Send Email to User
                    // EnviarMailVerificador(usuario.email, usuario.token.ToString());
                    return CreatedAtRoute("DefaultApi", new { id = usuario.id_usuario }, usuario);
                }
            }

            
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