import { CampaignFormObjType } from "@/utils/types";
import React from "react";
import LeadURLForm from "./LeadURLForm";

function LeadURLFormContainer({
  active,  
  campaignFormObjs,
}: {
    active : any
  campaignFormObjs: CampaignFormObjType[];
}) {


if(active) return (
    <div>All campaign are active and running</div>
)


  return (
    <>
      {campaignFormObjs.map((campaignFormObj) => {
        return (
          <div key={campaignFormObj.id}>
            <LeadURLForm formType={campaignFormObj.formType} campaignId={campaignFormObj.campaignId} />
          </div>
        );
      })}
    </>
  );
}

export default LeadURLFormContainer;
