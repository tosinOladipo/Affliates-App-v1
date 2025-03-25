import { Button } from '@/components/ui/button'
import { fetchSingleCampaign } from '@/utils/actions'
import Image from 'next/image'
import React from 'react'
import { FaShareAlt } from "react-icons/fa";



async function CampaignDetailsPage({ params }: { params: { id: string } }) {
    const campaign = await fetchSingleCampaign(params.id)
    const { campaignTitle, description, image, video } = campaign

  return <section>
    <div className='hero w-full flex flex-col md:flex-row gap-4'>
            <div className='w-[50%]'>
                <Image 
                src={image} 
                alt={campaignTitle} 
                width={500}
                height={500}
                sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'
                priority
                className='w-full rounded object-cover'
                />
            </div>
            <div className='w-[50%] md:content-center'>
                <h2 className='text-2xl text-blue-700'>{campaignTitle}</h2>
                <p className='py-4'>{description}</p>
                <Button  className='rounded-4xl py-6'>
                <FaShareAlt /> Share Now
                </Button>
            </div>
    </div>
    <div className='video-section w-full'>
    <video  autoPlay width="320" height="240" controls preload="none">
      <source src={video} type="video/mp4" />
      <track
        src={video}
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
    </div>
  </section>
}

export default CampaignDetailsPage