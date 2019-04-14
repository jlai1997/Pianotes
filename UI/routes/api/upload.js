const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const formidable = require('formidable');
const fs = require("fs");

// Load Input Validation
const validateUploadInput = require("../../validation/upload");
const validateFileInput = require("../../validation/file");

// Load User model
const Upload = require("../../models/Upload");

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Upload Works" }));

router.post("http://pianotes.azurewebsites.net/api/Pianotes/Create", (req, res) =>{
  res.json({ msg: "Upload Works" })
});

// @route   GET api/upload/upload
// @desc    Register user
// @access  Public

router.post("/music", (req, res, next) =>{
  const { errors, isValid } = validateFileInput(req.body);

  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    var oldPath = files.file.path;
    var newPath = '/Users/Piero/Desktop/Test/' + files.file.name;
    fs.rename(oldPath, newPath, function (err) {
    if (err) throw err;
    res.write(newPath);
    res.end();
    });
  });
})


router.post("/file", (req, res) => {
  const { errors, isValid } = validateUploadInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  router.post("http://pianotes.azurewebsites.net/api/Pianotes/Create", (req, res) =>{

  });
});

module.exports = router;
