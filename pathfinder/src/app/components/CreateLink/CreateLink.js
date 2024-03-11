'use client'
import { Icon } from '@iconify/react'
import React from 'react'
import Input from '../common/Input/Input'

function CreateLink({setCreateLinkModal}) {
  return (
    <div className='flex flex-col gap-2 items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-950 p-10'>
        <Icon onClick={()=>setCreateLinkModal(false)} icon="material-symbols:close-rounded" width="24" height="24"  style={{color: '#fff'}} className='absolute top-2 right-2 cursor-pointer'/>
        <h2 className='font-xl'>Create a link</h2>
        <div className='flex flex-col gap-2'>
          <label>Link for:</label>
          <Input type='text' placeholder='Link for'/>
        </div>
        <div  className='flex flex-col gap-2'>
          <label>Link</label>
          <Input type='text' placeholder='Link'/>
        </div>
    </div>
  )
}

export default CreateLink