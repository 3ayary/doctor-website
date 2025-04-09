import Link from 'next/link'
import React from 'react'

const ItemsCard = (props) => {
  return (
    <Link href={props.link}>
    <div className='flex flex-col w-[200px] h-30 border-2 border-[#5271FF] rounded-lg shadow-lg' >
        <div className='bg-[#5271FF] w-[100%] h-2 self-center'></div>

  <div className='flex flex-wrap justify-center   mx-[5%] mb-[5%] '>

<h1>
    {props.title}
</h1>


    </div>
    </div>
    </Link>
  )
}

export default ItemsCard