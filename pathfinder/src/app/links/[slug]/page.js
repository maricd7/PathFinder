'use client'
import CreateLink from '@/app/components/CreateLink/CreateLink'
import LinkComponent from '@/app/components/LinkComponent/LinkComponent'
import Heading from '@/app/components/common/Heading/Heading'
import React, { useState } from 'react'
import {app,auth} from '@/app/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation'

function Links() {
  const [createLinkModal,setCreateLinkModal] = useState(false)
  const user = auth.currentUser;
  const userName = user.displayName;
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
        <Heading text={userName +' links'}/>
        <LinkComponent text='Follow my facebook' link='https://www.facebook.com'/>
        <span onClick={()=>{setCreateLinkModal(true)}} className='cursor-pointer'>Create a link</span>
        {createLinkModal ? <CreateLink setCreateLinkModal={setCreateLinkModal}/> : <></>}
        {user ? <button onClick={()=>handleSignOut()}>Sign out</button> : <></>}
    </div>
  )
}

export default Links