const express = require("express");

const advertiserRouter = express.Router();

const advertiserLoginController = require("../../controller/advertiser.auth.Controller/advertiser.login.Controller");
const advertiserRegisterController = require("../../controller/advertiser.auth.Controller/advertiser.register.Controller");

advertiserRouter.post(
  "advertiser-login",
  advertiserLoginController.advertiserLogin
);

advertiserRouter.post(
  "advertiser-register",
  advertiserRegisterController.advertiserRegister
);

module.exports = advertiserRouter;
