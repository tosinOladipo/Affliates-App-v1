import CampaignCard from '@/components/campaigns/CampaignCard'
import Container from '@/components/global/Container'
import SectionTitle from '@/components/global/SectionTitle'
import { campaigns } from '@/utils/campaigns'
import React from 'react'

function CampaignsPage() {
  return (
    <Container>
      <SectionTitle title="Campaigns"/>
      <div className='flex flex-col gap-4 md:flex-row md:gap-4'>
         
          {campaigns.map((campaign) => {
            return (
              <div className='basis-1/4' key={campaign.campaignBanner}>
                <CampaignCard 
                campaignBanner={campaign.campaignBanner}
                camapignTitle={campaign.campaignTitle}
                campaignDesc={campaign.campaignDesc}
                campaignLeads={campaign.campaignLeads}
                />
                 </div>
            )
        })}
         
      </div>
    </Container>
  )
}

export default CampaignsPage