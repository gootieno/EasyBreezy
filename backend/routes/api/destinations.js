const express = require("express");
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { Destination, Event } = require("../../db/models");

const e = require("express");

const router = express.Router();

//all destinations
router.get(
  "/:userId",
  asyncHandler(async (req, res, next) => {
    const userId = parseInt(req.params.userId, 10);
    let destinations = await Destination.findAll({
      where: {
        userId,
      },
    });
    if (destinations) {
      return res.json(destinations);
    }
    //error handle
  })
);

router.post(
  "",
  asyncHandler(async (req, res, next) => {
    const { name, userId } = req.body;
    // let id = parseInt(userId, 10);
    const destination = await Destination.create({ name, userId });

    if (destination) res.json(destination);
  })
);

router.put(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    const { userId, name } = req.body;
    const destination = await Destination.findByPk(id);

    const updatedDestination = await destination.update(
      {
        name,
      },
      {
        where: userId,
      }
    );

    if (updatedDestination) res.json(updatedDestination);
  })
);
router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);
    await Event.destroy({ where: { destinationId: id } });
    const destination = await Destination.destroy({ where: { id } });

    if (destination) {
      return res.json({ deleted: true });
    } else {
      return res.json({ deleted: false });
    }
  })
);

module.exports = router;
