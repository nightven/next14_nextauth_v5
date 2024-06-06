"use server"
import * as z from "zod";
import bcrypt from "bcrypt"
import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail, sendVerificationEmailNodemailer } from "@/lib/mail";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);
    if (!validatedFields.success) {
        return { error: "Invalid fields!" };    
    }

    const { email, password, name } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
        return { error: "Email already in use!" };
    }

    await db.user.create({
        data: {
            name,
            email,
            password:hashedPassword,
        },
    })

    const verificationToken = await generateVerificationToken(email);
    //! resend
    // await sendVerificationEmail(
    //   verificationToken.email,
    //   verificationToken.token
    // );
    // ! nodemailer
    await sendVerificationEmailNodemailer(
      verificationToken.email,
      verificationToken.token
    );

    return { success: "Conformation email sent!" };
}