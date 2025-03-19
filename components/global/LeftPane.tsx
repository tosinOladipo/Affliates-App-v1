import React from 'react'
import LogoIcon from './Logo'
import LogOut from '../navbar/LogOut'
import Settings from '../navbar/Settings'


function LeftPane({children}: {children : React.ReactNode}) {
  return (
    <aside className=" hidden md:block  w-[15%] h-lvh py-8 fixed left-0">
        <LogoIcon/>
        <div className='flex flex-col gap-4 pt-8'>
        {children}
        </div>
        <div className='fixed  flex flex-col gap-4 pt-8 bottom-20 w-[15%]'>
          <LogOut/>
          <Settings/>
        </div>
        
    </aside>
  )
}

export default LeftPane