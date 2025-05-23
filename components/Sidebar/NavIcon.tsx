import Image from 'next/image'
import React from 'react'

function NavIcon(props) {
  return (
      <div className='flex items-center my-3'>
                 <Image src={props.icon} alt='nosislogo' width={20} height={20}/>
                 <p className='text-[14px] font-[600] text-[#0A0A0A] ml-2'>{props.title}</p>
     </div>

  )
}

export default NavIcon
