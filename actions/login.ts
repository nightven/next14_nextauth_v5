"use server";

import { LoginSchema } from "@/schemas";
import * as z from "zod";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const login = async (value: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(value);

  if (!validatedFields.success) {
    return { error: "Invalid email or password!" };
  }
  // return { success: "Login successful!" };
  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
    return { success: "Login successful!" };
  } catch (error) {
    if (error instanceof AuthError) {
      if(error.type === "CredentialsSignin") {
        return { error: "Invalid credentials!" };
      }else {
        return { error: "Something went wrong!" };
      }
      // switch (error.type) {
      //   case "CredentialsSignin":
      //     return { error: "Invalid credentials!" };
      //   default:
      //     return { error: "Something went wrong!" };
      // }
    }
      throw error;
  }
};
