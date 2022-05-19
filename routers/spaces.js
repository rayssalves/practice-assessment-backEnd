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

//goes to the details page

// router.get("/:id", async (req, res, next) => {
//   try {
//     const specificSpace = await Space.findByPk(req.params.id, {
//       include: [Story],
//     });
//     if (!specificSpace) {
//       res.status(404).send(`Space with id ${req.params.id} not found`);
//     } else {
//       res.send(specificSpace);
//     }
//   } catch (e) {
//     console.log(e);
//     next(e);
//   }
// });

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

module.exports = router;
