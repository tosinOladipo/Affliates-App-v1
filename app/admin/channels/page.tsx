import Container from '@/components/global/Container'
import SectionTitle from '@/components/global/SectionTitle'
import React from 'react'

function ChannelsPage() {
  return (
    <Container>
      <SectionTitle title="Channels"/>
      <aside className='grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6'>
        <div className='bg-black text-white'>1</div>
        <div className='bg-black text-white'>2</div>
        <div className='bg-black text-white'>3</div>
        <div className='bg-black text-white'>4</div>
        <div className='bg-black text-white'>5</div>
        <div className='bg-black text-white'>6</div>
      </aside>
    </Container>
  )
}

export default ChannelsPage