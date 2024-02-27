import React from 'react'
import Heading from '../components/common/Heading/Heading'
import LinkComponent from '../components/LinkComponent/LinkComponent'

function Links() {
  return (
    <div className='flex flex-col gap-4 justify-center items-center h-full'>
        <Heading text='Jon Doe Links'/>
        <LinkComponent text='Follow my facebook' link='https://www.facebook.com'/>
    </div>
  )
}

export default Links