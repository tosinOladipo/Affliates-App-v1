import React from 'react'
import ConversionURLForm from './ConversionURLForm'

function LeadURLForm({formType, campaignId} : {formType : string, campaignId : string}) {

  if(formType === "app-download")  
  return (
    <div>App download form</div>
  )

  return (
        <ConversionURLForm campaignId={campaignId}/>
  )
}

export default LeadURLForm