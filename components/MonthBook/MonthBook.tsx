import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import BookCard from './BookCard'

function MonthBook() {
  return (
         <div className="m-1 p-2.5 mb-4">
                <h2 className="text-[24px] text-black font-[600]">Book of the Month</h2>
                <div className="lg:flex">
                       <BookCard/>
                       <BookCard/>
                </div>
        </div>
  )
}

export default MonthBook
