
import { ChannelType } from '@/utils/types'
import Image from 'next/image'
import React from 'react'
import AddChannel from './AddChannel'

function ChannelCard({channelName, channelIcon}: ChannelType) {  
    
  return (
    <div className='bg-white rounded-4xl flex flex-col py-6'>
        <div className='w-[70px] h-[70px] bg-[#F7F9FB] rounded-full mx-auto'>
            <Image src={channelIcon} alt={channelName} width={35} height={35} className='mx-auto mt-4.5'/>
        </div>
        <h2 className='text-center font-medium py-4'>{channelName}</h2>
        <div className='mx-auto'>
            <AddChannel channelName={channelName} channelIcon={channelIcon}/>
        </div>
    </div>
  )
}

export default ChannelCard