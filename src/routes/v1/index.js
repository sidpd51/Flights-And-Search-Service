const express = require("express");

const cityController = require("../../controllers/city-controller");

const router = express.Router();

router.post("/city/", cityController.create);
router.patch("/city/:id", cityController.update);
router.delete("/city/:id", cityController.destroy);
router.get("/city/:id", cityController.get);

module.exports = router;
