export type CampaignTypes = {
  campaignBanner: string;
  campaignTitle: string;
  campaignDesc: string;
  campaignLeads: number;
};


export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;


export type ChannelType = {
  channelName: string;
  channelIcon: string;
  userId : string 
}


export type UserChannelIdType = {
  clerId: string
}