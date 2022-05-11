import React from 'react'
import ExploreHomeBanner from './ExploreHomeBanner'
import { BsCreditCard2BackFill, BsCreditCard2FrontFill, BsFillPlusCircleFill } from "react-icons/bs"
import { GiReceiveMoney } from "react-icons/gi"
import { FaHandHoldingUsd } from "react-icons/fa"
import ExploreOffsPanel from './ExploreOffsPanel'


const ExploreHome = () => {
  const barraPromo = [
    {
      id: 1,
      text: "Tarjeta de crédito",
      text2: "Ver promociones bancarias",
      icon: BsCreditCard2FrontFill,
    },
    {
      id: 2,
      text: "Tarjeta de débito",
      text2: "Ver más",
      icon: BsCreditCard2BackFill,
    },
    {
      id: 3,
      text: "Cuotas sin tarjeta",
      text2: "Conocé Mercado Crédito",
      icon: FaHandHoldingUsd,
    },
    {
      id: 4,
      text: "Efectivo",
      text2: "Ver más",
      icon: GiReceiveMoney,
    },
  ]


  return (
    <div className='w-full min-h-screen bg-gray-200 text-black pb-8'>
        <ExploreHomeBanner />
        <div className='pt-10 px-4 laptop:px-24 w-full min-h-screen bg-inherit'>
          <div className='p-6 w-fit mx-auto talet:mx-0 tablet:w-full min-h-[80px] bg-white rounded-md shadow-md tablet:flex items-center justify-between'>
            {barraPromo.map((item, index)=>{
              return (
                <div className='flex flex-col quini:flex-row items-center border-b border-b-gray-500 quini:border-b-0 pt-4 quini:pt-0 pb-6 tablet:pb-0' key={index}>
                  {<><item.icon className='w-6 h-6 text-blue-600 mr-4' /></>}
                  <div>
                    <h2 className='text-base'>{item.text}</h2>
                    <h4 className='text-xs text-blue-500 cursor-pointer'>{item.text2}</h4>
                  </div>
                </div>
              )
            })}
            <div className='h-auto w-full quini:w-[50px] bg-inherit flex items-center justify-center pt-4 quini:pt-0'>
              <BsFillPlusCircleFill className='w-6 h-6 text-blue-500 cursor-pointer' />
            </div>
          </div>
          <ExploreOffsPanel />
        </div>



    </div>
  )
}

export default ExploreHome