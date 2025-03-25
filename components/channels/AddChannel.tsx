import { ChannelType } from '@/utils/types'
import { Input } from '../ui/input';
import React from 'react'
import { Button } from '../ui/button';
import { addSocialChannel } from '@/utils/actions';
import { fetchChannelByName } from '@/utils/actions'
import FormContainer from '../form/FormContainer';
import ChannelReport from './ChannelReport';
import { currentUser } from '@clerk/nextjs/server';

async function AddChannel({channelName, channelIcon} : ChannelType) {
const user = await currentUser();
const userId = user?.id;

const social = await fetchChannelByName(channelName, userId)
if (social) return <ChannelReport clerId={social.clerkId}/>  
  return (
    <FormContainer action={addSocialChannel}>
        <Input
        hidden
          name='socialName'
          defaultValue={channelName}
        />
        <Button type='submit' className='cursor-pointer'>Add</Button>
    </FormContainer>
  )
}

export default AddChannel