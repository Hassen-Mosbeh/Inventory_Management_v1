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
      const user = await UserModel.getUserByEmail(email);
      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (!user) {
        return { success: false, message: "User not found" };
      }

      if (user.tag_actif === 0) {
        return { success: false, message: "User not activated" };
      }
      if (isPasswordMatch) {
        await UserModel.updateLastActivity(user.idUsers);
        return { success: true, user };
      } else {
        // Passwords do not match
        return { success: false, message: "Invalid password" };
      }
    } catch (error) {
      return { success: false, message: "Internal Server Error" };
    }
  }

}


module.exports = UsersModel;
