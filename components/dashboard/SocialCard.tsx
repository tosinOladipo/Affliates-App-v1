import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils';
import SocialReport from './SocialReport';


function SocialCard(
    {className, socialIcon, socialLabel} : {className? : string, socialIcon : any, socialLabel : string}
) {

  return (
    <aside className={cn('flex flex-col h-[100%] w-full p-2', className)}>
        <div className='h-[41px] w-[41px] rounded-full bg-[#F7F9FB] mx-auto flex flex-col justify-center mb-3'>
            <Image src={socialIcon} alt={socialLabel} className='w-[14px] h-[14px] mx-auto'/>
        </div>

        <SocialReport socialLabel={socialLabel}/>
    </aside>
  )
}

export default SocialCard