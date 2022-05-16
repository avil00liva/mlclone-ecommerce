import React, { useState } from 'react'
import { VscListTree } from "react-icons/vsc"

const AskPart = () => {
    const [text, setText]=useState("")
    const [question, setQuestion]=useState([])
    const [answer, setAnswer]=useState(false)
    const [ban, setBan]=useState(false)
    const [banQ, setBanQ]=useState(false)
    const today= new Date()
    const time= today.getHours() + ":" + today.getMinutes()

    const sendQuestion=(e)=>{
        e.preventDefault()
        setQuestion([...question, {text:text, timestamp: time}])
        setText("")
    }

  return (
    <>
        <div className='w-full min-h-[50px] p-4 mb-4 bg-inherit'>
            <h1 className='font-normal text-xl pb-8'>Preguntas y respuestas</h1>
            <h3 className='pb-4'>¿Qué querés saber?</h3>
            <div className='w-full min-h-[50px] pb-6 flex flex-wrap justify-start items-center'>
                <span className='rounded-md px-2 mr-2 mb-3 py-1 bg-blue-100 text-sm text-blue-600 font-medium cursor-pointer hover:bg-blue-200 transition-colors duration-300'>
                    Costo y tiempo de envío
                </span>
                <span className='rounded-md px-2 mr-2 mb-3 py-1 bg-blue-100 text-sm text-blue-600 font-medium cursor-pointer hover:bg-blue-200 transition-colors duration-300'>
                    Devoluciones gratis
                </span>
                <span className='rounded-md px-2 mr-2 mb-3 py-1 bg-blue-100 text-sm text-blue-600 font-medium cursor-pointer hover:bg-blue-200 transition-colors duration-300'>
                    Medios de pago y promociones
                </span>
                <span className='rounded-md px-2 mr-2 mb-3 py-1 bg-blue-100 text-sm text-blue-600 font-medium cursor-pointer hover:bg-blue-200 transition-colors duration-300'>
                    Garantía
                </span>
                <span className='rounded-md px-2 mr-2 mb-3 py-1 bg-blue-100 text-sm text-blue-600 font-medium cursor-pointer hover:bg-blue-200 transition-colors duration-300'>
                    Cuotas sin tarjeta
                </span>
            </div>
        </div>
        <div className='w-full min-h-[50px] p-4 mb-4 bg-inherit'>
            <h3 className='pb-4'>Preguntale al vendedor</h3>
            <div className='w-full min-h-[60px] pb-6 flex'>
                <input type="text" placeholder='Escribí tu pregunta...' className='outline-none border border-gray-300 rounded-lg px-4 py-2 w-full placeholder:font-light mr-4' value={text} onChange={(e)=>setText(e.target.value)} />
                <button className='outline-none border-0 rounded-lg px-8 py-2 bg-blue-500 text-white text-sm hover:bg-blue-600 transition-colors duration-300' onClick={sendQuestion}>Preguntar</button>
            </div>
            {question.length > 0 &&
                <>
                    <h3 className='pb-6'>Últimas realizadas</h3>
                    <div className="w-full min-h-[50px] pb-6 flex flex-col-reverse">
                        {question.map((preg, index)=>{
                            return (
                                <>
                                    {answer &&
                                        <div className='w-full min-h-[60px] mt-1 mb-4 text-gray-500 flex'>
                                            <VscListTree className='w-7 h-7 mr-2' />                                
                                            <div className="w-full min-h-[60] pb-4 flex border-b border-b-gray-300 mb-4" key={index} onMouseEnter={()=>setBan(true)} onMouseLeave={()=>setBan(false)}>
                                                <p className="text-[15px] font-light">
                                                    {preg.text}
                                                    {ban && <span className='text-blue-500 cursor-pointer text-sm font-medium ml-2'>Denunciar</span>}
                                                </p>
                                                <p className="inline-block text-[15px] font-light self-end pt-4">
                                                    {preg.timestamp}
                                                </p>
                                            </div>
                                        </div>
                                    }
                                    <div className={`"w-full min-h-[60] flex flex-col ${!answer && "pb-4 mb-4"}`} key={index} onMouseEnter={()=>setBanQ(true)} onMouseLeave={()=>setBanQ(false)}>
                                        <p className="text-[15px] font-light">
                                            {preg.text}
                                            {banQ && <span className='text-blue-500 cursor-pointer text-sm font-medium ml-2'>Denunciar</span>}
                                        </p>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </>
            }
        </div>
    </>
  )
}

export default AskPart