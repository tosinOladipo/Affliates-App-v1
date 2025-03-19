import React from 'react'
import { Button } from '../ui/button'

import { IoLogOutOutline } from "react-icons/io5";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"


function LogOut() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
        <Button size="icon" variant="outline" className='mx-auto p-8 rounded-full cursor-pointer'><IoLogOutOutline className="text-primary" /></Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Logout</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default LogOut