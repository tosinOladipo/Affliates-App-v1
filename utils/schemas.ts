import { z, ZodSchema } from 'zod';

export const campaignSchema = z.object({
  campaignTitle: z.string().min(4),
  description: z.string(),
  featured: z.coerce.boolean(),
});