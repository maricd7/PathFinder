'use client'
import CreateLink from '@/app/components/CreateLink/CreateLink'
import LinkComponent from '@/app/components/LinkComponent/LinkComponent'
import Heading from '@/app/components/common/Heading/Heading'
import React from 'react'
import {app,auth,} from '@/app/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation'

function Links() {
  const user = auth.currentUser;
  const router = useRouter()
if (user) {
  console.log(user, 'asdasd')
} else {
  console.log('no suer')
}

function handleSignOut() {
  signOut(auth).then(() => {
    console.log('Signed out');
    router.push('/')
  }).catch((error) => {
    console.log(error);
  });
}

  return (
    <div className='flex flex-col gap-4 justify-center items-center h-full'>
        <Heading text='Jon Doe Links'/>
        <LinkComponent text='Follow my facebook' link='https://www.facebook.com'/>
        <button onClick={()=>handleSignOut()}>Sign out</button>
        <CreateLink/>
    </div>
  )
}

export default Links