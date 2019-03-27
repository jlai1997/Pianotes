using PianotesWebApi.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;

namespace PianotesWebApi.Repositories
{
    /// <summary>
    /// This class is the writer class that processes the list of notes and the UI input to create the .ly and .pdf files.
    /// </summary>
    public class LilyPondRepository
    {
        private Inputs inputs;
        private List<Note> notes;

        /// <summary>
        /// LilyPondWriter constructor that takes in two arguments.
        /// </summary>
        /// <param name="_inputs">Inputs that are taken from the user interface.</param>
        /// <param name="_notes">List of <see cref="Note"/> to be used in sheet creation.</param>
        public LilyPondRepository(Inputs _inputs, List<Note> _notes)
        {
            inputs = _inputs;
            notes = _notes;
        }

        // Creates a new .ly file and writes to it.
        /// <summary>
        /// Creates a new .ly and .pdf file to the path C:\LilyPond\
        /// </summary>
        /// <returns>A string representing the path the pdf was created in. </returns>
        public string CreateSheets()
        {
            UtilMethods.GetLengthOfNotes(notes, inputs.Tempo, inputs.TimeSignature);

            string path = @"C:\LilyPond\" + inputs.PdfName + ".ly";
            if (!File.Exists(path))
            {
                using (StreamWriter sw = File.CreateText(path))
                {

                    // Header section             
                    sw.WriteLine("\\version \"2.18.2\"");
                    sw.WriteLine();
                    sw.WriteLine("\\header {");
                    sw.WriteLine("\t title = \"" + inputs.Title + "\"");
                    sw.WriteLine("\t composer = \"" + inputs.Composer + "\"");
                    sw.WriteLine("\t instrument = \"" + inputs.Instrument + "\"");
                    sw.WriteLine("}");

                    // Melody section - This is where we declare what clef we're in, what
                    //                  key signature, and what time signature
                    sw.WriteLine("melody = {");
                    sw.WriteLine("\t \\clef " + inputs.Clef);
                    sw.WriteLine("\t \\key " + inputs.KeySignature);
                    sw.WriteLine("\t \\time " + inputs.TimeSignature);
                    sw.WriteLine();

                    // This is where we input the list of notes and lengths
                    string noteString = BuildNoteString(notes);
                    sw.WriteLine(noteString);
                    sw.WriteLine("}");
                    sw.WriteLine();


                    sw.WriteLine("\\score {");
                    sw.WriteLine("\t \\new Staff \\melody");
                    sw.WriteLine("\t \\layout { }");
                    sw.WriteLine("}");
                }
            }

            ExecuteLilyPond();

            return @"C:\LilyPond\" + inputs.PdfName + ".pdf";
        }

        /// <summary>
        /// Execute 'lilypond' command through the command line in the directory C:\LilyPond\
        /// </summary>
        private void ExecuteLilyPond()
        {
            Process p = new Process();
            p.StartInfo.FileName = "CMD.exe";
            p.StartInfo.WorkingDirectory = @"C:\LilyPond";
            p.StartInfo.Arguments = "/k lilypond " + inputs.PdfName + ".ly";
            p.Start();
        }

        /// <summary>
        /// Create our note string used in our .ly file.
        /// </summary>
        /// <param name="notes">List of <see cref="Note"/> to be used in sheet creation.</param>
        /// <returns>A string in the format "a4 a4 b1 b1".</returns>
        private string BuildNoteString(List<Note> notes)
        {
            StringBuilder sb = new StringBuilder();

            foreach (Note note in notes)
            {
                string octave = UtilMethods.GetOctaveStr(note.Frequency);

                sb.Append(note.Name);
                sb.Append(octave);
                sb.Append(note.Length);
                sb.Append(" ");
            }

            return sb.ToString().Trim();
        }
    }
}