import React from 'react'
import Container from '../global/Container'
import { links } from '@/utils/links';
import { Button } from '../ui/button';
import Link from 'next/link';

function NavLink() {
  return (
    <nav>
        <Container className='flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8 gap-4'>        
        <div className='flex gap-2'>
        {links.map((link) => {
            return (
                <Button variant='outline' asChild key={link.href} className='rounded-full py-6'>
                    <Link href={link.href}>{link.label}</Link>
                </Button>
            )
        })}
        </div>
            <div>B</div>
        </Container>
    </nav>
  )
}

export default NavLink