import React, { useState } from 'react'
import { BsHeart } from "react-icons/bs"
import { AiFillThunderbolt } from "react-icons/ai"
import { Link } from 'react-router-dom'

const OffsCard = ({fOff}) => {
    const [details, setDetails]=useState(false)
    
    const showDetails=()=>{
        setDetails(!details)
    }

  return (
    <Link to={`/market/${fOff.id}`}>
        <div className={`${details ? "shadow-2xl" : "shadow-md"} w-[224px] min-h-[330px] max-h-[330px] bg-white cursor-pointer mr-2 productC`} onMouseEnter={showDetails} onMouseLeave={showDetails} >
            <div className='w-full h-[220px] bg-red-300 relative'>
                <img src={fOff.img} alt="Prodcut preview" className='w-full h-full object-cover' />
                {details && <div className='w-8 h-8 bg-[#bbbbbbd8] flex justify-center items-center absolute top-5 right-5 rounded-full cursor-pointer'><BsHeart className='w-4 h-4 text-blue-700' /></div>}
            </div>
            <div className='p-2 px-4 border-t border-t-gray-300 w-full h-full bg-inherit flex flex-col items-start font-medium'>
                <p className='pb-2 text-2xl font-normal'>$ {fOff.price} <strong className='uppercase text-sm text-green-500'>{fOff.off}% off</strong></p>
                <p className='text-sm text-green-500'>{fOff.cout}</p>
                <p className='text-sm text-green-500 flex'>Envío gratis {fOff.full && <span className='ml-2 flex items-center text-green-800 font-bold text-sm uppercase'><AiFillThunderbolt className="w-3 h-3"/>full</span>} </p>
                {details && <p className='text-gray-500 text-[14px] pt-2 font-normal hidden laptop:inline'>{fOff.name}</p>}
            </div>
        </div>
    </Link>
  )
}

export default OffsCard