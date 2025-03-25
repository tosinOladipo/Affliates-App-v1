'use server';

import { auth, currentUser } from '@clerk/nextjs/server';
import db from '@/utils/db'
import { campaignSchema } from './schemas';
import { redirect } from 'next/navigation';

const renderError = (error: unknown): { message: string } => {
    console.log(error);
    return {
      message: error instanceof Error ? error.message : 'An error occurred',
    };
  };

  const getAuthUser = async () => {
    const user = await currentUser();
    if (!user) {
      throw new Error('You must be logged in to access this route');
    }
    return user;
  };


export const createCampaignAction = async (
    prevState: any,
    formData: FormData
  ): Promise<{ message: string }> => {

    const user = await getAuthUser();
  
    try {
        const rawData = Object.fromEntries(formData);
        const validatedFields = campaignSchema.parse(rawData);
  
      await db.campaign.create({
        data: {
            ...validatedFields,
          image: '/images/img-1.jpg',
          video: '/videos/vid-1.mp4',
          clerkId: user.id,
        },
      });
      return { message: 'Campaign created' };
    } catch (error) {
      return renderError(error);
    }
  };


  export const fetchFeaturedCampaigns = async () => {
    const user = await getAuthUser();
    const featuredCampaigns = await db.campaign.findMany({
        where: {
            featured: true,
            clerkId: user.id
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
    return featuredCampaigns;
  }

  export const fetchSingleCampaign = async (campaignId : string) => {
    const singleCampaign = await db.campaign.findUnique({
        where: {
            id: campaignId
        },
    });
    if(!singleCampaign) redirect('/admin/campaigns')
     return singleCampaign;   
  }


  export const fetchChannelByName = async (channelName : string, userId : any) => {
    console.log(channelName)
    const channelType = await db.social.findFirst({
        where: {
            channelName: channelName,
            clerkId: userId
        },
    });
     return channelType;   
  }


  export const addSocialChannel = async (
    prevState : any,
    formData: FormData
) : Promise<{message: string}> => {
    const user = await getAuthUser();

        const channelName = formData.get('socialName') as string;
        
        if (channelName === 'Facebook') {
            await db.social.create({
                data: {
                  channelName,
                  clerkId: user.id
                }
            });
            redirect('/admin/channels')
            return { message: 'Facebook Added' } 
        }

        else if (channelName === 'Instagram'){
            await db.social.create({
                data: {
                    channelName,
                    clerkId: user.id
                }
            });
            return { message: 'Instagram Added' }
        }

        else {
            await db.social.create({
                data: {
                    channelName,
                    clerkId: user.id
                }
            });
            return { message: 'Twitter Added' }
        }
  }