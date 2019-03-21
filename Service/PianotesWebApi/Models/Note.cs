using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PianotesWebApi.Models
{
    /// <summary>
    /// This class represents a single note in a song. 
    /// </summary>
    public class Note
    {
        public double Frequency { get; set; }
        public string Name { get; set; }
        public double Duration { get; set; }
        public short Length { get; set; }
    }
}