const { Router } = require("express");
const router = new Router();
const Space = require("../models").space;
const Story = require("../models/").story;

router.get("/", async (req, res, next) => {
  try {
    res.send(await Space.findAll());
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const spaceId = req.params.id;
    const getSpaceById = await Space.findByPk(spaceId, {
      include: [{ model: Story }],
      //sorting
      order: [[Story, "createdAt", "DESC"]],
    });
    res.status(200).send(getSpaceById);
  } catch (error) {
    console.log(error.message);
    return res.status(400).send("invalid ID");
  }
});

//get space by userId
router.get("/user/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    //findOne because user only have one space
    const getUserById = await Space.findOne(userId, {
      include: [{ model: Story }],
    });

    res.status(200).send(getUserById);
  } catch (error) {
    console.log(error.message);
    return res.status(400).send("invalid ID");
  }
});

module.exports = router;
