const express = require("express");
const morgan = require("morgan");

var bodyParser = require('body-parser');

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello, World!");
});