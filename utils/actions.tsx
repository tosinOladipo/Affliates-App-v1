'use server';

export const createCampaignAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  return { message: 'Campaign created' };
};