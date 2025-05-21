import Image from 'next/image'
import React from 'react'

function InfoCard() {
  return (
       <div className="m-1 p-2.5 mb-4">
                <h2 className="text-[24px] text-black font-[600]">Your Reading Journey</h2>
                <div className="flex">
                    <div className="bg-white rounded-md shadow-sm w-[300] p-5 my-3 mr-5">
                        <Image src={'/idea.svg'} alt="ico" width={20} height={20}/>
                        <p className="text-[14px] text-[#737373] my-2 font-[500]">Weekly Reading Goal</p>
                        <h2 className="text-[20px] text-black font-[600] my-2">5 books</h2>
                        <p className="text-[12px] text-[#737373] font-[400] ">+2 from last week</p>
                     </div>
                </div>
        </div>
  )
}

export default InfoCard
