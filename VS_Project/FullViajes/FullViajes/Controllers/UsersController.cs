using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FullViajes.Models;
using System.Net;
using System.Net.Mail;
using System.Web.Security;

namespace FullViajes.Controllers
{
    public class UsersController : Controller
    {
        private FullViajesEntities db = new FullViajesEntities();

        public ActionResult Index()
        {
            if (Session["idUsuario"] != null)
            {
                return View();
            }
            else
            {
                return RedirectToAction("Login");
            }
        }

        public ActionResult Login()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Login(string email, string password)
        {
            if (ModelState.IsValid)
            {
                var emailcheck = db.Usuario.Where(u => u.email == email).FirstOrDefault();
                if (emailcheck != null)
                {
                    //Chequea estado de activacion de usuario
                    if (emailcheck.active == true)
                    {
                        string pswd = Encrypt.GetSHA256(password);
                        if (emailcheck.password == pswd)
                        {
                            Session["email"] = emailcheck.email;
                            Session["idUsuario"] = emailcheck.id_usuario;
                            Session["rol"] = emailcheck.rol;
                            if (emailcheck.nomapel == " ")
                            {
                                Session["username"] = emailcheck.nickname;
                            }
                            else
                            {
                                Session["username"] = emailcheck.nomapel;
                            }

                            return RedirectToAction("Index");
                        }
                        else
                        {
                            ModelState.AddModelError("password", "La contraseña no es correcta");
                            return View();
                        }
                    }
                    else
                    {
                        ModelState.AddModelError("email", "Debe activar la cuenta para poder iniciar sesión");
                        return View();
                    }
                }
                else
                {
                    ModelState.AddModelError("email", "El email no se encuentra registrado o la cuenta no esta activa");
                    return View();
                }
            }
            return View();
        }

        public ActionResult Logout()
        {
            Session.Clear();
            return Redirect("~/Home/");
        }
        public ActionResult Privi()
        {
            return View();
        }
        public ActionResult RePass()
        {
            return View();
        }
        public ActionResult Registrar()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Registrar(Usuario oUser)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (FullViajesEntities db = new FullViajesEntities())
                    {
                        //CHEQUEA QUE EL NOMBRE NO ESTÉ VACÍO
                        string nombre = oUser.nombre;
                        if (nombre == null)
                        {
                            ModelState.AddModelError("nombre", "El campo no debe estar vacío");
                            return View();
                        }
                        // CHEQUEA QUE EL NOMBRE NO ESTÉ VACÍO
                        string apellido = oUser.apellido;
                        if (apellido == null)
                        {
                            ModelState.AddModelError("apellido", "El campo no debe estar vacío");
                            return View();
                        }
                        //CHEQUEA QUE EL MAIL NO ESTA EN USO
                        Usuario emailcheck = db.Usuario.Where(a => a.email == oUser.email).FirstOrDefault();
                        if (emailcheck != null)
                        {
                            ModelState.AddModelError("email", "El email ya se encuentra registrado");
                            return View();
                        }
                        //CHEQUEA QUE EL NOMBRE DE USUARIO NO ESTE EN USO
                        Usuario usercheck = db.Usuario.Where(a => a.nickname == oUser.nickname).FirstOrDefault();
                        if (usercheck != null)
                        {
                            ModelState.AddModelError("nickname", "El usuario " + oUser.nickname + " ya se encuentra registrado");
                            return View();
                        }
                        //CHEQUEA EL LARGO DE CONTRASEÑA
                        string passwordcheck = oUser.password;
                        int length = passwordcheck.Length;
                        int passlenght = length;
                        if (passlenght <= 7)
                        {
                            ModelState.AddModelError("password", "La contraseña debe tener más de 8 caracteres");
                            return View();
                        }
                        //ENCRIPTA CONTRASEÑA
                        string pswd = Encrypt.GetSHA256(oUser.password);
                        oUser.password = pswd;
                        oUser.user_foto = "/img/profile.png";
                        string tkn = Guid.NewGuid().ToString();
                        oUser.rol = 1;
                        oUser.active = false;
                        oUser.token = tkn;
                        //SI LA DESCRIPCION DE USUARIO ES VACIA CREO UNA CADENA PARA RELLENAR EL CAMPO
                        if (oUser.user_descripcion == null)
                        {
                            oUser.user_descripcion = "El Usuario: " + oUser.nickname + " no agregó descripción pero su email es: " + oUser.email;
                        }
                        db.Usuario.Add(oUser);
                        db.SaveChanges();
                        //Send Email to User
                        EnviarMailVerificador(oUser.email, oUser.token.ToString());
                        return RedirectToAction("Index");
                    }
                }
                return View();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        [HttpGet]
        public ActionResult Verifica(string id)
        {
            bool Status = false;
            using (FullViajesEntities db = new FullViajesEntities())
            {
                if (!string.IsNullOrEmpty(id))
                {
                    var verif = db.Usuario.Where(a => a.token == id).FirstOrDefault();
                    if (verif != null)
                    {
                        verif.active = true;
                        verif.token = "";
                        db.SaveChanges();
                        Status = true;
                        ViewBag.Mensaje = "Se ha verificado correctamente el Email";
                    }
                    else
                    {
                        ViewBag.Mensaje = "Ocurrio un error en la activación";
                    }
                }
            }
            if (Status == true)
            {
                ViewBag.Status = "Ya puede acceder desde ";
                ViewBag.Dir = "Users";
            }
            else
            {
                ViewBag.Status = "Intente regenerar contraseña y token de activacion desde ";
                ViewBag.Dir = "Users/RePass";
            }
            return View();
        }
        [NonAction]
        public void EnviarMailVerificador(string email, string tkn)
        {
            var UrlVerifica = "/Users/Verifica/" + tkn;
            var link = Request.Url.AbsoluteUri.Replace(Request.Url.PathAndQuery, UrlVerifica);

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
    }
}