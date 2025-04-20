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
  companyId: string;
};

export type Company = {
  id: String;
  companyName: String;
  companyEmail: String;
  companyPhone: String;
  companyLogo: String;
  affiliateList: Profile[];
  createdAt: string;
};



export type CampaignFormObjType = {
  id: any;
  campaignId: any;
  formType: any;
};

export type Profile = {
  id: String;
  firstname: String;
  lastname: String;
  email: String;
  phonenumber: String;
  clerkId: String;
  companyList: Company[];
  createdAt: string;
};

export type CompanyIdChannelType = {
  companyId: string;
};
