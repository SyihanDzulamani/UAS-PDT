const express = require("express");
const tugasController = require("../controllers/tugasController");

const router = express.Router();

router.post("/", tugasController.createTugas);
router.get("/", tugasController.getTugas);
router.get("/:id", tugasController.getTugas);
router.patch("/:id", tugasController.updateTugas);
router.delete("/:id", tugasController.deleteTugas);

module.exports = router;
