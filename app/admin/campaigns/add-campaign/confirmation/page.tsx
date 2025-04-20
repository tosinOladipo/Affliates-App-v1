import FormTypeContainer from "@/components/campaigns/FormTypeContainer";
import LeadURLFormContainer from "@/components/campaigns/LeadURLFormContainer";
import { Card } from "@/components/ui/card";
import { fetchCreatedCampaign } from "@/utils/actions";
import { fetchCampaignFormType } from "@/utils/actions";
import React from "react";

async function Confirmation() {
  const campaign = await fetchCreatedCampaign();
  const { id, campaignTitle, campaignObjective, active, campaignFormObjs } = campaign;


  if (!active) return (
    <section className="flex flex-col gap-12">
      <Card className="py-12 text-center">
        <h1 className="text-4xl font-semibold">{campaignTitle} Created!</h1>
        <p>See below to complete camapaign process.</p>
      </Card>

      {!active ? (
        <aside className="flex flex-col gap-4">
          <FormTypeContainer campaignObjective={campaignObjective} campaignId={id}/>
        </aside>
      ) : (
        <div>All your campaigns are active and running</div>
      )}
    </section>
  )


  return (
    <LeadURLFormContainer active={active} campaignFormObjs={campaignFormObjs}/>
  )






 
  {campaignFormObjs.map((campaignFormObj) => {

    if(campaignFormObj.formType == "app-download") return (
      <div key={campaignFormObj.id}>This is  test</div>
    ) 


    else if(campaignFormObj.formType == "app-download") return (
      <div key={campaignFormObj.id}>This is  test</div>
    )

    return (
      <section className="flex flex-col gap-12">
      <Card className="py-12 text-center">
        <h1 className="text-4xl font-semibold">{campaignTitle} Created!</h1>
        <p>See below to complete camapaign process.</p>
      </Card>

      {!active ? (
        <aside className="flex flex-col gap-4">
          <FormTypeContainer campaignObjective={campaignObjective} campaignId={id}/>
        </aside>
      ) : (
        <div>All your campaigns are active and running</div>
      )}
    </section>
    )
  })}

}

export default Confirmation;

