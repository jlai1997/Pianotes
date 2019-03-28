const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load Input Validation
const validateUploadInput = require("../../validation/upload");

// Load User model
const Upload = require("../../models/Upload");

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Upload Works" }));

// @route   GET api/upload/upload
// @desc    Register user
// @access  Public
router.post("/file", (req, res) => {
  const { errors, isValid } = validateUploadInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
});

module.exports = router;
