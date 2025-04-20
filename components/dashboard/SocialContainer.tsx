import React from 'react'
import { Card, CardContent } from '../ui/card'
import facebookIcon from '@/public/facebook.png'
import instagramIcon from '@/public/instagram.png'
import twiiterIcon from '@/public/twitter.png'
import youtubeIcon from '@/public/youtube.png'
import tiktokIcon from '@/public/tik-tok.png'
import whatAppIcon from '@/public/whatsapp.png'
import SocialCard from './SocialCard'
import { fetchCompanyId} from "@/utils/actions";


async function SocialContainer() {

  const companyId = await fetchCompanyId()

  return (
    <Card className='w-full bg-white h-[270px] border-0 shadow-none rounded-4xl p-2 md:p-4'>
        <CardContent className='flex flex-col justify-center h-full p-4 md:p-6'>
            <div className='w-full h-[220px] flex flex-col'>
                <section className='h-[50%] grid grid-cols-3 border-b-1'>
                <SocialCard socialIcon={facebookIcon} socialLabel='Facebook' companyId={companyId}/>
                <SocialCard className='border-l-1 border-gray-200' socialIcon={instagramIcon} socialLabel='Instagram' companyId={companyId}/>
                <SocialCard className='border-l-1  border-gray-200' socialIcon={twiiterIcon} socialLabel='Twitter' companyId={companyId}/>
                </section>
                <section className='h-[50%] grid grid-cols-3'>
                <SocialCard socialIcon={youtubeIcon} socialLabel='YouTube' companyId={companyId}/>
                <SocialCard className='border-l-1  border-gray-200' socialIcon={whatAppIcon} socialLabel='WhatsApp' companyId={companyId}/>
                <SocialCard className='border-l-1  border-gray-200' socialIcon={tiktokIcon} socialLabel='Tik-Tok' companyId={companyId}/>
                </section>
            </div>
        </CardContent>
    </Card>
  )
}

export default SocialContainer