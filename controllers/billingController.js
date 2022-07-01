const mongoose = require("mongoose");

const Billing = require("../schema/billingSchema");

// Post Billing

const insertBilling = async (req, res) => {
  console.log(req.body);
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
  // try {

  //   const { page = 1, limit = 2 } = req.query.body;
  //   console.log(req.query.body);
  //   getAllBillingData = await Billing.find()
  //     .limit(limit * 1)
  //     .skip((page - 1).limit);
  //   res
  //     .status(200)
  //     .json({ total: getAllBillingData.length, getAllBillingData });
  // }
  // const page = req.query.page;
  // const size = parseInt(req.query.size);
  try {
    const getAllBillingData = await Billing.find({});
    res.status(200).json(getAllBillingData);
    // const cursor = await Billing.find().sort({ _id: -1 });
    // const count = await cursor.count();
    // let result;
    // if (page) {
    //   result = await cursor.skip(page * size).limit(size);
    // } else {
    //   result = await cursor;
    // }
    // res.send({ result, count });
    // res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: "Failed Getting All Billing",
    });
  }
};

// Get Single Blog

const getSingleBilling = async (req, res) => {
  try {
    const getSingleBillingData = await Billing.findById(req.params.id);
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
    const id = req.params.id;

    const data = await Billing.findByIdAndUpdate(
      { _id: id },
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
    const deleteBilling = await Billing.findByIdAndDelete(req.params.id);
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
