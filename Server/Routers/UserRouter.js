const express = require("express");
const UserRouter = express.Router();
const UserController = require("../Controller/UserController");


UserRouter.post('/Api/v1/login', UserController.login);
UserRouter.get("/Api/v1/getUserByEmail", UserController.getUserByEmail);
UserRouter.get("/Api/v1/getUserById",UserController.getUserById);
UserRouter.get("/Api//v1/checkToken", UserController.checkToken);
module.exports = UserRouter;
