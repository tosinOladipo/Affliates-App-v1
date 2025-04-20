import React from 'react'
import { Card, CardContent } from '../ui/card'
import Users from './Users'
import TotalLeadsCard from './TotalLeadsCard';
import TotalCampaignCard from './TotalCampaignCard';
import TotalAffiliatesCard from './TotalAffiliatesCard';

function SummaryContainer() {
  return (
    <Card className='w-full bg-white h-[270px] border-0 shadow-none rounded-4xl'>
        <CardContent className='flex flex-col h-full'>
            <div className='h-[30%] md:h-[35%]'><Users/></div>

            <div className='h-[70%] md:h-[65%] grid grid-cols-3 gap-4'>
                <TotalLeadsCard/>
                <TotalCampaignCard/>
                <TotalAffiliatesCard/>
            </div>
        </CardContent>
    </Card>
  )
}

export default SummaryContainer