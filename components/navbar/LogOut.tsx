'use-client'

import React from 'react'
import { Button } from '../ui/button'
import { SignOutButton } from '@clerk/nextjs';


import { IoLogOutOutline } from "react-icons/io5";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import Link from 'next/link';


function LogOut() {

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
        <SignOutButton>
        <Button size="icon" variant="outline" className='mx-auto p-8 rounded-full cursor-pointer' asChild>
          <Link href='/'>
          <IoLogOutOutline className="text-primary" />
          </Link>
          </Button>
        </SignOutButton>
        </TooltipTrigger>
        <TooltipContent>
          <p>Logout</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default LogOut