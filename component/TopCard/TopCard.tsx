import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import Image from 'next/image'
import React from 'react'

function TopCard() {
  return (
     <div className="m-1 p-2.5">
     <h2 className="text-[24px] text-black font-semibold">Continue Reading</h2>
     <div className="flex mt-2.5">
       <div className="bg-white p-4 rounded-md shadow-md flex items-start mr-6">
          <Image src={'/Book.png'} alt="BookImg" width={96} height={144} className="rounded-sm"/>
          <div className="ml-5">
          <h3 className="font-semibold text-[16px] text-wrap">The Power of Your Subconscious Mind</h3>
          <p className="font-[400] text-[#737373] text-[14px]">Joseph Murphy</p>
          <Progress value={20} className="bg-black my-1.5" />
          <div className="flex justify-between items-center">
             <p className="font-[400] text-[#737373] text-[12px]">40% Complete</p>
             <div className="flex">
             <Image src={'/Clock.svg'} alt="clock" width={12} height={12}/>
             <p className="ml-1.5 font-[400] text-[#737373] text-[12px]">15 mins</p>
             </div>
          </div>
           <div className="mt-6">
           <Button variant="outline"  size='sm' className="bg-white border-[#2C5A5E] rounded-2xl text-[#2C5A5E]">
            <p className='font-[500] text-[12px]'>
                Continue Reading
             </p>
            </Button>
           </div>
          </div>
      </div>
     </div>
     </div>
  )
}

export default TopCard
