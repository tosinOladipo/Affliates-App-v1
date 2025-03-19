import React from 'react'
import { cn } from '@/lib/utils';
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'

function IconCard(
{cardIcon, iconAmt, iconLabel, className} : {cardIcon : any, iconAmt : number, iconLabel : any, className : string}
) {
  return (
    <Card className='p-2 h-full shadow-none rounded-3xl'>
        <CardContent className='flex flex-col p-1 h-full'>
                <div className='h-[30%] md:h-[50%]'>
                    <Button size="icon" variant="ghost" className={cn('rounded-full', className)}>{cardIcon}</Button>
                </div>
                <div className='h-[30%] md:h-[50%] flex flex-col md:flex-row gap-1 pt-7'>
                        <div className='text-3xl font-medium'>{iconAmt}</div>
                        <div className='text-xs p-0.5 leading-3.5'>{iconLabel}</div>
                </div>
        </CardContent>
    </Card>
  )
}

export default IconCard