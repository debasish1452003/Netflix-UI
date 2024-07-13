const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const colors = require("colors");
const path = require("path");
const userRoutes = require("./routes/UserRoute");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/netflix", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(colors.bgMagenta.white("DB Connected"));
  })
  .catch((error) => {
    console.error(colors.red(`Error connecting to MongoDB: ${error}`));
  });

app.use("/api/user", userRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "./netflix-ui/build")));

app.listen(5000, () => {
  console.log(colors.bgCyan.white("Server started on port 5000"));
});

// The "catchall" handler: for any request that doesn't match one above, send back index.html
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./netflix-ui/build/index.html"));
});
