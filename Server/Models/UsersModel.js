const db = require("../config/db.js");
const bcrypt = require("bcrypt");  

class UsersModel {
  static async getUserByEmail(email) {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM users WHERE email = ?",
        [email],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result.length > 0 ? result[0] : null);
          }
        }
      );
    });
  }
  static async comparePassword(storedPassword, inputPassword) {
    return bcrypt.compare(inputPassword, storedPassword); // Compare hashed passwords
  }

  static async getUserById(idUsers) {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM users WHERE idUsers = ?",
        [idUsers],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result.length > 0 ? result[0] : null);
          }
        }
      );
    });
  }
  
  static async login(email, password) {
    try {
      // Find the user by email
      const user = await database.query('SELECT * FROM users WHERE email = ?', [email]);

      if (user && user.password === password) { // Plaintext comparison
        return { success: true, users: user };
      } else {
        return { success: false, message: 'Invalid email or password' };
      }
    } catch (error) {
      console.error('Error during login:', error);
      return { success: false, message: 'Error occurred while logging in' };
    }
  }

}


module.exports = UsersModel;
