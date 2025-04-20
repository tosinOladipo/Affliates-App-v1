import React from 'react'
import AppDownloadCampaign from './AppDownloadCampaign'
import ContactCampaign from './ContactCampaign'
import AwarenessUrlForm from './AwarenessUrlForm'

function FormTypeContainer({campaignObjective, campaignId}: {campaignObjective : string | null, campaignId : string}) {
 if(campaignObjective == "leads") return (
    <div className="grid md:grid-cols-2 gap-4">
        <AppDownloadCampaign campaignId={campaignId}/>
        <ContactCampaign campaignId={campaignId}/>
    </div>
 )
  return (
    <AwarenessUrlForm campaignId={campaignId}/>
  )
}

export default FormTypeContainer