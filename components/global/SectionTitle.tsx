import React from 'react'
import { cn } from '@/lib/utils';

function SectionTitle({title, className}: {title : String, className? : string}) {
  return (
    <div className={cn('text-xl capitalize font-medium mb-6', className)}>{title}</div>
  )
}

export default SectionTitle