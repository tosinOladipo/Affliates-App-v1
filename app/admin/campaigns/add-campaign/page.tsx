import { SubmitButton } from "@/components/form/Button";
import CheckboxInput from "@/components/form/CheckboxInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInput from "@/components/form/ImageInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import VideoInput from "@/components/form/VideoInput";
import Container from "@/components/global/Container";
import SectionTitle from "@/components/global/SectionTitle";
import { createCampaignAction } from "@/utils/actions";
import { Label } from "@/components/ui/label";
import React from "react";

async function AddCampaignPage() {

  return (
    <Container>
      <SectionTitle title="Add Campaign" />

      <section className="flex flex-col gap-4 mt-4">
        <FormContainer action={createCampaignAction}>
          <div className="w-full md:w-[50%] my-4">
            <FormInput
              type="text"
              name="campaignTitle"
              label="Campaign Title"
            />
          </div>
          <section className="mt-6">
            <Label htmlFor="campaignObjective" className="capitalize mb-2">
              Campaign Objective
            </Label>

            <select name="campaignObjective" id="campaignObjective" className="w-full md:w-[50%] py-2 px-1 border-1 border-gray-300 rounded-[5px]">
              <option value="" className="py-2 border-gray-100">Select campaign objective</option>
              <option value="awareness" className="py-2 border-gray-100">Awareness</option>
              <option value="leads" className="py-2 border-gray-100">Leads</option>
            </select>
          </section>

          <div className="flex gap-4 flex-col w-full md:w-[50%] my-6">
            <ImageInput label="Image" />
            <VideoInput />
          </div>
          <div className="w-full md:w-[50%]">
            <TextAreaInput
              name="description"
              labelText="Campaign Caption or Description"
            />
          </div>

          <div className="w-full mt-6">
            <CheckboxInput name="featured" label="featured" />
          </div>

          <SubmitButton text="Create Campaign" className="mt-8" />
        </FormContainer>
      </section>
    </Container>
  );
}

export default AddCampaignPage;
