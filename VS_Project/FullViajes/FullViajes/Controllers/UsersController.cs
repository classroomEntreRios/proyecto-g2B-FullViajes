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
    public class UsersController : ApiController
    {
        private FullViajesEntities db = new FullViajesEntities();

        public string MessaError { get; private set; }

        // GET: api/Users
        public IQueryable<Usuario> GetUsuario()
        {
            return db.Usuario;
        }

        // GET: api/Users/5
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

        // PUT: api/Users/5
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



        // POST: api/Users
        [ResponseType(typeof(Usuario))]
        public IHttpActionResult PostUsuario(Usuario usuario)
        {
            string MensajeError = "Error";
            if (!ModelState.IsValid)
            {
                foreach (var modelValue in ModelState.Values) { modelValue.Errors.Clear(); }

            

                ModelState.AddModelError("Error", "Hubo un error al intentar registrarte. Intenta mas tarde");
                return BadRequest(ModelState);
                //MensajeError = "El formulario es invalido"; //probar
                //return BadRequest(MensajeError); //probar
            }
            else
            {
                //CHEQUEA QUE EL MAIL NO ESTA EN USO
                Usuario emailcheck = db.Usuario.Where(a => a.email == usuario.email).FirstOrDefault();
                if (emailcheck != null)
                {

                    //foreach (var modelValue in ModelState.Values) { modelValue.Errors.Clear(); }
                    //ModelState.AddModelError("Error", "El email " + usuario.email + " ya se encuentra registrado");
                    //return BadRequest(ModelState);

                    MensajeError = "El correo ya se encuentra registrado"; //probar
                    return BadRequest(MensajeError);                                            //probar
                }
                //CHEQUEA QUE EL NOMBRE DE USUARIO NO ESTE EN USO
                Usuario usercheck = db.Usuario.Where(a => a.nickname == usuario.nickname).FirstOrDefault();
                if (usercheck != null)
                {
                   // ModelState.AddModelError("Error", "El usuario " + usuario.nickname + " ya se encuentra registrado");
                   // return BadRequest(ModelState);
                    MensajeError = "El usuario ya se encuentra registrado";
                    return BadRequest(MensajeError);
                }
                //ENCRIPTA CONTRASEÑA
                string pswd = Encrypt.GetSHA256(usuario.password);
                usuario.password = pswd;
                string tkn = Guid.NewGuid().ToString();
                usuario.rol = 1;
                usuario.active = false;
                usuario.token = tkn;
                usuario.user_foto = "/img/profile.png";
                //SI LA DESCRIPCION DE USUARIO ES VACIA CREO UNA CADENA PARA RELLENAR EL CAMPO
                if (usuario.user_descripcion == null)
                {
                    usuario.user_descripcion = "El Usuario: " + usuario.nickname + " no agregó descripción pero su email es: " + usuario.email;
                }
                db.Usuario.Add(usuario);
                db.SaveChanges();
            }
            return CreatedAtRoute("DefaultApi", new { id = usuario.id_usuario }, usuario); ;
        }

        // DELETE: api/Users/5
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


        //PARA BUSQUEDA
        private bool UsuarioExists(long id)
        {
            return db.Usuario.Count(e => e.id_usuario == id) > 0;
        }
    }
}