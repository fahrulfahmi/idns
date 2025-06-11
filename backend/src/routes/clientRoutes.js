const express = require("express");
const { uploadClientLogo } = require("../middleware/uploadMiddleware");
const { createClient, getAllClients, getClientById, updateClient, deleteClient } = require("../controllers/clientController");

const router = express.Router();

router.post("/", uploadClientLogo, createClient);  // <-- Pastikan ini ada
router.get("/", getAllClients);
router.get("/:id", getClientById);
router.put("/:id", uploadClientLogo, updateClient);
router.delete("/:id", deleteClient);

module.exports = router;
