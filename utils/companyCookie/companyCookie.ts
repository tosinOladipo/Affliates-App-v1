'use server'

import { cookies } from 'next/headers'
 
export async function setCompanyCookies() {
  const cookieStore = await cookies()
 
  cookieStore.set({
    name: 'companyId',
    value: 'Tosin',
    httpOnly: true,
    path: '/',
  })
}