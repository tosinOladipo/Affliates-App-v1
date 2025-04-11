import React from 'react'
import { currentUser } from '@clerk/nextjs/server';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { addSocialChannel } from '@/utils/actions';
import { fetchChannelByName } from '@/utils/actions'
import FormContainer from '../form/FormContainer';

async function SocialReport({ socialLabel }: { socialLabel: string }) {

    const user = await currentUser();
    const userId = user?.id;

    const social = await fetchChannelByName(socialLabel, userId)
    if (social) return
    {
        <div className='flex gap-4 text-xs justify-center'>
            
            <div className='flex flex-col text-center'>
                <span className='font-medium'>0</span>
                <span className='text-gray-500'>Clicks</span>
            </div>
            <div className='flex flex-col text-center'>
                <span className='font-medium'>0</span>
                <span className='text-gray-500'>Leads</span>
            </div>
        </div>
    }
    return (
        <FormContainer action={addSocialChannel} className='flex justify-center'>
            <Input
            hidden
              name='socialName'
              defaultValue={socialLabel}
            />
            <Button type='submit' className='cursor-pointer text-xs h-[25px] w-[50px]'>Add</Button>
        </FormContainer>
      )

}

export default SocialReport