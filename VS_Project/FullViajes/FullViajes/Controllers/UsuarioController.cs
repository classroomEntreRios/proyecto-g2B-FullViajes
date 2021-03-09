using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net;
using FullViajes.Models;
using System.Security.Cryptography;
using System.Text;

//CLASE PARA ENCRIPTAR EL PASSWORD DEL USUARIO
public class Encrypt
{
    public static string GetSHA256(string str)
    {
        SHA256 sha256 = SHA256Managed.Create();
        ASCIIEncoding encoding = new ASCIIEncoding();
        byte[] stream = null;
        StringBuilder sb = new StringBuilder();
        stream = sha256.ComputeHash(encoding.GetBytes(str));
        for (int i = 0; i < stream.Length; i++) sb.AppendFormat("{0:x2}", stream[i]);
        return sb.ToString();
    }

}


namespace FullViajes.Controllers
{
    public class UsuarioController : Controller
    {
        FullViajesEntities db = new FullViajesEntities();
        //MUESTRA LISTADO GENERAL
        public ActionResult Index()
        {
            if (Session["idUsuario"] != null)
            {
                if (Convert.ToInt32(Session["rol"]) == 0)
                {
                    List<Usuario> listaUsuarios = db.Usuario.ToList();
                    return View(listaUsuarios);
                }
                else
                {
                    return Redirect("~/Users/Privi");
                }
            }
            else
            {
                return Redirect("~/Users");
            }

        }
        //MUESTRA EL DETALLE DE USUARIO        
        public ActionResult Perfil(int id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Usuario usuario = db.Usuario.Find(id);
            if (usuario == null)
            {
                return HttpNotFound();
            }
            return View(usuario);
        }

        // INGRESA NUEVO USUARIO
        public ActionResult Nuevo()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Nuevo(Usuario oUser)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (FullViajesEntities db = new FullViajesEntities())
                    {
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
                        //ENCRIPTA CONTRASEÑA
                        string pswd = Encrypt.GetSHA256(oUser.password);
                        oUser.password = pswd;
                        //EN CASO DE QUE NO SE HAYA CARGADO FOTO DE PERFIL ASIGNA UNA, POR AHORA ASIGNA DIRECTAMENTE HASTA VER COMO FUNCIONA IMAGE-UPLOAD
                        //if (oUser.user_foto == null)
                        //{
                        oUser.user_foto = "/img/profile.png";
                        //}
                        //ASIGNO ROL 1=USUARIO REGISTRADO
                        oUser.rol = 1;
                        oUser.active = true;
                        oUser.token = "";
                        //SI LA DESCRIPCION DE USUARIO ES VACIA CREO UNA CADENA PARA RELLENAR EL CAMPO
                        if (oUser.user_descripcion == null)
                        {
                            oUser.user_descripcion = "El Usuario: " + oUser.nickname + " no agregó descripción pero su email es: " + oUser.email;
                        }
                        db.Usuario.Add(oUser);
                        db.SaveChanges();
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
        //MODIFICA DATOS DE USUARIO
        public ActionResult Modificar(int id)
        {
            Usuario usuario = db.Usuario.Find(id);
            return View(usuario);
        }
        [HttpPost]
        public ActionResult Modificar(Usuario oUser)
        {
            try
            {
                Usuario usuario = db.Usuario.Find(oUser.id_usuario);
                //CHEQUEA QUE EL MAIL NO ESTE EN USO SALVO EN EL USUARIO QUE SE ESTA MODIFICANDO
                Usuario emailcheck = db.Usuario.Where(a => a.email == oUser.email && a.id_usuario != oUser.id_usuario).FirstOrDefault();
                if (emailcheck != null)
                {
                    ModelState.AddModelError("email", "El email ya se encuentra registrado");
                    return View();
                }
                //CHEQUEA QUE EL NOMBRE DE USUARIO NO ESTE EN USO SALVO EN EL USUARIO QUE SE ESTA MODIFICANDO
                Usuario usercheck = db.Usuario.Where(a => a.nickname == oUser.nickname && a.id_usuario != oUser.id_usuario).FirstOrDefault();
                if (usercheck != null)
                {
                    ModelState.AddModelError("nickname", "El usuario " + oUser.nickname + " ya se encuentra registrado");
                    return View();
                }
                //ENCRIPTE LOS PASSWORDS CARGADOS EN TEXTO SIMPLE REENCRIPTANDO LO YA CARGADO
                // string pswd = Encrypt.GetSHA256(oUser.password);
                // usuario.password = pswd;
                usuario.nombre = oUser.nombre;
                usuario.apellido = oUser.apellido;
                usuario.nickname = oUser.nickname;
                usuario.email = oUser.email;
                //VUELVO A ASIGNAR LA IMAGEN POR DEFECTO HASTA VER IMAGE-UPLOAD
                usuario.user_foto = "/img/profile.png";
                //CHEQUEA QUE DESCRIPCION NO SE HAYA BORRADO Y SINO MODIFICA POR EL DATO QUE VIENE 
                if (oUser.user_descripcion == null)
                {
                    usuario.user_descripcion = "El Usuario: " + usuario.nickname + " no agregó descripción pero su email es: " + usuario.email;
                }
                else
                {
                    usuario.user_descripcion = oUser.user_descripcion;
                }
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
        //ELIMINA EL USUARIO
        public ActionResult Eliminar(int id)
        {
            Usuario oUser = db.Usuario.Find(id);
            db.Usuario.Remove(oUser);
            db.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}