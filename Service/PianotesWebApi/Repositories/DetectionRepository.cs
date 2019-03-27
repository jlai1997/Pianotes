using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CSCore;
using NAudio.Wave;
using Accord;
using OnsetDetection;
using CSCore.DSP;
using CSCore.Utils;
using System.IO;
using PianotesWebApi.Models;

namespace PianotesWebApi.Repositories
{
    public class DetectionRepository
    {
        public List<Note> Detection()
        {

            List<Note> noteList = new List<Note>();
            
            //Console.WriteLine("Press any key to convert to .WAV file...");
            //Console.ReadLine();

            int i;
            //Open MP3 file and convert to WAV file.
            WaveOutEvent waveOut = new WaveOutEvent();
            Mp3FileReader mp3Reader = new Mp3FileReader(@"C:\Users\Fazle\source\repos\Practice\Media\twinkle.mp3");
            toWAV(mp3Reader);
            //Console.WriteLine(".WAV file created! Press any key to continue...");
            //Console.ReadLine();
            StereoToMono(@"C:\Users\Fazle\source\repos\Practice\Media\current.wav");

            int sampleRate;
            double[] data = null, R = null;
            ReadWavFile(out sampleRate);
            openWav(@"C:\Users\Fazle\source\repos\Practice\Media\currentMono.wav", out data, out R);
            //Console.WriteLine(data.Length);


            Progress<string> progress = new Progress<string>();

            OnsetDetector detector = new OnsetDetector(DetectorOptions.Default, progress);
            List<Onset> list = detector.Detect(@"C:\Users\Fazle\source\repos\Practice\Media\currentMono.wav");

            /*Console.WriteLine("Time    Amp");
            for (i = 0; i < list.Count; i++)
            {
                Console.Write(list[i].OnsetTime);
                Console.Write("   ");
                Console.Write(list[i].OnsetAmplitude);
                Console.Write("   ");
                Console.WriteLine();
            }
            Console.WriteLine();*/

            int startPos = 0, stopPos = 0, flag = 0;
            double freq = 0, duration = 0;

            double[] temp;
            double[] result;
            CSCore.Utils.Complex[] complex;

            for (i = 0; i < list.Count - 1; i++)
            {
                startPos = (int)Math.Ceiling(list[i].OnsetTime * sampleRate);
                stopPos = (int)Math.Floor(list[i + 1].OnsetTime * sampleRate);
                temp = new double[stopPos - startPos];
                result = new double[stopPos - startPos];
                complex = new CSCore.Utils.Complex[stopPos - startPos];

                Array.ConstrainedCopy(data, startPos, temp, 0, temp.Length);

                for (int j = 0; j < complex.Length; j++)
                {
                    complex[j] = new Complex((float)temp[j]);
                    //Console.WriteLine(complex[j]);
                }
                //Console.ReadLine();
                Note note = new Note();
                note.Frequency = CalculateFFT(result, complex, flag);
                note.Name = UtilMethods.FreqToNote(note.Frequency);
                note.Duration = list[i + 1].OnsetTime - list[i].OnsetTime;
                noteList.Add(note);

            }

            //Last Note
            startPos = (int)Math.Floor(list[i].OnsetTime * sampleRate);
            stopPos = data.Length - 1;
            temp = new double[stopPos - startPos];
            result = new double[stopPos - startPos];
            complex = new CSCore.Utils.Complex[stopPos - startPos];
            Array.ConstrainedCopy(data, startPos, temp, 0, temp.Length);
            for (int j = 0; j < complex.Length; j++)
            {
                complex[j] = new Complex((float)temp[j]);
            }
            flag = 1;

            Note lastNote = new Note();
            lastNote.Frequency = CalculateFFT(result, complex, flag);
            lastNote.Name = UtilMethods.FreqToNote(lastNote.Frequency);
            lastNote.Duration =  (data.Length / sampleRate) - list[i].OnsetTime;
            noteList.Add(lastNote);

            //Console.WriteLine("Press any key to terminate.");
            //Console.ReadLine();
            mp3Reader.Dispose();

            return noteList;
        }

        #region
        ///Take .mp3 and convert to .wav file
        public void toWAV(Mp3FileReader input)
        {
            var outfile = @"C:\Users\Fazle\source\repos\Practice\Media\current.wav";
            using (input)
            {
                WaveFileWriter.CreateWaveFile(outfile, input);
            }
        }

        ///Take .wav and make it a mono-channel file
        public void StereoToMono(string sourceFile)
        {
            var outputFile = @"C:\Users\Fazle\source\repos\Practice\Media\currentMono.wav";
            using (var waveFileReader = new WaveFileReader(sourceFile))
            {
                var outFormat = new NAudio.Wave.WaveFormat(waveFileReader.WaveFormat.SampleRate, 1);
                using (var resampler = new MediaFoundationResampler(waveFileReader, outFormat))
                {
                    WaveFileWriter.CreateWaveFile(outputFile, resampler);
                }
            }
        }

        ///Read .wav file, different method. (Used for detailed file info)
        public bool ReadWavFile(out int sampleRate)
        {
            float[] data = null;
            sampleRate = 0;

            try
            {
                using (FileStream fs = File.Open(@"C:\Users\Fazle\source\repos\Practice\Media\currentMono.wav", FileMode.Open))
                {
                    BinaryReader reader = new BinaryReader(fs);

                    int chunkID = reader.ReadInt32();
                    int fileSize = reader.ReadInt32();
                    int riffType = reader.ReadInt32();

                    int fmtID = reader.ReadInt32();
                    int fmtSize = reader.ReadInt32();
                    int fmtCode = reader.ReadInt16();
                    int channels = reader.ReadInt16();
                    sampleRate = reader.ReadInt32();
                    int byteRate = reader.ReadInt32();
                    int fmtBlockAlign = reader.ReadInt16();
                    int bitDepth = reader.ReadInt16();

                    //Console.WriteLine("Channels: " + channels);
                    //Console.WriteLine("bitDepth: " + bitDepth);
                    //Console.WriteLine("sampleRate:" + sampleRate);

                    if (fmtSize == 18)
                    {
                        int fmtExtraSize = reader.ReadInt16();
                        reader.ReadBytes(fmtExtraSize);
                    }

                    int bytes;
                    while (new string(reader.ReadChars(4)) != "data")
                    {
                        bytes = reader.ReadInt32();
                        reader.ReadBytes(bytes);
                    }

                    // DATA!
                    bytes = reader.ReadInt32();
                    byte[] byteArray = reader.ReadBytes(bytes);

                    int bytesForSamp = bitDepth / 8;
                    int samps = bytes / bytesForSamp;

                    float[] asFloat = null;

                    switch (bitDepth)
                    {
                        case 64:
                            double[]
                            asDouble = new double[samps];
                            Buffer.BlockCopy(byteArray, 0, asDouble, 0, bytes);
                            asFloat = Array.ConvertAll(asDouble, e => (float)e);
                            break;
                        case 32:
                            asFloat = new float[samps];
                            Buffer.BlockCopy(byteArray, 0, asFloat, 0, bytes);
                            break;
                        case 16:
                            Int16[]
                            asInt16 = new Int16[samps];
                            Buffer.BlockCopy(byteArray, 0, asInt16, 0, bytes);
                            asFloat = Array.ConvertAll(asInt16, e => e / (float)Int16.MaxValue);
                            break;
                        default:
                            return false;
                    }

                    switch (channels)
                    {
                        case 1:
                            data = asFloat;
                            return true;
                        case 2:
                            data = new float[samps];
                            for (int i = 0, s = 0; i < samps; i++)
                            {
                                data[i] = asFloat[s++];
                            }
                            return true;
                        default:
                            return false;
                    }
                }
            }
            catch
            {
                //Debug.WriteLine("...Failed to load file: " + @"C:\Users\Fazle\source\repos\Practice\Media\current.wav");
                return false;
            }

        }

        ///Read .wav file data into a double array of values
        public void openWav(string filename, out double[] left, out double[] right)
        {
            byte[] wav = File.ReadAllBytes(filename);

            int channels = wav[22];

            int pos = 12;

            // Find "DATA"
            while (!(wav[pos] == 100 && wav[pos + 1] == 97 && wav[pos + 2] == 116 && wav[pos + 3] == 97))
            {
                pos += 4;
                int chunkSize = wav[pos] + wav[pos + 1] * 256 + wav[pos + 2] * 65536 + wav[pos + 3] * 16777216;
                pos += 4 + chunkSize;
            }
            pos += 8;

            //Console.WriteLine("Data portion found!");
            //Console.ReadLine();

            int samples = (wav.Length - pos) / 2;
            if (channels == 2) samples /= 2;

            left = new double[samples];
            if (channels == 2) right = new double[samples];
            else right = null;

            int i = 0;
            while (pos < left.Length * 2)
            {
                left[i] = bytesToDouble(wav[pos], wav[pos + 1]);
                pos += 2;
                if (channels == 2)
                {
                    right[i] = bytesToDouble(wav[pos], wav[pos + 1]);
                    pos += 2;
                }
                i++;
            }
        }

        ///Helper function for openWav()
        public double bytesToDouble(byte firstByte, byte secondByte)
        {
            short s = (short)((secondByte << 8) | firstByte);
            return s;
        }
        #endregion

        public double CalculateFFT(double[] resultBuffer, Complex[] data, int flag)
        {
            Complex[] input = new Complex[data.Length];
            data.CopyTo(input, 0);

            double max = int.MinValue;
            int freq = 0;


            FastFourierTransformation.Fft(input, Convert.ToInt32(Math.Truncate(Math.Log(input.Length, 2))));
            for (int i = 0; i <= (input.Length / 2) - 1; i++)
            {
                var z = input[i];
                resultBuffer[i] = (float)z.Value;

                if (resultBuffer[i] >= max)
                {
                    max = resultBuffer[i];
                    freq = i;
                }

                //Console.WriteLine(resultBuffer[i]);

            }

            if (flag == 1){
                //Console.WriteLine(Math.Truncate(freq / 2 * 44100 / 16370.8381) + " Hz");
                return Math.Truncate(freq / 2 * 44100 / 16370.8381);
            }

            else{
                //Console.WriteLine(Math.Truncate(freq * 44100 / 16370.8381) + " Hz");
                return Math.Truncate(freq * 44100 / 16370.8381);
            }

        }
    }
}