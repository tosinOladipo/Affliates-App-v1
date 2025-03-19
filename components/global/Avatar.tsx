import React from 'react'
import { cn } from '@/lib/utils';
import Image from 'next/image';

function Avatar ({avatarImg, className}: {avatarImg : any, className? : String}) {
  return (
    <Image src={avatarImg} alt='avatar image' className={cn('border-2 rounded-full bg-gray-300 w-[40px] h-[40px] md:w-[50px] md:h-[50px]',className)}/>
  )
}

export default Avatar