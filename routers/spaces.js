const { Router } = require("express");
//const res = require("express/lib/response");
const Space = require("../models").space;

const spaceRouter = new Router();

spaceRouter.get("/", async (request, response, next) => {
  try {
    const spaces = await Space.findAll();
    response.send(spaces);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = spaceRouter;
