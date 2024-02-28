'use client'
import React, { useState } from 'react';
import Heading from '../common/Heading/Heading';
import Input from '../common/Input/Input';
import CtaButton from '../common/Button/CtaButton';
import Link from 'next/link';
import {app} from '../../firebase';


export default function RegisterComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  console.log(app,'asasdasd');
  const apiKey = process.env.API_KEY;
  
  return (
    <div className='p-16 flex items-center bg-zinc-900 rounded-lg gap-16'>
      <div>
        <Heading text='Welcome to pathfinder' />
        <h2>Use your creds to register to your pathfinder account.</h2>
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='text-2xl'>Register with email</h2>
        {error && <p className="text-red-500">{error}</p>}
        <Input
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder='Password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder='Confirm Password'
          type='password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <CtaButton text='Register' />
        <div className='flex flex-col'>
          <span className='text-md text-center'>Already have an account?</span>
          <Link className='text-blue-500 text-center' href='/login'>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
