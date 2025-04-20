import CampaignCard from "@/components/campaigns/CampaignCard";
import LeadCard from "@/components/dashboard/LeadCard";
import SocialContainer from "@/components/dashboard/SocialContainer";
import SummaryContainer from "@/components/dashboard/SummaryContainer";
import Container from "@/components/global/Container";
import SectionTitle from "@/components/global/SectionTitle";
import affliateMan from "@/public/affiliate-man.png";
import Image from "next/image";
import React from "react";

import campaign1 from '@/public/campaign-1.jpg'
import campaign2 from '@/public/campaign-2.jpg'
import campaignAd from '@/public/campaign-ad.png'
import Link from "next/link";
import { userRole } from "@/utils/actions";
import Cookies from 'js-cookie'


Cookies.set('company', 'tosin')


async function DashboardPage() {

  const role = await userRole()
 
  return (
    <Container>
      <SectionTitle title="Dashboard" />

      {role? 

<article className="flex flex-col md:flex-row gap-4">
<div className="basis-3/4 flex gap-4 flex-col md:flex-row">
  <div className="basis-1/2">
    <SummaryContainer />
  </div>
  <div className="basis-1/2">
    <SocialContainer />
  </div>
</div>
<div className="basis-1/4">
  <LeadCard />
</div>
</article> :

<article>Affiliate dashboard</article>}

      
    {role?

<article className="flex flex-col md:flex-row mt-4 pb-8 gap-4">
<div className="basis-3/4 flex flex-col md:flex-row gap-4">
  <div className="basis-1/2 bg-primary rounded-4xl">
    <Image 
    src={affliateMan} 
    alt="Affliate" 
    width={100} 
      height={100} 
      sizes='(max-width:574px) 100vw, (max-width:574px) 50vw, 33vw'
        priority
    className="w-full h-full object-cover" />
  </div>
  <div className="basis-1/2 flex flex-col md:flex-row gap-4">
    <div className="basis-1/2">
      <CampaignCard campaignBanner={campaign1} campaignTitle="Sample 1" campaignDesc="Your computer may be offline or the server may be experiencing problems" campaignLeads={23}/>
    </div>
    <div className="basis-1/2 bg-primary rounded-4xl">
        <Link href='/admin/campaigns/add-campaign'>
        <Image 
        src={campaignAd} 
        alt="Campaign Advertisement" 
        className="w-full"/>
        </Link>
    </div>
  </div>
</div>
<div className="basis-1/4">
  <CampaignCard campaignBanner={campaign2} campaignTitle="Sample 1" campaignDesc="Your computer may be offline or the server may be experiencing problems" campaignLeads={23}/>
</div>
</article> :

<article>Affiliate</article>
    
  }  

      
    </Container>
  );
}

export default DashboardPage;
