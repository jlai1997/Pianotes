const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.composer = !isEmpty(data.composer) ? data.composer : "";
  data.title = !isEmpty(data.title) ? data.title : "";
  data.tempo = !isEmpty(data.tempo) ? data.tempo : "";
  data.time = !isEmpty(data.time) ? data.time : "";
  data.key = !isEmpty(data.key) ? data.key : "";
  data.clef = !isEmpty(data.clef) ? data.clef : "";
  data.instrument = !isEmpty(data.instrument) ? data.instrument : "";
  data.pdf = !isEmpty(data.pdf) ? data.pdf : "";

  if (!Validator.isLength(data.composer, { min: 2, max: 30 })) {
    errors.composer = "Composer's name must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.composer)) {
    errors.composer = "Composer field is required";
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }

  if (Validator.isEmpty(data.tempo)) {
    errors.tempo = "Tempo field is required";
  }

  if (Validator.isEmpty(data.time)) {
    errors.time = "Time signature field is required";
  }

  if (Validator.isEmpty(data.key)) {
    errors.key = "Key signature field is required";
  }

  if (Validator.isEmpty(data.clef)) {
    errors.clef = "Clef field is required";
  }

  if (Validator.isEmpty(data.instrument)) {
    errors.instrument = "Instrument field is required";
  }

  if (Validator.isEmpty(data.pdf)) {
    errors.pdf = "Pdf field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
