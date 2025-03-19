'use server';

import db from '@/utils/db'
import { campaignSchema } from './schemas';

const renderError = (error: unknown): { message: string } => {
    console.log(error);
    return {
      message: error instanceof Error ? error.message : 'An error occurred',
    };
  };


export const createCampaignAction = async (
    prevState: any,
    formData: FormData
  ): Promise<{ message: string }> => {
  
    try {
        const rawData = Object.fromEntries(formData);
        const validatedFields = campaignSchema.parse(rawData);
  
      await db.campaign.create({
        data: {
            ...validatedFields,
          image: '/images/img-1.jpg',
          video: '/videos/vid-1.jpg',
          clerkId: 'abc12345',
        },
      });
      return { message: 'product created' };
    } catch (error) {
      return renderError(error);
    }
  };