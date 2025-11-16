import { z } from "zod";

export const signUpFormSchema = z
  .object({
    email: z
      .string()
      .min(6, "Email is required")
      .regex(/[^\s@]+@[^\s@]+\.[^\s@]+/, "Invalid email address")
      .email("Invalid email address"),
    preference: z
      .array(z.string())
      .min(1, "Please select at least one preference"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Za-z]/, "Password must contain at least one letter")
      .regex(/[0-9]/, "Password must contain at least one number"),

    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export const passwordRules =
  "Password must be at least 8 characters, contain at least one letter and one number.";

export const signInFormSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string(),
});

export const forgetPassword = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
});

export const resetPasswordFormSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Za-z]/, "Password must contain at least one letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export const verifyUser = z.object({
  pin: z.string().min(5, {
    message: "Verify code must be 5 digit.",
  }),
});


export type SignInFormValues = z.infer<typeof signInFormSchema>;
export type SignUpFormValues = z.infer<typeof signUpFormSchema>;
export type ForgetPasswordFormValues = z.infer<typeof forgetPassword>;
export type ResetPasswordFormValues = z.infer<typeof resetPasswordFormSchema>;
export type VerifyUserEmail = z.infer<typeof verifyUser>;
