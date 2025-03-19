import React from 'react'
import Avatar from '../global/Avatar'
import avatar1 from '@/public/avatar-1.jpg'
import avatar2 from '@/public/avatar-2.jpg'
import avatar3 from '@/public/avatar-3.jpg'

function Users() {
  return (
    <div>
        <Avatar avatarImg={avatar1} className='float-left'/>
        <Avatar avatarImg={avatar2} className='float-left ml-[-25px] '/>
        <Avatar avatarImg={avatar3} className='float-left ml-[-25px] '/>
    </div>
  )
}

export default Users