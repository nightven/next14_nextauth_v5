"use server";

import { RegisterSchema } from "@/schemas";
import * as z from "zod";

export const register = async (value: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(value);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  return { success: "Account created!" };
};