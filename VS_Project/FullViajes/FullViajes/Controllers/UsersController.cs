using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
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
        [Route("api/Users/editar")]
        [ResponseType(typeof(void))]
        public IHttpActionResult Editar(long id, Usuario usuario)
        {
            string MensajeError = "Error";
            Usuario user = db.Usuario.Where(a => a.id_usuario == id).FirstOrDefault();
            if (user != null)
            {
               /*
                //CHEQUEA QUE EL MAIL NO ESTA EN USO
                Usuario emailcheck = db.Usuario.Where(a => a.email == usuario.email).FirstOrDefault();
                if (emailcheck != null)
                {
                    MensajeError = "El email " + usuario.email + " ya se encuentra registrado";
                    return BadRequest(MensajeError);
                }
                //CHEQUEA QUE EL NOMBRE DE USUARIO NO ESTE EN USO
                Usuario usercheck = db.Usuario.Where(a => a.nickname == usuario.nickname).FirstOrDefault();
                if (usercheck != null)
                {
                    MensajeError = "El usuario " + usuario.nickname + " ya se encuentra registrado";
                    return BadRequest(MensajeError);
                }
                */
                user.nickname = usuario.nickname;
                user.nombre = usuario.nombre;
                user.apellido = usuario.apellido;
                user.email = usuario.email;
                user.rol = usuario.rol;
                user.user_descripcion = usuario.user_descripcion;
                db.Entry(user).State = EntityState.Modified;

            }
               /* if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != usuario.id_usuario)
            {
                return BadRequest();
            }

            db.Entry(usuario).State = EntityState.Modified;
            */
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

 [HttpGet]
        [Route("api/Users/act")]
        [ResponseType(typeof(void))]
        public IHttpActionResult Act(long id)
        {
            Usuario user = db.Usuario.Where(a => a.id_usuario == id).FirstOrDefault();
            if (user != null)
            {
                user.active = true;
                db.Entry(user).State = EntityState.Modified;

            }
            try
            {
                db.SaveChanges();
                return NotFound();
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
        }

        [HttpGet]
        [Route("api/Users/act")]
        [ResponseType(typeof(void))]
        public IHttpActionResult Dst(long id)
        {
            Usuario user = db.Usuario.Where(a => a.id_usuario == id).FirstOrDefault();
            if (user != null)
            {
                user.active = false;
                db.Entry(user).State = EntityState.Modified;

            }
            try
            {
                db.SaveChanges();
                return NotFound();
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
        }

        [HttpGet]
        [Route("api/Users/changepswd")]
        [ResponseType(typeof(void))]
        public IHttpActionResult Changepswd(long id)
        {
            Usuario user = db.Usuario.Where(a => a.id_usuario == id).FirstOrDefault();
            if (user != null)
            {
                user.active = true;
                db.Entry(user).State = EntityState.Modified;

            }
            try
            {
                db.SaveChanges();
                return NotFound();
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
        }


        [Route("api/Users/register")]
        [HttpPost]
        [ResponseType(typeof(Usuario))]
        public IHttpActionResult Register(Usuario usuario)
        {
            string MensajeError = "Error";
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            else
            {
                //CHEQUEA QUE EL MAIL NO ESTA EN USO
                Usuario emailcheck = db.Usuario.Where(a => a.email == usuario.email).FirstOrDefault();
                if (emailcheck != null)
                {
                    // return new Respuesta
                    // { Estado = "Error", Mensaje = "El email ya se encuentra registrado" };
                    MensajeError = "El email ya se encuentra registrado";
                    return BadRequest(MensajeError);
                }
                //CHEQUEA QUE EL NOMBRE DE USUARIO NO ESTE EN USO
                Usuario usercheck = db.Usuario.Where(a => a.nickname == usuario.nickname).FirstOrDefault();
                if (usercheck != null)
                {
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
                //Send Email to User
                EnviarMailVerificador(usuario.email, usuario.token.ToString());
            }
            return CreatedAtRoute("DefaultApi", new { id = usuario.id_usuario }, usuario); ;
        }

        private void EnviarMailVerificador(string email, string tkn)
        {
            var UrlVerifica = "/Verifica/" + tkn;
            //var UrlSite = "https://localhost:44331/Bundles";
            var UrlSite = "https://fullviajesdemo.azurewebsites.net/Bundles";
            var link= UrlSite+UrlVerifica;

            var DesdeEmail = new MailAddress("fullviajestest@m3s.com.ar", "FullViajes Registro de Usuarios");
            var HaciaEmail = new MailAddress(email);
            var DesdeEmailPassword = "fullviajesprueba";
            string subject = "Su cuenta el Full Viajes se ha creado satisfactoriamente";

            string body = "<br/><br/>Estamos muy alegres que te hayas registrado en FullViajes. Su cuenta ha sido creada correctamente pero debe verificar su mail para activar la cuenta" +
                "Debe hacer click en el siguiente vinculo para poder acceder " +
                " <br/><br/><a href='" + link + "'>" + link + "</a> ";

            var smtp = new SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(DesdeEmail.Address, DesdeEmailPassword)
            };

            using (var message = new MailMessage(DesdeEmail, HaciaEmail)
            {
                Subject = subject,
                Body = body,
                IsBodyHtml = true
            })
                smtp.Send(message);

        }

        [Route("api/Users/login")]
        [HttpPost]
        [ResponseType(typeof(Usuario))]
        public IHttpActionResult AccederUsuario(string usuario, string email)
        {
            Usuario user = db.Usuario.Find(email);
            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        [Route("api/Users/adduser")]
        [HttpPost]
        [ResponseType(typeof(Usuario))]
        public IHttpActionResult Adduser(Usuario usuario)
        {
            string MensajeError = "Error";
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            else
            {
                //CHEQUEA QUE EL MAIL NO ESTA EN USO
                Usuario emailcheck = db.Usuario.Where(a => a.email == usuario.email).FirstOrDefault();
                if (emailcheck != null)
                {
                    ModelState.AddModelError("Error", "EL MAIL YA SE ENCUENTRA EN LA BASE DE DATOS");
                    return BadRequest(ModelState);
                }
                //CHEQUEA QUE EL NOMBRE DE USUARIO NO ESTE EN USO
                Usuario usercheck = db.Usuario.Where(a => a.nickname == usuario.nickname).FirstOrDefault();
                if (usercheck != null)
                {
                    ModelState.AddModelError("Error", "EL NICKNAME YA SE ENCUENTRA EN LA BASE DE DATOS");
                    return BadRequest(ModelState);
                }
                //ENCRIPTA CONTRASEÑA
                string pswd = Encrypt.GetSHA256(usuario.password);
                usuario.password = pswd;
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

        private bool UsuarioExists(long id)
        {
            return db.Usuario.Count(e => e.id_usuario == id) > 0;
        }
    }
}
