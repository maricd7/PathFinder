import React from 'react'

export default function Input({placeholder,type, value, onChange}) {
  return (
    <input className='px-4 py-2 rounded-lg text-slate-950' placeholder={placeholder} type={type} value={value} onChange={onChange}/>
  )
}
