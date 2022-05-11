import React, {createRef, useState, useEffect} from 'react'
import fakeMock from '../assets/data/fakeMock'
import OffsCard from './OffsCard'
import { Link } from "react-router-dom"

const ExploreOffsPanel = () => {
    const ofertas = fakeMock.filter(mock=> mock.oferta)
    const [scrollId, setScrollId]=useState(0)
    const [scrollX, setScrollX]=useState(null)
    const div = document.getElementById("container")
    const myRef= createRef()
    const scroll = (scrollOffset) => {
        myRef.current.scrollLeft += scrollOffset;
        setScrollId(scrollId + scrollOffset)
    };

    useEffect(()=>{
        var div = document.getElementById("container")
        const hasHorizontalScrollbar = div?.scrollWidth === div?.clientWidth
        setScrollX(hasHorizontalScrollbar)
        if(scrollId >= div?.clientWidth){
            scroll(-(div?.clientWidth))
          }
    },[setScrollX, scrollId])

  return (
    <div className='py-12 w-full min-h-[500px] bg-inherit '>
        <div className='w-full min-h-[30px] flex items-center mb-4'>
            <h2 className='text-2xl text-gray-600 mr-2'>Ofertas</h2>
            <Link to="/market/ofertas">
                <span className='text-blue-500 text-sm cursor-pointer'>Ver todas</span>
            </Link>
        </div>
        <div className='productCarrousel'>
            <div className='w-full min-h-[200px] bg-inherit flex justify-start items-start overflow-x-auto laptop:overflow-x-visible container productsContent' ref={myRef}>
                {ofertas.map((fOff, index)=>{
                    return (
                        <OffsCard fOff={fOff} key={index} />
                    )
                })}
            </div>
            {scrollId >= 730 && <button className={`hidden quini:block z-30 w-16 text-blue-500 text-2xl font-medium h-16 bg-white absolute left-0 rounded-full border-b border-b-gray-800 hover:bg-gray-100 transition-colors duration-200 `} onClick={() => scroll(-770)}> - </button>}
            {!scrollX && <button className={`hidden quini:block z-30 w-16 h-16 text-blue-500 text-2xl font-medium bg-white absolute right-0 rounded-full border-b border-b-gray-800 hover:bg-gray-100 transition-colors duration-200 `} onClick={() => scroll(770)}> + </button>}
        </div>
    </div>
  )
}

export default ExploreOffsPanel