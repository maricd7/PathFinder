import React from 'react'
import Heading from '../common/Heading/Heading'
import Input from '../common/Input/Input'
import CtaButton from '../common/Button/CtaButton'
import Link from 'next/link'

export default function RegisterComponent() {
  return ( 
    <div className='p-16 flex  items-center  bg-zinc-900 rounded-lg gap-16'>
       <div>
          <Heading text='Welcome to pathfinder'/>
          <h2>Use your creds to register to your pathfinder account.</h2>
       </div>
       <div className='flex flex-col gap-4'>
        <h2 className='text-2xl'>Register with email</h2>
        <Input placeholder='Email'/>
        <Input placeholder='Password'/>
        <Input placeholder='Confirm Password'/>
        <CtaButton text='Register'/>
        <div className='flex flex-col'>
            <span className='text-md text-center'>Already have an account?</span>
            <Link className='text-blue-500 text-center' href='/login'>Login</Link>
        </div>
       </div>
       
    </div>
  )
}
