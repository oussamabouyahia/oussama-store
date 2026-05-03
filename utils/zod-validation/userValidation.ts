import { z } from "zod";
export const emailValidationSchema = z.object({
  email: z.string().email("Invalid email"),
});
