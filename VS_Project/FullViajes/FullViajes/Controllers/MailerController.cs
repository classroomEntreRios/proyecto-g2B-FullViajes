using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Net.Mail;
using FullViajes.Models;

namespace FullViajes.Controllers
{
    public class MailerController : ApiController
    {
        private IHttpActionResult Enviar(Consulta Form) 
        {
            string MensajeError = "Error";
            var DesdeEmail = new MailAddress("fullviajescontact@gmail.com", "contacto");
            var HaciaEmail = new MailAddress("fullviajescontact@gmail.com");
            var DesdeEmailPassword = "wgoyrygvusejvlcg";
            string subject = "Consulta de " + Form.nombre + " en FullViajes ";

            string body = "<br/><br/>" + Form.consulta + "<br/><br/>" + "Contestar a: " + Form.correo;

            var smtp = new SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 587,
                //Port = 465,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(DesdeEmail.Address, DesdeEmailPassword)
            };


            try
            {
                using (var message = new MailMessage(DesdeEmail, HaciaEmail)
                {
                    Subject = subject,
                    Body = body,
                    IsBodyHtml = true
                })
                    smtp.Send(message);

            }
            catch
            {
                MensajeError = "ERROR AL INTENTAR ENVIAR LA CONSULTA";
                return BadRequest(MensajeError);
            }
            return Ok();

        }
        [Route("api/Contacto")]
        [HttpPost]
        public IHttpActionResult EnviarContacto( Consulta Form)
        {
            return Enviar(Form);

        }






    }
}
