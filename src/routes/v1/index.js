const express = require("express");

const CityController = require("../../controllers/city-controller");
const FlightController = require("../../controllers/flight-controller");
const AirportController = require('../../controllers/airport-controller')
const router = express.Router();

router.post("/cities/", CityController.create);
router.patch("/cities/:id", CityController.update);
router.delete("/cities/:id", CityController.destroy);
router.get("/cities/:id", CityController.get);
router.get("/cities/", CityController.getAll);

router.post("/flights/", FlightController.create);
router.get("/flights/", FlightController.getAll);

router.post("/airports/", AirportController.create)

module.exports = router;
