const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UploadSchema = new Schema({
  composer: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  tempo: {
    type: String,
    required: true
  },
  timeSignature: {
    type: String,
    required: true
  },
  keySignature: {
    type: String,
    required: true
  },
  clef: {
    type: String,
    required: true
  },
  instrument: {
    type: String,
    required: true
  },
  pdfName: {
    type: String,
    required: true
  },
  soundFilePath: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Upload = mongoose.model("upload", UploadSchema);
