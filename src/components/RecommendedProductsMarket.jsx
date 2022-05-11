import React, {useState, createRef, useEffect} from 'react'
import fakeMoks from "../assets/data/fakeMock"
import { Link } from "react-router-dom"

const RecommendedProductsMarket = ({productFilter, param}) => {
  const recoFilter = fakeMoks.filter(product=> product.type === productFilter.type && product.id !== param)

    const [scrollId, setScrollId]=useState(0)
    const [scrollX, setScrollX]=useState(null)
    const myRef= createRef()
    const scroll = (scrollOffset) => {
        myRef.current.scrollLeft += scrollOffset;
        setScrollId(scrollId + scrollOffset)
    };

    useEffect(()=>{
        var div = document.getElementById("container")
        const hasHorizontalScrollbar = div?.scrollWidth === div?.clientWidth
        setScrollX(hasHorizontalScrollbar)
    },[setScrollX])

  return (
    <>
        {recoFilter.length > 0 && <div className='mt-8 w-full min-h-[100px] h-fit bg-inherit px-4 '>
            <h1 className='text-xl font-normal mb-8'>Publicaciones del vendedor</h1>
            <div className='productCarrousel'>
                <div id='container' className='container productsContent tablet:px-16' ref={myRef}>
                    {recoFilter.map((item, index)=>{
                        return (
                            <div className='border border-gray-300 productC' key={index}>
                                <Link to={`/market/${item.id}`}>
                                    <div className='overflow-hidden w-[224px] h-[224px] border-b border-gray-300'>
                                        <img src={item.img} alt="Product preview" className='w-full h-full object-contain' />
                                    </div>
                                    <div className='w-full h-fit p-4'>
                                        <p className='text-xl mb-1'>${item.price}</p>
                                        <p className='text-xs text-gray-500'>{item.name}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
                {scrollId >= 730 && <button className={`hidden quini:block z-30 w-16 text-blue-500 text-2xl font-medium h-16 bg-white absolute left-0 rounded-full border-b border-b-gray-800 hover:bg-gray-100 transition-colors duration-200 `} onClick={() => scroll(-770)}> - </button>}
                {!scrollX && <button className={`hidden quini:block z-30 w-16 h-16 text-blue-500 text-2xl font-medium bg-white absolute right-0 rounded-full border-b border-b-gray-800 hover:bg-gray-100 transition-colors duration-200 `} onClick={() => scroll(770)}> + </button>}
            </div>
            <div className='w-full min-h-[10px] pt-8 pb-12 mb-8  border-b border-b-gray-300'>
                <p className='cursor-pointer text-blue-500 text-base tablet:text-xs'>Ver más publicaciones del vendedor</p>
            </div>
        </div>}
    </>
  )
}

export default RecommendedProductsMarket