'use client'
import React, { useRef,useState } from 'react'
import Heading from '../common/Heading/Heading'
import Input from '../common/Input/Input'
import CtaButton from '../common/Button/CtaButton'
import Link from 'next/link'
import { auth } from '@/app/firebase'
import { useRouter } from 'next/navigation'
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginComponent() {
  const emailLoginRef = useRef();
  const passwordLoginRef = useRef();
  const [error, setError] = useState(null);
  const router = useRouter()

  async function handleLogin(e){
    e.preventDefault();


    const email = emailLoginRef.current.value;
    const password = passwordLoginRef.current.value;
    try{
      await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      console.log('Signed in', user)
      router.push('/links')
    })
    }catch(error){
      console.log('err')
      setError(error)
    }
    
  }

  return ( 
    <div className='p-16 flex  items-center  bg-zinc-900 rounded-lg gap-16'>
       <div>
          <Heading text='Welcome to pathfinder'/>
          <h2>Use your creds to login to your pathfinder account.</h2>
       </div>
       <div className='flex flex-col gap-4'>
        <h2 className='text-2xl'>Login with email</h2>
        <form onSubmit={handleLogin} className='flex flex-col gap-4'>
        <Input placeholder='Email' ref={emailLoginRef}/>
        <Input placeholder='Password' ref={passwordLoginRef}/>
        <CtaButton type='submit' text='Login'/>
        </form>
        <div className='flex flex-col'>
            <span className='text-md text-center'>Don't have an account?</span>
            <Link className='text-blue-500 text-center' href='/register'>Register</Link>
        </div>
       </div>
    </div>
  )
}
