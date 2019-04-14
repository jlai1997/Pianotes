const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.file = !isEmpty(data.file) ? data.file : "";

  if (Validator.isEmpty(data.file)) {
    errors.composer = "Please submit a file";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
