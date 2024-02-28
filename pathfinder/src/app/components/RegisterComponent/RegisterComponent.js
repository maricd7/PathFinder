'use client'
import React, { useRef, useState } from 'react';
import Heading from '../common/Heading/Heading';
import Input from '../common/Input/Input';
import CtaButton from '../common/Button/CtaButton';
import Link from 'next/link';
import {app,auth} from '../../firebase';
import { createUserWithEmailAndPassword,updateProfile }  from 'firebase/auth';


export default function RegisterComponent() {
  const emailRegisterRef = useRef();
  const passwordRegisterRef = useRef();
  const passwordConfirmRef = useRef();
  const displayNameRef = useRef();
  const [error, setError] = useState(null);

  console.log(app,'asasdasd');

  async function handleRegister(e) {
    e.preventDefault();
    const email = emailRegisterRef.current.value;
    const password = passwordRegisterRef.current.value;
    const confirmPassword = passwordConfirmRef.current.value;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await updateProfile(user, { displayName: displayNameRef.current.value });
      console.log(user.displayName, 'displayName');
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className='p-16 flex items-center bg-zinc-900 rounded-lg gap-16'>
      <div>
        <Heading text='Welcome to pathfinder' />
        <h2>Use your creds to register to your pathfinder account.</h2>
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='text-2xl'>Register with email</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleRegister} className='flex flex-col gap-4'>
        <Input
          placeholder='Display Name'
          type='text'
          ref={displayNameRef}
        />
        <Input
          placeholder='Email'
          ref={emailRegisterRef}
        />
        <Input
          placeholder='Password'
          type='password'
          ref={passwordRegisterRef}
        />
        <Input
          placeholder='Confirm Password'
          type='password'
          ref={passwordConfirmRef}
        />
        <CtaButton type='submit' text='Register'/>
        </form>
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
