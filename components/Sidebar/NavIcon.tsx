'use client'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { redirect } from 'next/navigation'

function NavIcon(props) {
  return (
      <Button variant='ghost' className='flex items-center my-3' onClick={() => redirect(props.redirect)}>
                 <Image src={props.icon} alt='nosislogo' width={20} height={20}/>
                 <p className={`text-[14px] font-[600] + ${props.active ? 'text-[#0A0A0A]' : 'text-[#737373B2]'}`}>{props.title}</p>
     </Button>

  )
}

export default NavIcon
