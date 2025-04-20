import Image from 'next/image'
import React from 'react'

import logo from '@/public/logo.png'
import Link from 'next/link';

function LogoIcon() {
  return (
    <div className='pt-4 pb-8'>
        <Link href="/"><Image src={logo} alt='logo' className='w-[25px] h-[27px] mx-auto cursor-pointer'/></Link>
    </div>
  )
}

export default LogoIcon