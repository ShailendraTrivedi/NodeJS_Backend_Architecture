const dotenv = require("dotenv");
dotenv.config();
const { PORT, MongoDB_URL } = process.env;
module.exports = { PORT, MongoDB_URL };
