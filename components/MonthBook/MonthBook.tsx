import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function MonthBook() {
  return (
         <div className="m-1 p-2.5 mb-4">
                        <h2 className="text-[24px] text-black font-[600]">Book of the Month</h2>
                        <div className="flex">
                        <div className="flex bg-blue-200 p-4 mr-5 rounded-md shadow-sm">
                           <Image src={'/Book.png'} alt="BookImg" width={130} height={200} className="rounded-md"/>
                            <div className="ml-2 text-wrap w-[350]">
                                    <h3 className="font-[600] text-[18px]">The Blue Zones Solution </h3>
                                    <p className="font-[400] text-[#737373] text-[14px] my-2">Dan Buettner</p>
                                    <p className="font-[400] text-black text-[14px]">0 mins</p>
                                    <div className="my-3">
                                    <Button className="bg-[#01383D] px-4 py-5 mr-5 my-2">
                                        <Image src={'/Read.svg'} alt="icon" width={12} height={12}/>
                                        Read
                                    </Button>
                                    <Button className="bg-[#FDFCFC] px-4 py-5 mr-5 my-2">
                                         <Image src={'/Bookmark.svg'} alt="icon" width={12} height={12}/>
                                         <p className="text-[#01383D]">Bookmark</p>
                                    </Button>
                                </div>
                                <p className="font-[400] text-[#737373] text-[14px]">This summary offers a concise overview of *The Blue Zones Solution* by Dan Buettner, capturing its k...</p>
                        </div>

                        </div>
                </div>
            </div>
  )
}

export default MonthBook
