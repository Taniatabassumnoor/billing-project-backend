const mongoose = require("mongoose");

const Billing = require("../schema/billingSchema");

// Post Billing

const insertBilling = async (req, res) => {
  console.log(req.body)
  try {
    const newBilling = new Billing(req.body);
    const savedBilling = await newBilling.save();
    res.status(200).json(savedBilling);
  } catch (error) {
    res.status(500).json({
      message: "Failed Billing Insert",
    });
  }
};

// Get All Billing

const getAllBilling = async (req, res) => {
  try {
    const getAllBillingData = await Billing.find({});
    res.status(200).json(getAllBillingData);
  } catch (error) {
    res.status(500).json({
      message: "Failed Getting All Billing",
    });
  }
};

// Get Single Blog

const getSingleBilling = async (req, res) => {
  try {
    const getSingleBillingData = await Billing.findById(req.params.billingId);
    res.status(200).json(getSingleBillingData);
  } catch (error) {
    res.status(500).json({
      message: "Failed Getting Single Billing",
    });
  }
};

// Update Pricing
const updateBilling = async (req, res) => {
  try {
    const billingId = req.params.billingId;

    const data = await Billing.findByIdAndUpdate(
      { _id: billingId },
      {
        $set: req.body,
      },
      { new: true }
    );
    console.log(data);
    res.status(200).json({
      success: true,
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Something error, can not update billing",
    });
  }
};

// Delete Billing
const deleteBilling = async (req, res) => {
  try {
    const deleteBilling = await Billing.findByIdAndDelete(req.params.billingId);
    res.status(200).json(deleteBilling);
  } catch (error) {
    res.status(500).json({
      message: "Failed Deleting Billing",
    });
  }
};

module.exports = {
  insertBilling,
  getAllBilling,
  deleteBilling,
  updateBilling,
  getSingleBilling,
};
