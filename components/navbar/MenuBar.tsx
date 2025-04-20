import React from 'react'
import Container from '../global/Container'
import { links } from '@/utils/links';
import Link from 'next/link';
import Avatar from '../global/Avatar';
import avatar4 from '@/public/avatar-4.jpg'
import { userInfo } from "@/utils/actions";
import { userRole } from "@/utils/actions";

async function MenuBar() {

  const profile = await userInfo();
  const { firstname, lastname, email, phonenumber } = profile

  const role = await userRole();

  return (
    <nav className='hidden md:block'>
    <Container className='flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8 gap-8'> 

    {role? 
    
    <div className='flex gap-2'>
    {links.map((link) => {
        return (
            <div key={link.href} className='border-1 rounded-full p-4 text-sm font-normal'>
                <Link href={link.href}>{link.label}</Link>
            </div>
        )
    })}
    </div> :

    <div>Affilitae nav</div>

}
    


        <div className='flex gap-4 justify-end content-center'>
               <div className='text-sm content-center'>{firstname} {lastname}</div>
                <Avatar avatarImg={avatar4}/>
        </div>
    </Container>
</nav>
  )
}

export default MenuBar