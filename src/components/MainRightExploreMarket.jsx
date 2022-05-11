import React, { useState } from 'react'
import { BsHeart, BsHeartFill, BsStarFill, BsStarHalf, BsTruck, BsArrowReturnLeft, BsShieldCheck, BsTrophy } from "react-icons/bs"
import { RiCloseFill } from "react-icons/ri"
import { FiMapPin } from "react-icons/fi"
import { GiAchievement } from "react-icons/gi"
import { BiMessageCheck, BiTime } from "react-icons/bi"

const MainRightExploreMarket = ({productFilter}) => {
    const [fav, setFav]=useState(false)
    
    const saveFav = ()=>{
        setFav(!fav)
    }

  return (
    <>
        <div className='p-4 rounded-lg w-full h-auto min-h-[100px] bg-gray-100 exploreSw3 mb-4'>
            <div className='w-full min-h-[10px] text-sm text-gray-500'>
                Nuevo | 1096 vendidos
            </div>
            <div className='w-full min-h-[50px] flex justify-between items-center my-2'>
                <h2 className='font-semibold text-xl'>{productFilter.name}</h2>
                {fav ? 
                    <BsHeartFill className='w-10 h-10 text-blue-500 self-start ml-4 cursor-pointer' onClick={saveFav} /> 
                    : 
                    <BsHeart className='w-10 h-10 text-blue-500 self-start ml-4 cursor-pointer' onClick={saveFav} />
                }
            </div>
            <div className='w-full min-h-[10px] mb-2 flex justify-start items-center'>
                <div className='cursor-pointer flex'>
                    <BsStarFill className='text-blue-500' />
                    <BsStarFill className='text-blue-500' />
                    <BsStarFill className='text-blue-500' />
                    <BsStarFill className='text-blue-500' />
                    <BsStarHalf className='text-blue-500' />
                </div>
                <p className='text-gray-500 text-sm ml-2 cursor-pointer'>58 opiniones</p>
            </div>
            <div className='w-full min-h-[10px] mb-2 flex justify-start items-center'>
                <span className='bg-orange-500 text-xs cursor-pointer px-1 py-1 rounded-md mr-2 text-white font-bold uppercase'>más vendido</span>
                <small className='text-blue-500 text-xs cursor-pointer'>10° en {productFilter.type}</small>
            </div>
            <div className='w-full min-h-[10px] mb-4 text-black'>
                <h2 className='text-4xl'>
                    $ {productFilter.price}
                </h2>
                <p className='text-base w-[80%]'>en {productFilter.cout}{productFilter.full && <sup className='text-green-500 uppercase'>full</sup>} pagando con Mercado Crédito</p>
                <p className='cursor-pointer text-blue-500 text-sm'>
                    Ver los medios de pago
                </p>
            </div>
            <div className='max-w-full min-h-[10px] mb-4 flex justify-between items-start w-[90%]'>
                <BsTruck className='w-9 h-9' />
                <div>
                    <p className='text-sm ml-2'>
                        Llega entre el martes y el miércoles por 769 pesos con 99 centavos $769<sup>99</sup>
                    </p>
                    <p className='cursor-pointer text-blue-500 text-xs ml-2'>
                        Ver más formas de entrega
                    </p>
                </div>
            </div>
            <div className='w-full min-h-[10px] text-green-500 flex justify-start items-start mb-4'>
                <BsArrowReturnLeft className='w-6 h-6' />
                <div className='ml-2'>
                    <p>Devolución gratis</p>
                    <p className='text-black text-sm'>Tenés 30 días desde que lo recibís</p>
                    <p className='text-blue-500 text-sm'>Conocer más</p>
                </div>
            </div>
            <p className='font-medium mb-4'>Stock disponible</p>
            <div className='w-full min-h-[10px] text-sm mb-4'>
                Cantidad: <strong>1 unidad</strong> <small className='text-gray-500'>(125 desiponibles)</small>
            </div>
            <small className='text-green-500'>
                Ahorrá en el envío comprando 4 o más unidades
            </small>
            <div className='w-full min-h-[10px] text-sm my-4'>
                <button className='outline-none border-0 w-full py-3 mb-2 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 rounded-md'>Comprar ahora</button>
                <button className='outline-none border-0 w-full py-3 mb-2 font-medium text-blue-600 bg-blue-100 hover:bg-blue-200 hover:text-blue-700 transition-colors duration-200 rounded-md'>Agregar al carrito</button>
                <button className='outline-none border-0 w-full py-3 font-medium text-blue-600 bg-transparent hover:bg-blue-100 transition-colors duration-200 rounded-md'>Comprar con Mercado Crédito</button>
            </div>
            <div className='w-full min-h-[50px] bg-inherit rounded-lg exploreSw3 flex items-center justify-between px-4 py-6 mb-4'>
                <div className='w-[30px] h-[30px]'>
                    <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-black relative inline-block mr-2'>
                        <strong className='uppercase text-white z-50 relative '>
                            big
                        </strong> 
                    </span>
                </div>
                <div className='text-xs ml-2'>
                    <strong>Comprá en 12 cuotas de $ 211<sup>50</sup></strong> eligiendo Mercado Crédito como medio de pago.
                </div>
                <RiCloseFill className='w-7 h-7 self-start cursor-pointer' />
            </div>

            <div className='w-full min-h-[10px] mb-4'>
                <div className='flex items-center w-full text-sm text-gray-500 mb-2'>
                    <BsShieldCheck className='w-7 h-7 text-gray-500 mr-4' />
                    <p><span className=' text-blue-500'>Compra Protegida</span>, recibí el producto que esperabas o te devolvemos tu dinero.</p>
                </div>
                <div className='flex items-center w-full text-sm text-gray-500'>
                    <BsTrophy className='w-4 h-4 text-gray-500 mr-4' />
                    <p><span className='text-blue-500'>Mercado Puntos</span>, Sumás 11 puntos.</p>
                </div>
            </div>
        </div>
        <div className='p-4  rounded-lg w-full h-auto min-h-[100px] bg-gray-100 exploreSw3 mb-4'>
            <h1 className='mb-4'>Información sobre el vendedor</h1>
            <div className='min-h-[50px] w-full flex justify-start items-center mb-2 text-xs'>
                <FiMapPin className='w-5 h-5 text-gray-600 mr-2' />
                <div className='w-full h-fit'>
                    <p className='text-sm'>Ubicación</p>
                    <p className='text-gray-400'>Balvanera, Capital Federal</p>
                </div>
            </div>
            <div className='min-h-[50px] w-full flex justify-start items-center mb-2 text-xs'>
                <GiAchievement className='w-7 h-7 text-green-500 mr-1' />
                <div className='w-full h-fit'>
                    <p className='text-sm text-green-500'>MercadoLíder Platinum</p>
                    <p className='text-gray-400'>¡Es uno de los mejores del sitio!</p>
                </div>
            </div>
            <div className='w-full min-h-[12px] mb-4 flex justify-between items-center'>
                <div className='w-[25%] min-h-[10px] mr-1 h-full bg-red-200'></div>
                <div className='w-[25%] min-h-[10px] mr-1 h-full bg-orange-200'></div>
                <div className='w-[25%] min-h-[10px] mr-1 h-full bg-yellow-200'></div>
                <div className='w-[25%] min-h-[10px] mr-1 h-full bg-lime-200'></div>
                <div className='w-[25%] min-h-[10px] mr-1 h-full bg-green-500'></div>
            </div>
            <div className='w-full h-[80px] mb-4 bg-inherit flex justify-start items-center'>
                <div className='p-1 flex-[0.33] w-full h-full bg-inherit flex flex-col justify-start items-center border-r border-r-gray-300'>
                    <p className='text-xl mb-1'>3983</p>
                    <p className='text-xs text-center'>Ventas en los últimos 60 días</p>
                </div>
                <div className='p-1 flex-[0.33] w-full h-full bg-inherit flex flex-col justify-start items-center border-r border-r-gray-300'>
                    <BiMessageCheck className='w-6 h-6 mb-1' />
                    <p  className='text-xs text-center'>Brinda buena atención</p>
                </div>
                <div className='p-1 flex-[0.33] w-full h-full bg-inherit flex flex-col justify-start items-center'>
                    <BiTime className='w-6 h-6 mb-1' />
                    <p  className='text-xs text-center'>Despacha sus productos a tiempo</p>
                </div>
            </div>
            <p className='w-full min-h-[10px] cursor-pointer text-blue-500 text-sm mb-4'>Ver más datos de este vendedor</p>
        </div>
    </>
  )
}

export default MainRightExploreMarket