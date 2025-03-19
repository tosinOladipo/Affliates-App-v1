import Image from 'next/image'
import React from 'react'

import logo from '@/public/logo.png'

function LogoIcon() {
  return (
    <div className='pt-4 pb-8'>
        <Image src={logo} alt='logo' className='w-[25px] h-[27px] mx-auto'/>
    </div>
  )
}

export default LogoIcon