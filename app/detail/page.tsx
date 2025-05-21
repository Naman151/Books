import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function DetailPage() {
  return (
    <div>
        <Button className='bg-white rounded-md' size='sm'>
            <Image src={'/back.svg'} alt='back' width={4} height={10}/ >
            <p className='text-[12px] text-[#737373] font-[500]'>Button</p>
       </Button>

       <div className='flex m-6'>
            <Image src={'/book.png'} alt='book' height={300} width={200} />
            <div className='ml-6'>
                <h1 className='text-black text-[36px] font-[600]'>Man’s Search for Meaning</h1>
                <p className='text-[16px] font-[400] text-[#737373CC]'>Viktor E. Frankl</p>
                <div className='my-2 flex'>
                    <Image src={'/part.svg'} alt='part' width={12} height={12}/>
                    <p className='text-[15px] font-[400] text-[#737373CC] mx-1'>5 parts</p>
                    <p className='text-[15px] font-[400] text-[#737373CC] mx-1'>0 mins</p>
                </div>

                <div className='my-2 flex'>
                    <Badge variant="secondary" className='mr-2 rounded-md bg-[#01383D0D]'><p className='text-[#01383D]'>philosophy</p></Badge>
                    <Badge variant="secondary" className='mr-2 rounded-md bg-[#01383D0D]'><p className='text-[#01383D]'>philosophy</p></Badge>
                    <Badge variant="secondary" className='mr-2 rounded-md bg-[#01383D0D]'><p className='text-[#01383D]'>philosophy</p></Badge>
               </div>

              <div className="my-3">
                    <Button className="bg-[#01383D] px-8 py-5 mr-5 my-2">
                    <Image src={'/Read.svg'} alt="icon" width={12} height={12}/>
                    <p>Read</p>
                    </Button>

                    <Button className="bg-[#FDFCFC] px-8 py-5 mr-5 my-2">
                    <Image src={'/Bookmark.svg'} alt="icon" width={12} height={12}/>
                    <p className="text-[#01383D]">Bookmark</p>
                    </Button>
              </div>

         </div>
      </div>

      <div className='bg-white py-8 px-5 m-1 shadow-sm'>
        <h2 className='text-black text-[24px] font-[600]'>Preface</h2>
        <p className='text-[16px] font-[400] text-[#737373CC] mx-1 w-300 text-wrap my-5'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
      </div>
   </div>
  )
}

export default DetailPage
