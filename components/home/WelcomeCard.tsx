import React from 'react'
import AffiliateCard from './AffiliateCard'
import CompanyCard from './CompanyCard'

function WelcomeCard() {
  return (
    <article className='w-[100%] md:w-[60%] mx-auto pb-12'>
    <h2 className='text-2xl text-center'><span className='text-3xl font-semibold text-blue-500'>Welcome, </span>Choose your destination</h2>
    <div className='flex flex-col gap-4 md:flex-row justify-center py-4'>
        <AffiliateCard/>
        <CompanyCard/>
    </div>
    </article>
  )
}

export default WelcomeCard