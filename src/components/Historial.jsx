import React, {useState, useEffect} from 'react'
import { usePosts } from '../context/PostsContext'
import { Link } from "react-router-dom"


const Historial = () => {
    const [historial, setHistorial] = useState([])
    const relacionadas = [
      {
        id:1,
        name:"teclado redragon - "
      },
      {
        id:2,
        name:"teclado mecanico logitech - "
      },
      {
        id:3,
        name:"teclado hyperx - "
      },
      {
        id:4,
        name:"hyperx alloy origins - "
      },
      {
        id:5,
        name:"teclado bluetooth - "
      },
      {
        id:6,
        name:"teclado pc "
      },
      {
        id:7,
        name:"- teclado red dragon k552"
      },
    ]

    
    useEffect(()=>{
        const productFilter = JSON.parse(localStorage.getItem("Historial") || "[]");
        setHistorial(productFilter)
    },[])

  return (
    <>
        <div className='w-full min-h-screen bg-gray-100 text-black p-4 px-4 tablet:px-8 laptop:px-16'>
            <div className='w-full min-h-[20px] bg-inherit flex justify-start pb-4'>
              <strong className='text-sm tablet:text-xs inline-block w-fit'>Búsquedas relacionadas:</strong>
              <ul className='w-fit h-full flex flex-wrap'>
                {relacionadas.map((item, index)=>{
                  return (
                    <li className='ml-2 text-sm tablet:text-xs cursor-pointer block' key={index}>
                      {item.name}
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className='w-full min-h-screen bg-inherit flex justify-start items-start rounded-lg overflow-hidden'>
                <aside className='w-[30%] min-h-screen bg-inherit hidden laptop:block'>
                  <h2 className='text-2xl font-semibold uppercase'>Historial</h2>
                  <span className='text-sm tablet:text-sm text-gray-500'>{historial.length} resultados</span>
                  <div className='w-full h-full bg-inherit pt-4 px-4'>
                      <div className='w-full min-h-[50px]'>
                          <div className='w-full min-h-[60px] p-4 bg-white rounded-sm shadow-md mb-4'>
                              <p>
                                  <span className='text-green-600 text-sm uppercase font-bold'>⚡full</span> 
                                  te ahorra envíos
                              </p>
                              <p className='text-xs text-gray-500'>Con tu carrito de compras</p>
                          </div>
                          <div className='w-full min-h-[60px] p-4 bg-white rounded-sm shadow-md mb-6 flex items-center'>
                              <p className='text-sm text-black'>Envío gratis</p>
                          </div>
                          <div className='min-h-[30px] pb-4'>
                              <h2 className='text-base'>Categorías</h2>
                              <p className='cursor-pointer pl-2 text-xs text-gray-600'>Mouses y Teclados (26.458)</p>
                              <p className='cursor-pointer pl-2 text-xs text-gray-600'>Otros (24)</p>
                          </div>
                          <div className='min-h-[30px] pb-4'>
                              <h2 className='text-base'>Condición</h2>
                              <p className='cursor-pointer pl-2 text-xs text-gray-600'>Nuevo (21.830)</p>
                              <p className='cursor-pointer pl-2 text-xs text-gray-600'>Usado (650)</p>
                          </div>
                      </div>
                  </div>
                </aside>
                <section className='w-full min-h-screen bg-white shadow-sm'>
                  <>
                  {historial.length === 0 && <div className='w-full min-h-[300px] text-center text-2xl text-gray-600 flex items-center justify-center'>No tienes búsquedas recientes.</div> }

                  {historial && historial.map((item, index)=>{
                    return (
                      <div className='w-full min-h-[200px] laptop:max-h-[200px] bg-inherit border-b border-b-gray-400 px-6 py-4 flex flex-col laptop:flex-row items-start justify-start relative mb-4'>
                        <div className='w-[250px] h-[150px] bg-inherit mr-2'>
                          <img src={item.img} alt="Product preview" className='w-full h-full object-contain' />
                        </div>
                        <div className='w-full h-full bg-inherit flex flex-col justify-start'>
                          <Link to={`/market/${item.id}`}>
                            <h2 className='text-lg text-gray-500 font-light cursor-pointer overflow-hidden laptop:overflow-visible overflow-ellipsis whitespace-nowrap laptop:whitespace-normal' title={item.name}>{item.name}</h2>
                          </Link>
                          <p className='text-2xl mb-2'>$ {item.price}</p>
                          <div className='w-full min-h-[20px] flex justify-start items-center'>
                            <span className='text-green-500 text-sm'>Envío gratis</span>
                            {item.full && <span className='text-green-600 text-sm ml-2 uppercase font-bold'>⚡full</span>}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                  </>
                </section>
            </div>
        </div>
    </>
  )
}

export default Historial