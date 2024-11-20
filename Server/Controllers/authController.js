const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");

class AuthController {
    async register(req, res) {
        try {
            const { firstName, lastName, email, password } = req.body;
            if (!firstName) return res.status(400).json({ message: "First name is required" });
            if (!lastName) return res.status(400).json({ message: "Last name is required" });
            if (!email) return res.status(400).json({ email: "Email is required" });
            if (!password) return res.status(400).json({ password: "Password is required" });

            const exist = await User.findOne({ email });
            if (exist) return res.status(400).json({ message: "Email already registered" });
            const hashedPassword = await bcrypt.hash(password, 12);
            const newUser = await new User({ firstName, lastName, email, password: hashedPassword }).save();
            return res.status(201).json({ newUser, message: 'User registered successfully' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            if (!email) return res.status(400).json({ email: "Email is required" });
            if (!password) return res.status(400).json({ password: "Password is required" });
            const user = await User.findOne({ email });
            if (!user) return res.status(404).json({ message: "User not found" });
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

            const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });
            const payload = {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role,
                token,
            }
            return res.status(200).json({ payload, message: "Login successful" });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }

    async validateToken(req, res) {
        try {
            return res.status(200).json({ role: req.user.role });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = new AuthController();