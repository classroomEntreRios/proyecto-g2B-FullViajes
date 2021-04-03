using FullViajes.Models.WS;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using FullViajes.Models;

namespace FullViajes.Controllers
{
    public class AccesoController : ApiController
    {
        [HttpPost]
        public Respuesta Login([FromBody] AccesoViewModel model)
        {
            Respuesta oRes = new Respuesta();
            oRes.resultado = 0;
            try {
                using (FullViajesEntities db= new FullViajesEntities())
                {
                    string pswd = Encrypt.GetSHA256(model.password);
                       Usuario user = db.Usuario.Where(a => a.email == model.email).FirstOrDefault();
                           if (user != null)
                    {
                       
                        if (user.password == pswd)
                        {
                            if (user.active == true)
                            {
                                oRes.resultado = 1;
                                var tkn = Guid.NewGuid().ToString();
                                oRes.datos = new {
                                    token =tkn,
                                    rol=user.rol,
                                    nicname=user.nickname,
                                    imgperfil=user.user_foto
                                };
                                user.token = tkn;
                                db.Entry(user).State = System.Data.Entity.EntityState.Modified;
                                db.SaveChanges();
                            }
                            else
                            {
                                oRes.mensaje = "El usuario no se encuentra activo";
                            }
                        }
                        else
                        {
                            oRes.mensaje = "Datos incorrectos";
                        }
                    }
                    else
                    {
                        oRes.mensaje = "Datos incorrectos";
                    }
                }
            }
            catch (Exception ex)
            {
                oRes.mensaje = "Ha ocurrido un error" + ex;
            }
            return oRes;
        }
        /*
        public Respuesta Logout()
        {
            Respuesta oRes = new Respuesta();
            return oRes;
        }
        */
    }
}