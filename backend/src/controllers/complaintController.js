const Complaint = require("../models/Complaint");

// POST /api/complaints
exports.createComplaint = async (req, res) => {
  try {
    const { name, age, issue } = req.body;

    if (!name || !age || !issue) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const complaint = await Complaint.create({
      name,
      age,
      issue,
    });

    res.status(201).json({
      success: true,
      message: "Complaint registered successfully",
      complaint,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET /api/complaints (optional, for admin later)
exports.getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      complaints,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
