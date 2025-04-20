import React from 'react'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import { HiOutlineUser } from "react-icons/hi2";
import { CampaignTypes } from '@/utils/types';

function CampaignCard({campaignBanner, campaignTitle, campaignDesc, campaignLeads} : {campaignBanner: any, campaignTitle: string, campaignDesc : string, campaignLeads: number}) {
  return (
    <Card className='w-full bg-white border-0 shadow-none rounded-4xl md:p-4'>
        <CardContent className='flex flex-col gap-3 px-2 py-2'>
            <Image
              src={campaignBanner} 
              alt='Campaign title' 
              width={100} 
              height={100} 
              sizes='(max-width:348px) 100vw, (max-width:348px) 50vw, 33vw'
                priority
              className='w-full bg-gray-600 rounded-2xl object-cover'
              />
            <h3 className='text-sm font-medium'>{campaignTitle}</h3>
            <p className='text-xs text-gray-400'>{campaignDesc}</p>
            <div className='flex gap-2'>
                <HiOutlineUser className="text-primary"/><span className='text-xs'>{campaignLeads}</span>
            </div>
        </CardContent>
    </Card>
  )
}

export default CampaignCard