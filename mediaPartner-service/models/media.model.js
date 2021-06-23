const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const mediaPartnerSchema = new Schema(
  {
    Email: {
      type: String,
      required: true,
      unique: true,
      validate: [validator.isEmail, "Please Enter Valid Email"],
    },
    Password: {
      type: String,
      required: [true, "Please Enter give Password"],
      min: [6, "At Least 6 Characters Required, got {VALUE}"],
      match: [
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
        "Password must contain a uppercse, digit, lowercase and a special character",
      ],
    },
    BusinessName: {
      type: String,
      required: [true, "Give Your Business A Name"],
      unique: true,
      validate: [
        validator.isAlpha,
        "Business Name Can Only Have Alphabet Characters",
      ],
    },
    ConcernedPersonName: {
      type: String,
      required: [true, "Give Business Owner Name or Concerned Person Name"],
    },
    Role: {
      type: String,
      default: "advertising partners",
    },
    Media: {
      type: "ObjectId",
      ref: "media",
    },
  },
  { timestamps: true }
);

mediaPartnerSchema.pre("save", async function (next) {
  if (!this.isModified("Password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.Password = await bcrypt.hash(this.Password, salt);
  next();
});

mediaPartnerSchema.methods.passwordVerification = async function (Password) {
  return await bcrypt.compare(Password, this.Password);
};

module.exports = mediaPartnerSchema;
