const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const httpErrors = require("http-errors");
const cors = require("cors");
const figlet = require("figlet");
const boxen = require("boxen");

app.use(cors())

app.use(helmet())
app.use(cookieParser())
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mediaPartnerRouter = require("./routes/auth-routes/media.auth.routes");
app.use("/mediaPartner", mediaPartnerRouter);

const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
    console.log(`Media Service Server Crashed On PORT ${PORT}`);
})