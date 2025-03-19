import React from 'react'
import Container from '../global/Container'
import { links } from '@/utils/links';
import { Button } from '../ui/button';
import Link from 'next/link';
import Avatar from '../global/Avatar';
import avatar4 from '@/public/avatar-4.jpg'

function MenuBar() {
  return (
    <nav className='hidden md:block'>
    <Container className='flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8 gap-8'>        
    <div className='flex gap-2'>
    {links.map((link) => {
        return (
            <div key={link.href} className='border-1 rounded-full p-4 text-sm font-normal'>
                <Link href={link.href}>{link.label}</Link>
            </div>
        )
    })}
    </div>
        <div className='flex gap-4 justify-end'>
                <Avatar avatarImg={avatar4}/>
        </div>
    </Container>
</nav>
  )
}

export default MenuBar