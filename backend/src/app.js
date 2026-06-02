const express = require("express");
const cors = require("cors");

const complaintRoutes = require("./routes/complaintRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/complaints", complaintRoutes);
app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
  res.send("API running 🚀");
});

module.exports = app;
