import React from 'react'
import { RiSettings3Fill } from "react-icons/ri"

const NotifiBox = () => {
  return (
    <div className='hidden laptop:block z-[100] absolute right-2 top-[95%] w-[360px] min-h-[180px] bg-gray-100 rounded-md shadow-md overflow-hidden'>
        <div className='w-full min-h-[40px] bg-white px-2 flex justify-between items-center'>
            <p className='text-black text-sm'>Notificaciones</p>
            <RiSettings3Fill className="w-6 h-6 text-gray-700 cursor-pointer" />
        </div>
        <p className='pt-14 text-center text-sm text-gray-500'>Por ahora, no hay nada aquí.</p>
    </div>
  )
}

export default NotifiBox