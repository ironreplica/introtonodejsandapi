const myController = require("../controllers");
const routes = require("express").Router();

routes.get("/", myController.awesomeFunction);

routes.get("/ttech", myController.tooeletech);

module.exports = routes;