import CampaignCard from '@/components/campaigns/CampaignCard'
import Container from '@/components/global/Container'
import SectionTitle from '@/components/global/SectionTitle'
import { fetchFeaturedCampaigns } from '@/utils/actions'
import Link from 'next/link'
import React from 'react'

async function CampaignsPage() {
  const campaigns = await fetchFeaturedCampaigns()
  return (
    <Container>
      <SectionTitle title="Campaigns"/>
      <div className='flex flex-col gap-4 md:flex-row md:gap-4'>
         
          {campaigns.map((campaign) => {
            return (
              <div className='basis-1/4' key={campaign.id}>
                <Link href={`/admin/campaigns/${campaign.id}`}>
                <CampaignCard 
                campaignBanner={campaign.image}
                campaignTitle={campaign.campaignTitle}
                campaignDesc={campaign.description}
                campaignLeads={2}
                />
                </Link>
                 </div>
            )
        })}
         
      </div>
    </Container>
  )
}

export default CampaignsPage