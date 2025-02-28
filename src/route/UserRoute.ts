import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { createUser, getUserByEmail } from "../database/user";
import { Request, Response } from "express";


dotenv.config();
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "your_super_secret_key";

// ✅ User Registration

// ✅ User Registration with Secure Response
router.post("/register", async (req: Request, res: Response): Promise<void> => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await getUserByEmail(email);
        if (existingUser) {
            res.status(400).json({ message: "User already exists" });
            return;
        }

        const user = await createUser(name, email, password);

        // Generate JWT Token
        const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });

        // Remove password before sending response
        const { password: _, ...userWithoutPassword } = user;

        res.status(201).json({ message: "User registered successfully", user: userWithoutPassword, token });
    } catch (error) {
        res.status(500).json({ message: "Error registering user" });
    }
});
// ✅ User Login
router.post("/login", async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
    try {
        const user = await getUserByEmail(email);
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(400).json({ message: "Invalid credentials" });
            return;
        }

        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: "Error logging in" });
    }
});





// ✅ Middleware for Authentication
function authenticateToken(req: any, res: any, next: any) {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Access denied" });

    jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
        if (err) return res.status(403).json({ message: "Invalid token" });
        req.user = user;
        next();
    });
}
// ✅ Get Current User (Protected)
router.get("/get", authenticateToken, async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await getUserByEmail((req as any).user.email);
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        res.json({ user });
    } catch (error) {
        res.status(500).json({ message: "Error fetching user" });
    }
});

export default router;
