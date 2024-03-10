'use client'
import { Icon } from '@iconify/react'
import React from 'react'

function CreateLink() {
  return (
    <div className='flex gap-2 items-center '>
        <Icon icon="material-symbols:edit-outline-rounded" width="24" height="24"  style={{color:'fff'}} />
        <span>Create A link</span>
    </div>
  )
}

export default CreateLink