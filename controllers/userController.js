const bcrypt = require('bcrypt');

const User = require('../models/userModel');
const generateToken = require('../utils/genereateToken');

// express-async-handler

// @desc    Login user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = async (req, res) => {
    const { email, password } = req.body;

    // Da li postoji
    const user = await User.findOne({ email });
                // da li je dobra lozinka

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(401);
        res.json({
            message: 'Invalid email or password'
        })
    }
}

// @desc    Creates a new user
// @route   POST /api/users
// @access  Public
const registerUser = async (req, res) => {
   const { name, email, password } = req.body;
 
   try {
       // Da li vec postoji
       const userExists = await User.findOne({ email });

       if (userExists) {
        res.status(400);
        res.json({
            message: 'User already exists'
        })
        return;
       }


       // Kreiramo user-a
       const user = await User.create({
        name,
        email,
        password
       });

       if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
       } else {
            res.status(400);
            res.json({
                message: 'Invalid user data'
            })
       }
    
   } catch (error) {
        res.status(500);
        res.json({
            message: error.message
        })
   }
  };

  module.exports = { registerUser, authUser }