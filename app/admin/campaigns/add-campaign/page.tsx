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
import React from "react";

function AddCampaignPage() {
  return (
    <Container>
      <SectionTitle title="Add Campaign" />
      <section className="flex flex-col gap-4 mt-4">
        <FormContainer action={createCampaignAction}>
          <div className="w-full my-4">
            <FormInput type="text" name="campaignTitle" label="Campaign Title" />
          </div>
          <div className="grid gap-4 md:grid-cols-2 my-4">
              <ImageInput/>
              <VideoInput/>
          </div>
          <div className="w-full">
          <TextAreaInput
            name='description'
            labelText='Campaign Caption or Description'
          />
          </div>

          <div className="w-full">
          <CheckboxInput name='featured' label='featured' />
          </div>

          <SubmitButton text='Create Campaign' className='mt-8' />

        </FormContainer>
      </section>
    </Container>
  );
}

export default AddCampaignPage;
