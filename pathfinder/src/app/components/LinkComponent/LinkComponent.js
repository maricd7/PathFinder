import Link from 'next/link'
import React from 'react'

export default function LinkComponent({text,link,}) {
  return (
    <div className='px-8 py-4 rounded-lg bg-zinc-900 shadow-md'>
        <Link href={link}>{text}</Link>
    </div>
  )
}
