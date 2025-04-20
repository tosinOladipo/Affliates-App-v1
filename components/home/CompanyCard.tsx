import React from 'react'
import { Button } from '../ui/button'
import { FaArrowRight } from "react-icons/fa6";
import Link from 'next/link';

function CompanyCard() {
  return (
    <div className='p-4 border-1 border-gray-300 rounded-2xl w-[320px] flex gap-6 content-center justify-between'>
        <span className='font-medium text-base content-center'>I own a company</span>
        <Button className='rounded-4xl py-6 cursor-pointer'><Link href="/profile">Click here </Link><FaArrowRight /></Button>
    </div>
  )
}

export default CompanyCard