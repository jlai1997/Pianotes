using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PianotesWebApi.Models
{
    /// <summary>
    /// The Inputs model that is created and passed in as a JSON object through the user interface.
    /// </summary>
    public class Inputs
    {
        public string Composer { get; set; }
        public string Title { get; set; }
        public int Tempo { get; set; }
        public string TimeSignature { get; set; }
        public string KeySignature { get; set; }
        public string Clef { get; set; }
        public string Instrument { get; set; }
        public string PdfName { get; set; }
    }
}