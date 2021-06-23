const advertismentPartnerDB = require("./advertiser.DB.Connection");

const advertismentPartnerModel = advertismentPartnerDB.model(
  "advertismentPartner",
  require("../../adPartner-service/models/advertiser.model")
);

module.exports = advertismentPartnerModel;