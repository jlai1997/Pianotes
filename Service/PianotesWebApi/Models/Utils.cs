using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PianotesWebApi.Models
{
    /// <summary>
    /// A class of static utility methods used to help us in sheet music processing and creation.
    /// </summary>
    class UtilMethods
    {
        /// <summary>
        /// A static helper method that finds the closest value to our target parameter in our input array.
        /// </summary>
        /// <param name="vals">An array of double that is being searched.</param>
        /// <param name="target">The target we are looking for.</param>
        /// <returns>A double that is closest to our target.</returns>
        private static double ClosestTo(double[] vals, double target)
        {
            var closest = double.MaxValue;
            var minDifference = double.MaxValue;
            foreach (var element in vals)
            {
                var difference = Math.Abs(element - target);
                if (minDifference > difference)
                {
                    minDifference = difference;
                    closest = element;
                }
            }

            return closest;
        }

        /// <summary>
        /// A static method that gets the string that represents the octave the frequency is in.
        /// </summary>
        /// <param name="freq">The frequency we are getting the octave string for.</param>
        /// <returns>A string from the <see cref="octaves"/> dictionary.</returns>
        public static string GetOctaveStr(double freq)
        {
            double closestFreq = ClosestTo(UtilVariables.cFreqs, freq);
            return UtilVariables.octaves[closestFreq];
        }

        /// <summary>
        /// A static method that converts a frequency to the corresponding note.
        /// </summary>
        /// <param name="freq">The frequency to be converted.</param>
        /// <returns>A string representing the note.</returns>
        public static string FreqToNote(double freq)
        {
            // Return a note based off of a frequency.
            double closestFreq = ClosestTo(UtilVariables.freqs, freq);

            string note = UtilVariables.notes[closestFreq];

            // TODO: Figure out which one to pick from sharp or flat.
            if (note.Contains("/"))
                note = note.Substring(0, note.IndexOf('/'));

            return note;
        }

        /// <summary>
        /// A static method that alters the list of notes and computes the note value of each note.
        /// </summary>
        /// <param name="notes">List of <see cref="Note"/> to be used in sheet creation.</param>
        /// <param name="tempo">Tempo of the song</param>
        /// <param name="timeSignature">Time signature of the song</param>
        public static void GetLengthOfNotes(List<Note> notes, int tempo, string timeSignature)
        {

            // duration then length value (quarter, half, eighth, whole, etc...)
            Dictionary<double, short> lengths = new Dictionary<double, short>();

            double beatLength = 60.0 / tempo;
            short beat = Convert.ToInt16(timeSignature.Substring(timeSignature.IndexOf('/') + 1, 1));
            short tempBeat = beat;
            double tempBeatLength = beatLength;
            double[] beatLengths = new double[7];
            int i = 0;

            lengths.Add(beatLength, beat);
            beatLengths[i++] = beatLength;

            while (tempBeat > 1)
            {
                tempBeat /= 2;
                tempBeatLength *= 2.0;
                lengths.Add(tempBeatLength, tempBeat);
                beatLengths[i++] = tempBeatLength;
            }

            tempBeat = beat;
            tempBeatLength = beatLength;

            while (tempBeat < 64)
            {
                tempBeat *= 2;
                tempBeatLength /= 2.0;
                lengths.Add(tempBeatLength, tempBeat);
                beatLengths[i++] = tempBeatLength;
            }

            foreach (var note in notes)
            {
                note.Length = lengths[ClosestTo(beatLengths, note.Duration)];
            }
        }
    }

    /// <summary>
    /// A class of public static utility variables.
    /// </summary>
    class UtilVariables
    {
        public static double[] freqs = new double[]
        {
            27.5, // A0
            29.13524, // A#0 / Bb0
            30.86771, // B0
            32.70320, // C1
            34.64783, // C#1 / Db1
            36.70810, // D1
            38.89087, // D#1 / Eb1
            41.20344, // E1
            43.65353, // F1
            46.24930, // F#1 / Gb1
            48.99943, // G1
            51.91309, // G#1 / Ab1
            55.0,     // A1
            58.27047, // A#1 / Bb1
            61.73541, // B1
            65.40639, // C2
            69.29566, // C#2 / Db2
            73.41619, // D2
            77.78175, // D#2 / Eb2
            82.40689, // E2
            87.30706, // F2
            92.49861, // F#2 / Gb2
            97.99886, // G2
            103.8262, // G#2 / Ab2
            110.0,    // A2
            116.5409, // A#2 / Bb2
            123.4708, // B2
            130.8128, // C3
            138.5913, // C#3 / Db3
            146.8324, // D3
            155.5635, // D#3 / Eb3
            164.8138, // E3
            174.6141, // F3
            184.9972, // F#3 / Gb3
            195.9977, // G3
            207.6523, // G#3 / Ab3
            220.0,    // A3
            233.0819, // A#3 / Bb3
            246.9417, // B3
            261.6256, // C4 ---- MIDDLE C
            277.1826, // C#4 / Db4
            293.6648, // D4
            311.1270, // D#4 / Eb4
            329.6276, // E4
            349.2282, // F4
            369.9944, // F#4 / Gb4
            391.9954, // G4
            415.3047, // G#4 / Ab4
            440.0,    // A4
            466.1638, // A#4 / Bb4
            493.8833, // B4
            523.2511, // C5
            554.3653, // C#5 / Db5
            587.3295, // D5
            622.2540, // D#5 / Eb5
            659.2551, // E5
            698.4565, // F5
            739.9888, // F#5 / Gb5
            783.9909, // G5
            830.6094, // G#5 / Ab5
            880.0,    // A5
            932.3275, // A#5 / Bb5
            987.7666, // B5
            1046.502, // C6
            1108.731, // C#6 / Db6
            1174.659, // D6
            1244.508, // D#6 / Eb6
            1318.510, // E6
            1396.913, // F6
            1479.978, // F#6 / Gb6
            1567.982, // G6
            1661.219, // G#6 / Ab6
            1760.0,   // A6
            1864.655, // A#6 / Bb6
            1975.533, // B6
            2093.005, // C7
            2217.461, // C#7 / Db7
            2349.318, // D7
            2489.016, // D#7 / Eb7
            2637.020, // E7
            2793.826, // F7
            2959.955, // F#7 / Gb7
            3135.963, // G7
            3322.438, // G#7 / Ab7
            3520.0,   // A7
            3729.310, // A#7 / Bb7
            3951.066, // B7
            4186.009, // C8
        };

        //static Dictionary<double, string> notes = new Dictionary<double, string>()
        //{
        //    [27.5] = "A0",
        //    [29.13524] = "A#0/Bb0",
        //    [30.86771] = "B0",
        //    [32.70320] = "C1",
        //    [34.64783] = "C#1/Db1",
        //    [36.70810] = "D1",
        //    [38.89087] = "D#1/Eb1",
        //    [41.20344] = "E1",
        //    [43.65353] = "F1",
        //    [46.24930] = "F#1/Gb1",
        //    [48.99943] = "G1",
        //    [51.91309] = "G#1/Ab1",
        //    [55.0]     = "A1",
        //    [58.27047] = "A#1/Bb1",
        //    [61.73541] = "B1",
        //    [65.40639] = "C2",
        //    [69.29566] = "C#2/Db2",
        //    [73.41619] = "D2",
        //    [77.78175] = "D#2/Eb2",
        //    [82.40689] = "E2",
        //    [87.30706] = "F2",
        //    [92.49861] = "F#2/Gb2",
        //    [97.99886] = "G2",
        //    [103.8262] = "G#2/Ab2",
        //    [110.0]    = "A2",
        //    [116.5409] = "A#2/Bb2",
        //    [123.4708] = "B2",
        //    [130.8128] = "C3",
        //    [138.5913] = "C#3/Db3",
        //    [146.8324] = "D3",
        //    [155.5635] = "D#3/Eb3",
        //    [164.8138] = "E3",
        //    [174.6141] = "F3",
        //    [184.9972] = "F#3/Gb3",
        //    [195.9977] = "G3",
        //    [207.6523] = "G#3/Ab3",
        //    [220.0]    = "A3",
        //    [233.0819] = "A#3/Bb3",
        //    [246.9417] = "B3",
        //    [261.6256] = "C4", // ---- MIDDLE C
        //    [277.1826] = "C#4/Db4",
        //    [293.6648] = "D4",
        //    [311.1270] = "D#4/Eb4",
        //    [329.6276] = "E4",
        //    [349.2282] = "F4",
        //    [369.9944] = "F#4/Gb4",
        //    [391.9954] = "G4",
        //    [415.3047] = "G#4/Ab4",
        //    [440.0]    = "A4",
        //    [466.1638] = "A#4/Bb4",
        //    [493.8833] = "B4",
        //    [523.2511] = "C5",
        //    [554.3653] = "C#5/Db5",
        //    [587.3295] = "D5",
        //    [622.2540] = "D#5/Eb5",
        //    [659.2551] = "E5",
        //    [698.4565] = "F5",
        //    [739.9888] = "F#5/Gb5",
        //    [783.9909] = "G5",
        //    [830.6094] = "G#5/Ab5",
        //    [880.0]    = "A5",
        //    [932.3275] = "A#5/Bb5",
        //    [987.7666] = "B5",
        //    [1046.502] = "C6",
        //    [1108.731] = "C#6/Db6",
        //    [1174.659] = "D6",
        //    [1244.508] = "D#6/Eb6",
        //    [1318.510] = "E6",
        //    [1396.913] = "F6",
        //    [1479.978] = "F#6/Gb6",
        //    [1567.982] = "G6",
        //    [1661.219] = "G#6/Ab6",
        //    [1760.0]   = "A6",
        //    [1864.655] = "A#6/Bb6",
        //    [1975.533] = "B6",
        //    [2093.005] = "C7",
        //    [2217.461] = "C#7/Db7",
        //    [2349.318] = "D7",
        //    [2489.016] = "D#7/Eb7",
        //    [2637.020] = "E7",
        //    [2793.826] = "F7",
        //    [2959.955] = "F#7/Gb7",
        //    [3135.963] = "G7",
        //    [3322.438] = "G#7/Ab7",
        //    [3520.0]   = "A7",
        //    [3729.310] = "A#7/Bb7",
        //    [3951.066] = "B7",
        //    [4186.009] = "C8",
        //};

        public static Dictionary<double, string> notes = new Dictionary<double, string>()
        {
            [27.5] = "a",
            [29.13524] = "ais/bes",
            [30.86771] = "b",
            [32.70320] = "c",
            [34.64783] = "cis/des",
            [36.70810] = "d",
            [38.89087] = "dis/ees",
            [41.20344] = "e",
            [43.65353] = "f",
            [46.24930] = "fis/ges",
            [48.99943] = "g",
            [51.91309] = "gis/aes",
            [55.0] = "a",
            [58.27047] = "ais/bes",
            [61.73541] = "b",
            [65.40639] = "c",
            [69.29566] = "cis/des",
            [73.41619] = "d",
            [77.78175] = "dis/ees",
            [82.40689] = "e",
            [87.30706] = "f",
            [92.49861] = "fis/ges",
            [97.99886] = "g",
            [103.8262] = "gis/aes",
            [110.0] = "a",
            [116.5409] = "ais/bes",
            [123.4708] = "b",
            [130.8128] = "c",
            [138.5913] = "cis/des",
            [146.8324] = "d",
            [155.5635] = "dis/ees",
            [164.8138] = "e",
            [174.6141] = "f",
            [184.9972] = "fis/ges",
            [195.9977] = "g",
            [207.6523] = "gis/aes",
            [220.0] = "a",
            [233.0819] = "ais/bes",
            [246.9417] = "b",
            [261.6256] = "c", // ---- MIDDLE C
            [277.1826] = "cis/des",
            [293.6648] = "d",
            [311.1270] = "dis/ees",
            [329.6276] = "e",
            [349.2282] = "f",
            [369.9944] = "fis/ges",
            [391.9954] = "g",
            [415.3047] = "gis/aes",
            [440.0] = "a",
            [466.1638] = "ais/bes",
            [493.8833] = "b",
            [523.2511] = "c",
            [554.3653] = "cis/des",
            [587.3295] = "d",
            [622.2540] = "dis/ees",
            [659.2551] = "e",
            [698.4565] = "f",
            [739.9888] = "fis/ges",
            [783.9909] = "g",
            [830.6094] = "gis/aes",
            [880.0] = "a",
            [932.3275] = "ais/bes",
            [987.7666] = "b",
            [1046.502] = "c",
            [1108.731] = "cis/des",
            [1174.659] = "d",
            [1244.508] = "dis/ees",
            [1318.510] = "e",
            [1396.913] = "f",
            [1479.978] = "fis/ges",
            [1567.982] = "g",
            [1661.219] = "gis/aes",
            [1760.0] = "a",
            [1864.655] = "ais/bes",
            [1975.533] = "b",
            [2093.005] = "c",
            [2217.461] = "cis/des",
            [2349.318] = "d",
            [2489.016] = "dis/ees",
            [2637.020] = "e",
            [2793.826] = "f",
            [2959.955] = "fis/ges",
            [3135.963] = "g",
            [3322.438] = "gis/aes",
            [3520.0] = "a",
            [3729.310] = "ais/bes",
            [3951.066] = "b",
            [4186.009] = "c",
        };

        public static double[] cFreqs = new double[]
        {
            32.70320,
            65.40639,
            130.8128,
            261.6256,
            523.2511,
            1046.502,
            2093.005,
            4186.009
        };

        public static Dictionary<double, string> octaves = new Dictionary<double, string>()
        {
            [32.70320] = ",,",  // C1
            [65.40639] = ",",   // C2
            [130.8128] = "",    // C3 
            [261.6256] = "'",   // C4
            [523.2511] = "''",  // C5
            [1046.502] = "'''", // C6
            [2093.005] = "''''", // C7
            [4186.009] = "'''''"  // C8
        };

    }
}