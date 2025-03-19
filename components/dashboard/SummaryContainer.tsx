import React from 'react'
import { Card, CardContent } from '../ui/card'
import Users from './Users'
import IconCard from './IconCard'
import { HiOutlineUsers } from "react-icons/hi2";
import { GoMegaphone } from "react-icons/go";
import { HiOutlineUser } from "react-icons/hi2";

function SummaryContainer() {
  return (
    <Card className='w-full bg-white h-[270px] border-0 shadow-none rounded-4xl'>
        <CardContent className='flex flex-col h-full'>
            <div className='h-[30%] md:h-[35%]'><Users/></div>

            <div className='h-[70%] md:h-[65%] grid grid-cols-3 gap-4'>
                <IconCard cardIcon={<HiOutlineUsers className="text-black"/>}  iconAmt={273} iconLabel={["Total", <br/>,  "Leads"]} className='bg-gray-300'/>
                <IconCard cardIcon={<GoMegaphone className="text-black"/>}  iconAmt={10} iconLabel={["Total", <br/>,  "Campaigns"]} className='bg-lime-300'/>
                <IconCard cardIcon={<HiOutlineUser className="text-black"/>}  iconAmt={87} iconLabel={["Total", <br/>,  "Affiliates"]} className='bg-blue-200'/>
            </div>
        </CardContent>
    </Card>
  )
}

export default SummaryContainer