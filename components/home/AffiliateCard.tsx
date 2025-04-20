import React from 'react'
import { Button } from '../ui/button'
import { FaArrowRight } from "react-icons/fa6";

function AffiliateCard() {
  return (
    <div className='p-4 border-1 border-gray-300 rounded-2xl w-[320px] flex gap-6 content-center justify-between'>
    <span className='font-medium text-base content-center'>I'm a Affiliate</span>
    <Button className='rounded-4xl py-6 cursor-pointer'>Click here  <FaArrowRight /></Button>
</div>
  )
}

export default AffiliateCard