import Image from 'next/image'
import React from 'react'

export const BookInfo = () => {
  return (
        <div className="mt-2 p-2 text-wrap w-[240px]">
             <Image src={'/Book.png'} alt="BookImg" width={180} height={180} className="rounded-md"/>
             <h3 className="font-[500] text-[16px] my-1">The Power of Your Subconscious Mind</h3>
             <p className="font-[400] text-[#737373] text-[14px]">Joseph Murphy</p>
             <div className="flex mt-0.5">
                <p className="font-[400] text-[#737373] text-[15px]">5 parts</p><p className="font-[400] text-[#737373] text-[15px] ml-4">17 mins</p>
            </div>
       </div>
  )
}
