import React from 'react'

function SectionTitle({title}: {title : String}) {
  return (
    <div className='text-xl capitalize font-medium mb-6'>{title}</div>
  )
}

export default SectionTitle