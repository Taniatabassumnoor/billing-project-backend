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
router.get("/billing-list/:billingId", getSingleBilling);
router.put("/billing-list/:billingId", updateBilling);
router.delete("/billing-list/:billingId", deleteBilling);

module.exports = router;
