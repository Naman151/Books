import Image from 'next/image'
import React from 'react'

export default function ReadersCard() {
  return (
       <div className="m-1 p-2.5 mb-4">
                <h2 className="text-[24px] text-black font-[600]">Readers' Choice</h2>
                <div className="flex items-center">
                    <div className="mt-2 p-2 text-wrap w-[220]">
                        <Image src={'/Book.png'} alt="BookImg" width={200} height={300} className="rounded-md"/>
                        <h3 className="font-[500] text-[16px] my-1">The Power of Your Subconscious Mind</h3>
                        <p className="font-[400] text-[#737373] text-[14px]">Joseph Murphy</p>
                        <div className="flex justify-between">
                        <p className="font-[400] text-[#737373] text-[15px]">5 parts</p><p className="font-[400] text-[#737373] text-[15px]">17 mins</p>
                        </div>
                    </div>
                </div>
        </div>
  )
}
