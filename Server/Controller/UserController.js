const UserModel = require("../Models/UsersModel.js");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

class UserController {
  static async getUserByEmail(req, res) {
    try {
      const result = await UserModel.getUserByEmail(req.body.email);

      if (result) {
        res.status(200).json(result);
      } else {
        res.status(400).send('User not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
  static async getUserById(req, res) {
    try {
      const result = await UserModel.getUserById(req.params.idUsers);

      if (result) {
        res.status(200).json(result);
      } else {
        res.status(400).send("User not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
  static async checkToken(req, res) {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).send("Unauthorized: No token provided");
    } else {
      jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
        if (err) {
          return res.status(401).send("Unauthorized: Invalid token");
        } else {
          const user = await UserModel.getUserById(decoded.userId);
          if (!user) {
            res.status(401).send("Unauthorized: Invalid token");
            return;
          }
          res.status(200).json(user);
        }
      });
    }
  }
  static async login(req, res) {
    try {
      const { email, password } = req.body;

      // Find user by email
      const user = await UserModel.getUserByEmail(email);
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      // Compare passwords
      const isMatch = await UserModel.comparePassword(user.password, password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      // Generate JWT token
      const token = jwt.sign(
        { idUsers: user.idUsers, UserName: user.UserName, Role: user.Role },
        process.env.JWT_SECRET_KEY,
        { expiresIn: '120m' }
      );

      res.cookie('jwt', token, { maxAge: 120 * 60 * 1000, httpOnly: true, secure: false, sameSite: 'Strict' });
      res.status(200).json({
        Role: user.Role,
        UserName: user.UserName,
        idUsers: user.idUsers,
      });
    } catch (error) {
      console.error('Error in login:', error);
      res.status(500).send('Internal Server Error');
    }
  }
}

module.exports = UserController;
