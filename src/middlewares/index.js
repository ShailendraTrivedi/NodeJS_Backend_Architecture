const express = require("express");
const cors = require("cors");

const checkAuth = require("./checkAuth");

const middlewares = express.Router();
const middlewareCredentials = {
  origin: true,
  credentials: true,
};

middlewares.use(express.json());
middlewares.use(cors(middlewareCredentials));
middlewares.use(express.urlencoded({ extended: true }));

console.log("Add Middlewares Here ...");

module.exports = middlewares;
module.exports.checkAuth = checkAuth;
