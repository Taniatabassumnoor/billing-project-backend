const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const {
  insertBilling,
  getAllBilling,
  deleteBilling,
  getSingleBilling,
  updateBilling,
} = require("../controllers/billingController");

// all routes
router.post("/add-billing", insertBilling);
router.get("/billing-list", getAllBilling);

router.get("/billing-list/:id", getSingleBilling);
router.put("/billing-list/:id", updateBilling);
router.delete("/billing-list/:id", deleteBilling);

module.exports = router;
