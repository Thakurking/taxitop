const express = require("express");

const mediaPartnerRouter = express.Router();

const mediaPartnerLoginController = require("../../controller/mediaPartner.auth.controller/mediaPartner.login.controller");

mediaPartnerRouter.get(
  "mediaPartnerLogin",
  mediaPartnerLoginController.mediaPartnerLogin
);

module.exports = mediaPartnerRouter;