import React from 'react'

export default function CtaButton({text,type}) {
  return (
    <button className='px-8 py-2 bg-blue-500 rounded-md' type={type}>{text}</button>
  )
}
