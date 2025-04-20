import { CompanyIdChannelType } from '@/utils/types'
import React from 'react'

function ChannelReport({companyId} : CompanyIdChannelType) {
  return (
    <div className='flex flex-row gap-8'>
        <div className='flex flex-col gap-1 text-sm'>
            <h3 className='text-center font-medium'>0</h3>
            <span className='text-center text-blue-800'>CLICKS</span>
        </div>
        <div className='flex flex-col gap-1 text-sm'>
        <h3 className='text-center font-medium'>0</h3>
        <span className='text-center text-green-700'>LEADS</span>
        </div>
    </div>
  )
}

export default ChannelReport