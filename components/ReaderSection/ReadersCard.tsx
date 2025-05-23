import Image from 'next/image'
import React from 'react'
import { BookInfo } from '../BookInfo/BookInfo'

export default function ReadersCard(props) {
  return (
       <div className="m-4">
                <h2 className="text-[24px] text-black font-[600]">{props.title}</h2>
                <div className="flex items-center gap-2">
                  <BookInfo/>
                   <BookInfo/>
                    <BookInfo/>
                 </div>
        </div>
  )
}
