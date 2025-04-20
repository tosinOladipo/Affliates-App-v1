import ChannelCard from '@/components/channels/ChannelCard'
import Container from '@/components/global/Container'
import SectionTitle from '@/components/global/SectionTitle'
import { channels } from '@/utils/channels'
import { fetchCompanyId} from "@/utils/actions";
import React from 'react'

async function ChannelsPage() {

  const companyId = await fetchCompanyId()

  return (
    <Container>
      <SectionTitle title="Channels"/>
      <aside className='grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6'>
        {channels.map((channel) => {
          return (
            <div key={channel.channelName}>
                <ChannelCard channelName={channel.channelName} channelIcon={channel.channelIcon} companyId={companyId}/>
            </div>
          )
        })}
        
      </aside>
    </Container>
  )
}

export default ChannelsPage