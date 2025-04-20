import React from 'react'
import { cn } from '@/lib/utils';
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { GoMegaphone } from "react-icons/go";

function TotalCampaignCard() {
  return (
    <Card className='p-2 h-full shadow-none rounded-3xl'>
        <CardContent className='flex flex-col p-1 h-full'>
                <div className='h-[30%] md:h-[50%]'>
                    <Button size="icon" variant="ghost" className='bg-lime-300 rounded-full'><GoMegaphone className="text-black"/></Button>
                </div>
                <div className='h-[30%] md:h-[50%] flex flex-col md:flex-row gap-1 pt-7'>
                        <div className='text-3xl font-medium'>0</div>
                        <div className='text-xs p-0.5 leading-3.5'>Total<br/>Campaigns</div>
                </div>
        </CardContent>
    </Card>
  )
}

export default TotalCampaignCard