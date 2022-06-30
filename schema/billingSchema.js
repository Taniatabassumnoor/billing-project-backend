const mongoose = require("mongoose");
const billingSchema = new mongoose.Schema({
  billingId: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  paidAmount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Billing", billingSchema);
