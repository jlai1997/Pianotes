using PianotesWebApi.Models;
using PianotesWebApi.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace PianotesWebApi.Controllers
{
    public class PianoteController : ApiController
    {
        DetectionRepository dr = new DetectionRepository();
        [HttpPost]
        [Route("api/Pianotes/Create")]
        public IHttpActionResult CreatePdf([FromBody]Inputs inputs)
        {
            // to be deleted
            /*List<Note> list = new List<Note>()
            {
                new Note() {Frequency = 329.6276, Name = "e", Duration = 0.5},
                new Note() {Frequency = 293.6648, Name = "d", Duration = 0.5},
                new Note() {Frequency = 261.6256, Name = "c", Duration = 0.42},
                new Note() {Frequency = 293.6648, Name = "d", Duration = 0.5},

                new Note() {Frequency = 329.6276, Name = "e", Duration = 0.5},
                new Note() {Frequency = 329.6276, Name = "e", Duration = 0.5},
                new Note() {Frequency = 329.6276, Name = "e", Duration = 1.03},

                new Note() {Frequency = 293.6648, Name = "d", Duration = 0.5},
                new Note() {Frequency = 293.6648, Name = "d", Duration = 0.44},
                new Note() {Frequency = 293.6648, Name = "d", Duration = 1.10},

                new Note() {Frequency = 329.6276, Name = "e", Duration = 0.49},
                new Note() {Frequency = 391.9954, Name = "g", Duration = 0.39},
                new Note() {Frequency = 391.9954, Name = "g", Duration = 1.0},

                new Note() {Frequency = 329.6276, Name = "e", Duration = 0.5},
                new Note() {Frequency = 293.6648, Name = "d", Duration = 0.4},
                new Note() {Frequency = 261.6256, Name = "c", Duration = 0.6},
                new Note() {Frequency = 293.6648, Name = "d", Duration = 0.5},

                new Note() {Frequency = 329.6276, Name = "e", Duration = 0.5},
                new Note() {Frequency = 329.6276, Name = "e", Duration = 0.441},
                new Note() {Frequency = 329.6276, Name = "e", Duration = 0.72},
                new Note() {Frequency = 329.6276, Name = "e", Duration = 0.53},

                new Note() {Frequency = 293.6648, Name = "d", Duration = 0.66},
                new Note() {Frequency = 293.6648, Name = "d", Duration = 0.53},
                new Note() {Frequency = 329.6276, Name = "e", Duration = 0.5},
                new Note() {Frequency = 293.6648, Name = "d", Duration = 0.51},

                new Note() {Frequency = 261.6256, Name = "c", Duration = 2.11},
            };*/

            // probably to be deleted when faz is done. this should probably initialized in his code.
            List<Note> noteList = dr.Detection();
            LilyPondRepository lpr = new LilyPondRepository(inputs, noteList);
            

            return Ok(lpr.CreateSheets());
        }
    }
}