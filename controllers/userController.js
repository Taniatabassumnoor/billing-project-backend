const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../schema/userSchema");
const jwt = require("jsonwebtoken");
// signUp

const signUpUser = async (req, res) => {
  console.log(req.body);
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const registeredUser = await newUser.save();
    console.log(registeredUser);
    res.status(200).json(registeredUser);
  } catch (error) {
    res.status(500).json({
      message: "Failed signup",
    });
  }
};

const logInUser = async (req, res) => {
  try {
    const user = await User.find({
      username: req.body.username,
    });
    if (user && user.length > 0) {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user[0].password
      );
      if (isValidPassword) {
        //  generate token
        const token = jwt.sign(
          {
            username: user[0].username,
            userId: user[0]._id,
          },
          process.env.JWT_SECRET,
          { expiresIn: "30d" }
        );
        res.status(200).json({
          access_token: token,
          message: "login successful",
        });
      } else {
        res.status(401).json({ error: "Authentication failed" });
      }
    } else {
      res.status(401).json({ error: "Authentication failed" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Failed signup",
    });
  }
};

module.exports = { signUpUser, logInUser };
