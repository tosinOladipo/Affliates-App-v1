import React from 'react'
import { Button } from '../ui/button'
import { MdArrowOutward } from "react-icons/md";
import Avatar from '../global/Avatar';

function LeadCardContent({leadAvatar, leadName, leadEmail, timeline} : {leadAvatar : any, leadName : string, leadEmail : string, timeline : string }) {
  return (
    <div className='flex justify-between bg-white p-4 rounded-4xl'>
        <div className='flex gap-3'>
            <Avatar avatarImg={leadAvatar}/>
            <div className='flex flex-col pt-2'>
                <div className='text-sm font-medium'>{leadName}</div>
                <div className='text-xs text-gray-400'>{leadEmail} <span>{timeline} ago</span></div>
            </div>
        </div>
        <Button size="icon" variant="ghost" className='bg-[#F0F2FF] rounded-full mt-2'><MdArrowOutward /></Button>
    </div>
  )
}

export default LeadCardContent