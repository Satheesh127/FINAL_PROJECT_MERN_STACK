const express = require("express");
const router = express.Router();
const propertyController = require("../controllers/propertyController");

// Public routes
router.get("/search/filter", propertyController.searchProperties);
router.get("/", propertyController.getProperties);
router.get("/:id", propertyController.getProperty);

// Protected routes
router.post("/", propertyController.createProperty);
router.put("/:id", propertyController.updateProperty);
router.delete("/:id", propertyController.deleteProperty);

module.exports = router;
