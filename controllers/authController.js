const mongoose = require('mongoose');
const { User } = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register
module.exports.register = async (req, res) => {
  // Our register logic starts here
  try {
    // Get user input
    const {
      name,
      email,
      password,
      // profile
    } = req.body;

    // Validate user input
    if (!(email && password && name)) {
      res.status(400).send('All input is required');
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      res.status(409).send('User Already Exist. Please Login');
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    console.log('encryptedPassword', encryptedPassword);

    // Create user in our database
    const user = await User.create({
      name,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
      // profile,
    });

    // Create token
    const token = jwt.sign({ user_id: user._id, email }, process.env.TOKEN_KEY, {
      expiresIn: '2h',
    });
    // save user token
    user.token = token;

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
};

// Login
module.exports.login = async (req, res) => {
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send('All input is required');
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign({ user_id: user._id, email }, process.env.TOKEN_KEY, {
        expiresIn: '2h',
      });

      // save user token
      user.token = token;

      // user
      res.status(200).json(user);
    }
    res.status(400).send('Invalid Credentials');
  } catch (err) {
    console.log(err);
  }
};

//Werlcome
// module.exports.welcome = async (req, res) => {
//   res.status(200).send('Welcome 🙌 ');
// };