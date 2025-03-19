import React from 'react'
import { Card, CardContent } from '../ui/card'
import LeadCardContent from './LeadCardContent'
import avatar1 from '@/public/avatar-1.jpg'
import avatar2 from '@/public/avatar-2.jpg'
import avatar3 from '@/public/avatar-3.jpg'

function LeadCard() {
  return (
    <div className='w-full h-[270px] border-0 shadow-none rounded-4xl p-0'>
        <section className='flex flex-col gap-3 p-0'>
            <LeadCardContent leadAvatar={avatar1} leadName='David Rojers' leadEmail='david@mail.com' timeline='4hrs'/>
            <LeadCardContent leadAvatar={avatar2} leadName='David Rojers' leadEmail='david@mail.com' timeline='4hrs'/>
            <LeadCardContent leadAvatar={avatar3} leadName='David Rojers' leadEmail='david@mail.com' timeline='4hrs'/>
        </section>
    </div>
  )
}

export default LeadCard