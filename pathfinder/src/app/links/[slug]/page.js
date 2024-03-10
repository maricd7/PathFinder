import CreateLink from '@/app/components/CreateLink/CreateLink'
import LinkComponent from '@/app/components/LinkComponent/LinkComponent'
import Heading from '@/app/components/common/Heading/Heading'
import React from 'react'


function Links() {
  return (
    <div className='flex flex-col gap-4 justify-center items-center h-full'>
        <Heading text='Jon Doe Links'/>
        <LinkComponent text='Follow my facebook' link='https://www.facebook.com'/>
        <CreateLink/>
    </div>
  )
}

export default Links