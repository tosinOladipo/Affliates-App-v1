import { z, ZodSchema } from 'zod';

export const campaignSchema = z.object({
  campaignTitle: z.string().min(4),
  campaignObjective: z.string().min(4),
  description: z.string(),
  featured: z.coerce.boolean(),
});



export const profileSchema = z.object({
  firstname: z.string().min(4),
  lastname: z.string(),
  email: z.string(),
  phonenumber: z.string(),
});


export const companySchema = z.object({
  companyName: z.string().min(4),
  companyEmail: z.string(),
  companyPhone: z.string(),
});