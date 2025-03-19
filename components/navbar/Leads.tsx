import React from 'react'
import { HiOutlineUsers } from "react-icons/hi2";
import { Button } from '../ui/button';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

function Leads() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
        <Button size="icon" variant="outline" className='mx-auto p-8 rounded-full cursor-pointer'><HiOutlineUsers className="text-primary"/></Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Leads</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    
  )
}

export default Leads