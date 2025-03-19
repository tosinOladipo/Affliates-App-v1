import React from 'react'
import { HiOutlineUser } from "react-icons/hi2";
import { Button } from '../ui/button';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

function Partners() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
        <Button size="icon" variant="outline" className='mx-auto p-8 rounded-full cursor-pointer'><HiOutlineUser className="text-primary"/></Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Affiliates</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    
  )
}

export default Partners