"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import db from "@/utils/db";
import { campaignSchema, companySchema, profileSchema } from "./schemas";
import { redirect } from "next/navigation";
import { error } from "console";
import { revalidatePath } from "next/cache";

const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : "An error occurred",
  };
};

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("You must be logged in to access this route");
  }
  return user;
};

export const createProfileAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();

  const rawData = Object.fromEntries(formData);
  const validatedFields = profileSchema.parse(rawData);

  const userProfile = await db.profile.create({
    data: {
      ...validatedFields,
      clerkId: user.id,
    },
  });
  if (userProfile) redirect("/company");
  return renderError(error);
};

export const fetchProfileDetails = async () => {
  const user = await getAuthUser();
  console.log(user.id);
  const getProfile = await db.profile.findUnique({
    where: {
      clerkId: user.id,
    },
  });
  if (!getProfile) return null;
  return getProfile;
};

export const userInfo = async () => {
  const profile = await fetchProfileDetails();
  if (profile) return profile;
  return redirect("/");
};

export const accountCreatorRole = async (email: any, companyId: string) => {
  const user = await getAuthUser();
 const role = await db.role.create({
    data: {
      email: email,
      userRole: "admin",
      companyId: companyId,
      clerkId: user.id,
    },
  });
  if(!role) {<div>Unable to create role</div>};
  return role;
};

export const createCompanyAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const rawData = Object.fromEntries(formData);
  const validatedFields = companySchema.parse(rawData);

  const company = await db.company.create({
    data: {
      ...validatedFields,
      companyLogo: "/images/img-1.jpg",
    },
  });

  if (company) {
    const profile = await fetchProfileDetails();
    await accountCreatorRole(profile?.email, company.id);
  }
  return redirect("/admin/dashboard");
};

export const userRole = async () => {
  const user = await getAuthUser();
  const role = await db.role.findUnique({
    where: {
      clerkId: user.id,
    },
  });
  if(!role) throw new Error("You must be logged in to access this route");
  return role;
};

export const fetchCompanyId = async () => {
  const company = await userRole();
  if (!company) throw new Error("You must be logged in to access this route")
    return company.companyId;
   ;
};


export const createCampaignAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();
  const companyId = await fetchCompanyId();

    const rawData = Object.fromEntries(formData);
    const validatedFields = campaignSchema.parse(rawData);

   const campaign = await db.campaign.create({
      data: {
        ...validatedFields,
        image: "/images/img-1.jpg",
        video: "/videos/vid-1.mp4",
        clerkid: user.id,
        companyId: companyId,
        active: false,
      },
    });
    if(!campaign) throw new Error("You must be logged in to access this route");
    return redirect("/admin/campaigns/add-campaign/confirmation")
  
};


export const setCampaignActive = async (campaignId: string) => {
    console.log(campaignId)
    const activate = await db.campaign.update({
      where: {
        id: campaignId
      },
      data: {
        active: true
      }
    })
    if(!activate) {<div>Unable to activate camapaign</div>}
    revalidatePath("/admin/campaigns/add-campaign/confirmation")
}


export const campaignFormTypeAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {

  const campaignFormType = formData.get("campaignFormType") as string;
  const campaignId = formData.get("campaignId") as string;

   const campaign = await db.campaignForm.create({
      data: {
        formType: campaignFormType,
        campaignId: campaignId,
      },
    });
    if (campaign) await setCampaignActive(campaignId)
    throw new Error("You must be logged in to access this route")
};
 

export const fetchCampaignFormType = async (campaignid: string) => {

  const camFormType = await db.campaignForm.findFirst({
    where: {
      campaignId: campaignid,
    }
  })
  if(!camFormType) throw new Error("You must be logged in to access this route")
    return camFormType
}



export const awarenessCampaignURLAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {

  const websiteURL = formData.get("websiteURL") as string;
  const campaignId = formData.get("campaignId") as string;

   const campaign = await db.campaignURL.create({
      data: {
        websiteURL: websiteURL,
        campaignId: campaignId,
      },
    });
    if (campaign) {
      await setCampaignActive(campaign.campaignId)
      revalidatePath("/admin/campaigns/add-campaign/confirmation")
    }
    throw new Error("You must be logged in to access this route")
  
};


export const conversionCampaignURLAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {

  const websiteURL = formData.get("websiteURL") as string;
  const campaignId = formData.get("campaignId") as string;
  const googlePlayURL = formData.get("googlePlayURL") as string;
  const iosURL = formData.get("iosURL") as string;

   const campaign = await db.campaignURL.create({
      data: {
        websiteURL: websiteURL,
        campaignId: campaignId,
        iosURL: iosURL,
        googlePlayURL: googlePlayURL,
      },
    });
    if (campaign) {
      revalidatePath("/admin/campaigns/add-campaign/confirmation")
    }
    throw new Error("You must be logged in to access this route")
  
};

export const fetchFeaturedCampaigns = async () => {
  const companyId = await fetchCompanyId();
  const featuredCampaigns = await db.campaign.findMany({
    where: {
      featured: true,
      companyId: companyId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return featuredCampaigns;
};

export const fetchCreatedCampaign = async () => {
  const user = await getAuthUser()
  const createdCampaign = await db.campaign.findFirst({
    where: {
      clerkid: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      campaignFormObjs: true
    }
  }) 
  if(!createdCampaign) redirect("/admin/campaigns/add-campaign");
  return createdCampaign
};

export const fetchSingleCampaign = async (campaignId: string) => {
  const singleCampaign = await db.campaign.findUnique({
    where: {
      id: campaignId,
    },
  });
  if (!singleCampaign) redirect("/admin/campaigns");
  return singleCampaign;
};

export const fetchChannelByName = async (
  channelName: string,
  companyId: any
) => {
  const channelType = await db.social.findFirst({
    where: {
      channelName: channelName,
      companyId: companyId,
    },
  });
  return channelType;
};

export const addSocialChannel = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();

  const channelName = formData.get("socialName") as string;

  if (channelName === "Facebook") {
    await db.social.create({
      data: {
        channelName,
        companyId: user.id,
      },
    });
    redirect("/admin/channels");
    return { message: "Facebook Added" };
  } else if (channelName === "Instagram") {
    await db.social.create({
      data: {
        channelName,
        companyId: user.id,
      },
    });
    return { message: "Instagram Added" };
  } else {
    await db.social.create({
      data: {
        channelName,
        companyId: user.id,
      },
    });
    return { message: "Twitter Added" };
  }
};
