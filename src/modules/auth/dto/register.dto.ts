import z from "zod";

export const authUserSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export type AuthUserDto = z.infer<typeof authUserSchema>;
