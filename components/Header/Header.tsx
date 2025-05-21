import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

export default function() {
  return (
    <div className='bg-[#F3F0EC] shadow-sm p-3 flex items-center justify-end'>
       <div className='w-[400px] bg-white flex p-2 mx-5 rounded-md'>
                <Image src={'/Search.svg'} alt='langicon' width={16} height={16}/>
                <p className='text-[14px] font-[400] text-[#737373] ml-12'>Search for Books</p>
       </div>


       <div className='flex items-center mx-10'>
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
