import React from 'react'
import FormContainer from '../form/FormContainer'
import { conversionCampaignURLAction } from "@/utils/actions";
import { SubmitButton } from '../form/Button';
import FormInput from '../form/FormInput';

function AppDownloadURLForm({campaignId} : {campaignId : string}) {
  return (
    <article className='w-full border-1 border-gray-300 flex flex-row gap-4 py-4 text-sm px-4 rounded'>
        <div className='flex flex-col gap-4'>
            <h3 className='text-lg font-medium mb-3'>Enter Destination URL</h3>
            <FormContainer action={conversionCampaignURLAction}>
                <input type='hidden' name='campaignId' value={campaignId}/>
                <div className="w-full md:w-[100%] my-2">
            <FormInput
              type="text"
              name="iosURL"
              label="IOS app store url"
            />
          </div>

          <div className="w-full md:w-[100%] my-2">
            <FormInput
              type="text"
              name="googlePlayURL"
              label="Google playstore url"
            />
          </div>
                <SubmitButton text="Select" className="mt-2" />
            </FormContainer>
        </div>
    </article>
  )
}

export default AppDownloadURLForm