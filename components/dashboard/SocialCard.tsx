import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils';

function SocialCard(
    {className, socialIcon, socialLabel, clicksAmt, leadsAmt} : {className? : string, socialIcon : any, socialLabel : string, clicksAmt : number, leadsAmt: number}
) {
  return (
    <aside className={cn('flex flex-col h-[100%] w-full p-2', className)}>
        <div className='h-[41px] w-[41px] rounded-full bg-[#F7F9FB] mx-auto flex flex-col justify-center mb-3'>
            <Image src={socialIcon} alt={socialLabel} className='w-[14px] h-[14px] mx-auto'/>
        </div>
        <div className='flex gap-4 text-xs justify-center'>
            <div className='flex flex-col text-center'>
                <span className='font-medium'>{clicksAmt}</span>
                <span className='text-gray-500'>Clicks</span>
            </div>
            <div className='flex flex-col text-center'>
            <span className='font-medium'>{leadsAmt}</span>
            <span className='text-gray-500'>Leads</span>
            </div>
        </div>
    </aside>
  )
}

export default SocialCard