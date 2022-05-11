import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center w-full min-h-[100px] text-black border-t border-t-gray-600 bg-inherit shadow-md dark:bg-gray-50 bg-gray-50 border-gray-800 px-8'>
        <div className='w-fit laptop:w-full min-h-[30px] bg-inherit flex flex-col laptop:flex-row items-start justify-between text-xl laptop:text-sm'>
          <small className='text-gray-700 cursor-pointer hover:text-black transition-colors duration-300 py-1 laptop:py-0'>Trabajá con nosotros</small>
          <small className='text-gray-700 cursor-pointer hover:text-black transition-colors duration-300 pb-1 laptop:pb-0'>Términos y condiciones</small>
          <small className='text-gray-700 cursor-pointer hover:text-black transition-colors duration-300 pb-1 laptop:pb-0'>Cómo cuidamos tu privacidad</small>
          <small className='text-gray-700 cursor-pointer hover:text-black transition-colors duration-300 pb-1 laptop:pb-0'>Información al usuario financiero</small>
          <small className='text-gray-700 cursor-pointer hover:text-black transition-colors duration-300 pb-1 laptop:pb-0'>Ayuda</small>
          <small className='text-gray-700 cursor-pointer hover:text-black transition-colors duration-300 pb-1 laptop:pb-0'>Defensa del Consumidor</small>
          <small className='text-gray-700 cursor-pointer hover:text-black transition-colors duration-300 pb-1 laptop:pb-0'>Información sobre seguros</small>
        </div>
        <p className='text-gray-500 text-xs pb-1'>CopyClone © xxxx-xxxx BIGcommerce S.R.L.</p>
        <p className='text-gray-500 text-xs pb-1'>Av. Xxxxxxx 3039, Piso x, CP xxxx, Parque Xxxxx, CBA</p>
    </footer>
  )
}

export default Footer