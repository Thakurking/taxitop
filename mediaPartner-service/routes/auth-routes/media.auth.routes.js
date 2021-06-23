const express = require("express");

const mediaRouter = express.Router();

const mediaRegisterController = require("../../controller/media.auth.controller/media.register.Controller");
const mediaLoginController = require("../../controller/media.auth.controller/media.login.Controller");

mediaRouter.post(
  "media-register",
  mediaRegisterController.mediaPartnerRegister
);
mediaRouter.post("media-login", mediaLoginController.mediaPartnerLogin);

module.exports = mediaRouter;
