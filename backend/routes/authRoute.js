require('dotenv').config();
const express = require('express');
const authRoute = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../schema/userSchema')

// Generate JWT Token
const generateToken = (user) => {
  const payload = {
    id: user._id,
    username: user.username,
  };
  return jwt.sign(payload, `${process.env.JWT_SECRET}`, { expiresIn: '72h' });
};

//route for user registration
authRoute.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ username });
    const existingEmail = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'Username already exists' });
    }
    if(existingEmail){
      return res.status(409).json({ error: 'email already taken' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      password: hashedPassword,
      email
    });

    await newUser.save();

    // Generate and send JWT token in response and store it in a cookie
    const token = generateToken(newUser);
    res.cookie('jwt', token, { httpOnly: true, maxAge: 259200000  }); // 3 days expiration
    res.json({ message: 'Registration successful!' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Sample route for user login
authRoute.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check if the provided password matches the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate and send JWT token in response and store it in a cookie
    const token = generateToken(user);
    res.cookie('jwt', token, { httpOnly: true, maxAge: 259200000  }); // 3 days expiration
    res.json({ message: 'Login successful!' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = authRoute;