import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

export default function() {
  return (
    <div className='bg-[#F3F0EC] shadow-sm p-2'>
       <div className='items-center justify-center'>
        <Button variant='outline' className='border-[#2C5A5E]'>
            <Image src={'/lang.svg'} alt='langicon' width={16} height={16}/>
            <p className='text-[14px] font-[400] text-black'>English</p>
            <Image src={'/expand.svg'} alt='langicon' width={10} height={10}/>
        </Button>
        <Button className='bg-[#01383D] ml-5'>
            <p>
            Sign In
            </p>
        </Button>
       </div>
    </div>
  )
}
