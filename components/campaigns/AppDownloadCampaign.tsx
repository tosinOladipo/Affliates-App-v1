import React from "react";
import FormContainer from "../form/FormContainer";
import { campaignFormTypeAction } from "@/utils/actions";
import { SubmitButton } from "../form/Button";

function AppDownloadCampaign({ campaignId }: { campaignId: string }) {
  return (
    <section>
      <header>
        <h2 className="text-2xl font-semibold mb-3">
          Pick your lead acquistion approach
        </h2>
        <p>Select any of form type to capture leads details.</p>
      </header>

      <article className="w-full border-1 border-gray-300 flex flex-row gap-4 py-4 text-sm px-4 rounded">
        <div className="w-[100%] md:w-[45%]  bg-amber-400 rounded"></div>
        <div className="flex flex-col">
          <h3 className="text-lg font-medium mb-3">
            App download lead conversiion
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            iusto harum, repellat aliquid reprehenderit nesciunt? Modi
            doloremque inventore
          </p>
          <FormContainer action={campaignFormTypeAction}>
            <input type="hidden" name="campaignId" value={campaignId} />
            <input type="hidden" name="campaignFormType" value="app-download" />
            <SubmitButton text="Select" className="mt-2" />
          </FormContainer>
        </div>
      </article>
    </section>
  );
}

export default AppDownloadCampaign;
