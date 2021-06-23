const MediaPartnerModel = require("../../../Database/MediaPartner.Service.DB/mediaPartnerSchema")

exports.mediaPartnerRegister = async (req, res) => {
  console.log("hii")
  const { Email, Password, BusinessName, ConcernedPersonName } = req.body;
  const mediaPartner = new MediaPartnerModel({
    Email: Email,
    Password: Password,
    BusinessName: BusinessName,
    ConcernedPersonName: ConcernedPersonName,
  });
  const saveMediaPartner = mediaPartner.save();
  console.log(saveMediaPartner);
};
