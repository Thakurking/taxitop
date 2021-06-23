const mediaPartnerDB = require("./mediaPartner.DB.Connection");

const MediaPartnerModel = mediaPartnerDB.model(
  "mediaPartner",
  require("../../mediaPartner-service/models/media.model")
);
module.exports = MediaPartnerModel;
