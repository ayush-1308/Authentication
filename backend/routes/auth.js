const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../database/user');

const router = express.Router();

router.post("/sign-up", async (req, res) => {
  const { username, email, password } = req.body;
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
      const hashedPassword = await bcryptjs.hashSync(password, 10);
      await User.create({ username, email, password: hashedPassword });
      res.status(201).json({ message: 'User created successfully' });

    } catch (error) {
      res.json({
        message: "An error occurred while creating the user. Please try again."
      })
    }
  });
  router.post('/sign-in', async (req, res) => {
      const { email, password } = req.body;
      try{
        const user = await User.findOne({email});
        if(!user){
          return res.status(400).json({message: 'Invalid email or password'});
        }
        const passwordMatch = await bcryptjs.compareSync(password, user.password);
        if(!passwordMatch){
          return res.status(400).json({message: 'Invalid email or password'});
        }
        const token = jwt.sign({email: user.email}, 'secretkey');
        console.log(token);
        res.json({message: 'Sign in successful', token: token});
      }
      catch(error){
        res.json({
          message: "An error occurred while signing in. Please try again."
        })
      }
    });

    const verifyToken = (req, res, next) => {
      const authHeader = req.headers.authorization;
      const token = authHeader && authHeader.split(' ')[1];

      if(token == null){
        res.status(401).json({message: 'Unauthorized'});
      }
      jwt.verify(token, SECRET, (err, user) => {
        if(err){
          return res.status(403).json({message: 'Invalid token'});
        }
        req.user = user;
        next();
      })
    }  

    router.get("/homepage", verifyToken, (req, res) => {
      res.json({message: 'Welcome to the homepage'});
    });

    module.exports = router;