import User from "../models/User.js"; // ✅ must have .js extension
import bcrypt from "bcryptjs";

/* ================= REGISTER ================= */
export const registerUser = async (req, res) => {
  try {
    const {
      name,
      email,
      work,
      password,
      emergencyName,
      emergencyRelation,
      emergencyNumber,
      faceVerified,
    } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      work,
      password: hashedPassword,
      emergencyName,
      emergencyRelation,
      emergencyNumber,
      faceVerified,
    });

    res.status(201).json({
      message: "Registration successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ================= LOGIN ================= */
export const loginUser = async (req, res) => {
  try {
    const { email, password, faceVerified } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    if (!faceVerified)
      return res.status(400).json({ message: "Face verification required" });

    user.faceVerified = true;
    await user.save();

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
