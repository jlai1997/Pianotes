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
  time: {
    type: String,
    required: true
  },
  key: {
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
  pdf: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Upload = mongoose.model("upload", UploadSchema);
