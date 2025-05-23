import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

function BookCard() {
  return (
      <div className="flex my-5 bg-[#DAE4FF] px-5 py-3 mr-5 rounded-md shadow-sm w-[600px] text-wrap">
                           <Image src={'/Book.png'} alt="BookImg" width={133} height={200} className="rounded-md"/>
                            <div className="ml-4 text-wrap w-[350]">
                                    <h3 className="font-[600] text-[18px]">The Blue Zones Solution </h3>
                                    <p className="font-[400] text-[#737373] text-[14px] my-2">Dan Buettner</p>
                                    <p className="font-[400] text-black text-[14px]">0 mins</p>
                                    <div className="my-3">
                                    <Button className="bg-[#01383D] px-4 py-5 mr-5 my-2">
                                        <Image src={'/Read.svg'} alt="icon" width={12} height={12}/>
                                        Read
                                    </Button>
                                    <Button className="bg-[#FDFCFC] px-4 py-5 mr-5">
                                         <Image src={'/Bookmark.svg'} alt="icon" width={12} height={12}/>
                                         <p className="text-[#01383D]">Bookmark</p>
                                    </Button>
                                    </div>
                                <p className="font-[400] text-[#737373] text-[14px]">This summary offers a concise overview of *The Blue Zones Solution* by Dan Buettner, capturing its k...</p>
                        </div>
                        </div>
  )
}

export default BookCard
