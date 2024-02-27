import React from 'react'
import Heading from '../common/Heading/Heading'
import Input from '../common/Input/Input'
import CtaButton from '../common/Button/CtaButton'
import Link from 'next/link'

export default function LoginComponent() {
  return ( 
    <div className='p-16 flex  items-center  bg-zinc-900 rounded-lg gap-16'>
       <div>
          <Heading text='Welcome to pathfinder'/>
          <h2>Use your creds to login to your pathfinder account.</h2>
       </div>
       <div className='flex flex-col gap-4'>
        <h2 className='text-2xl'>Login with email</h2>
        <Input placeholder='Email'/>
        <Input placeholder='Password'/>
        <CtaButton text='Login'/>
        <div className='flex flex-col'>
            <span className='text-md text-center'>Don't have an account?</span>
            <Link className='text-blue-500 text-center' href='/register'>Register</Link>
        </div>
       </div>
    </div>
  )
}
