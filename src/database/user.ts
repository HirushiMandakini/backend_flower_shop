import { PrismaClient } from "../../node_modules/.prisma/client/index";
import bcrypt from "bcryptjs";
const prisma = new PrismaClient();

export async function createUser(name: string, email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });
        return user;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
}

export async function getUserByEmail(email: string) {
    try {
        return await prisma.user.findUnique({
            where: { email },
        });
    } catch (error) {
        console.error("Error getting user by email:", error);
        throw error;
    }
}

export async function getUserById(id: string) {
    try {
        return await prisma.user.findUnique({
            where: { id },
        });
    } catch (error) {
        console.error("Error getting user by ID:", error);
        throw error;
    }
}
