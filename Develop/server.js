const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3000;
const mainDir = path.join(__dirname, "/public");

