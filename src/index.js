const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const middleware = require("./middlewares");
const { PORT, MongoDB_URL } = require("./constant");

const app = express();
app.use(middleware);
app.get("/", (req, res) => {
  return res.send("Backend is Available.");
});
app.use("/api", routes);

// * ------------------------------ Database and Server Connection ------------------------------

mongoose
  .connect(MongoDB_URL)
  .then((result) => {
    console.log("MongoDB is connected successfully");
  })
  .catch((err) => {
    console.log(`🚀 ~ file: index.js:23 ~ mongoose.connect ~ err:\n =>`, err);
  });

try {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${"http://localhost:" + PORT}`);
  });
} catch (error) {
  console.log(`🚀 ~ file: index.js:31 ~ error:\n =>`, error);
}
