const express = require("express");
const router = express.Router();
const {
  createComplaint,
  getAllComplaints,
} = require("../controllers/complaintController");

// create complaint
router.post("/", createComplaint);

// get all complaints (admin use later)
router.get("/", getAllComplaints);

module.exports = router;
