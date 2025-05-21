import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

export default function Sidebar() {
  return (
    <div className='p-4 w-50 h-180 shadow-sm'>
        <div className='mb-5 flex justify-center'>
        <Image src={'/nosis-logo.svg'} alt='nosislogo' width={100} height={32}/>
        </div>
        <nav className='ml-2'>
        <div className='flex items-center my-3'>
             <Image src={'/home.svg'} alt='nosislogo' width={20} height={20}/>
             <p className='text-[14px] font-[600] text-[#0A0A0A] ml-2'>Home</p>
        </div>
        <div className='flex items-center my-3'>
             <Image src={'/explore.svg'} alt='nosislogo' width={20} height={20}/>
             <p className='text-[14px] font-[600] text-[#737373B2] ml-2'>Explore</p>
        </div>
        <div className='flex items-center my-3'>
             <Image src={'/libary.svg'} alt='nosislogo' width={20} height={20}/>
             <p className='text-[14px] font-[600] text-[#737373B2] ml-2'>Library</p>
        </div>
        </nav>

        <div className="mt-60 flex justify-center ">
            <Button className='bg-white py-4 flex-2'>
                <Image src={'/gift.svg'} alt='gifticon' height={16} width={16}/>
                <p className='text-[14px] font-[500] text-black'>Invite Friends</p>
            </Button>
        </div>
        <nav className='mt-4 px-2'>
        <div className='flex items-center my-4'>
             <Image src={'/help.svg'} alt='nosislogo' width={20} height={20}/>
             <p className='text-[14px] font-[600] text-[#737373B2] ml-3'>Request a Book</p>
        </div>
        <div className='flex items-center my-4'>
             <Image src={'/about.svg'} alt='nosislogo' width={20} height={20}/>
             <p className='text-[14px] font-[600] text-[#737373B2] ml-3'>About us</p>
        </div>
        <div className='flex items-center my-4'>
             <Image src={'/account.svg'} alt='nosislogo' width={20} height={20}/>
             <p className='text-[14px] font-[600] text-[#737373B2] ml-3'>My Account</p>
        </div>
        </nav>

        <div className='flex mt-2 items-center gap-4 px-2'>
           <Image src={'/twitter.svg'} alt='nosislogo' width={20} height={20}/>
           <Image src={'/insta.svg'} alt='nosislogo' width={20} height={20}/>
           <Image src={'/fb.svg'} alt='nosislogo' width={20} height={20}/>
        </div>
    </div>
  )
}
