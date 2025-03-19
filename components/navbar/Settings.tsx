import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { Button } from '../ui/button';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

function Settings() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
        <Button size="icon" variant="outline" className='mx-auto p-8 rounded-full cursor-pointer'><IoSettingsOutline className="text-primary" /></Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Settings</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default Settings