import React, {useState, useEffect, createRef} from 'react'
import { usePosts } from '../context/PostsContext'
import Banner from './Banner'
import { Link } from "react-router-dom"
import OffsCard from './OffsCard'

const Supermarket = () => {
    const {mockProducts}=usePosts()
    const [productSupermarket, setProductSupermarket]=useState(mockProducts)
    const banner = [
        {
            id:1,
            banner: "https://http2.mlstatic.com/D_NQ_769433-MLA49914041762_052022-OO.webp" 
        },
        {
            id:2,
            banner: "https://http2.mlstatic.com/D_NQ_775791-MLA49880243251_052022-OO.webp" 
        },
        {
            id:3,
            banner: "https://http2.mlstatic.com/D_NQ_733598-MLA49897564231_052022-OO.webp" 
        },
        {
            id:4,
            banner: "https://http2.mlstatic.com/D_NQ_863680-MLA49880309872_052022-OO.webp" 
        },
    ]
    const depa = [
        {
            id:1,
            name:"cuidado personal",
            banner: "https://http2.mlstatic.com/D_NQ_NP900920-MLA49252261054_032022-B.webp" 
        },
        {
            id:2,
            name:"bebés",
            banner: "https://http2.mlstatic.com/D_NQ_NP800321-MLA46650165851_072021-B.webp" 
        },
        {
            id:3,
            name:"limpieza",
            banner: "https://http2.mlstatic.com/D_NQ_NP910719-MLA48404239595_122021-B.webp" 
        },
        {
            id:4,
            name:"bebidas",
            banner: "https://http2.mlstatic.com/D_NQ_NP789128-MLA48453548978_122021-B.webp" 
        },
        {
            id:5,
            name:"almacén",
            banner: "https://http2.mlstatic.com/D_NQ_NP727601-MLA48232384061_112021-B.webp" 
        },
        {
            id:6,
            name:"mascotas",
            banner: "https://http2.mlstatic.com/D_NQ_NP892026-MLA47328343610_092021-B.webp" 
        },
    ]
    const filterMock = productSupermarket.filter((mock)=> mock.categorie === "supermercado")
    console.log(filterMock);
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
        <div className='w-full min-h-screen bg-gray-200'>
            <Banner banner={banner}/>
            <div className='w-full min-h-full bg-inherit pt-4 pb-12 px-16'>
                <div className='w-full min-h-[30px] flex items-center mb-4'>
                    <h2 className='text-lg text-gray-600 mr-2'>¡OFERTAS ÚNICAS!</h2>
                    <Link to="/market/ofertas">
                        <span className='text-blue-500 text-sm cursor-pointer'>Ver todas</span>
                    </Link>
                </div>
                <section className='w-full h-full bg-white rounded-md shadow-md'>
                    <div className='productCarrousel'>
                        <div className='w-full min-h-[200px] bg-inherit flex justify-start items-start overflow-x-auto laptop:overflow-x-visible container productsContent' ref={myRef}>
                            {filterMock.map((fOff, index)=>{
                                return (
                                    <OffsCard fOff={fOff} key={index} />
                                )
                            })}
                        </div>
                        {scrollId >= 730 && <button className={`hidden quini:block z-30 w-16 text-blue-500 text-2xl font-medium h-16 bg-white absolute left-0 rounded-full border-b border-b-gray-800 hover:bg-gray-100 transition-colors duration-200 `} onClick={() => scroll(-770)}> - </button>}
                        {!scrollX && <button className={`hidden quini:block z-30 w-16 h-16 text-blue-500 text-2xl font-medium bg-white absolute right-0 rounded-full border-b border-b-gray-800 hover:bg-gray-100 transition-colors duration-200 `} onClick={() => scroll(770)}> + </button>}
                    </div>
                </section>
            </div>
            <div className='w-full min-h-[300px] bg-inherit pt-4 pb-12 px-16'>
                <h2 className='text-base text-center pb-8 text-gray-600 mr-2'>
                    BUSCÁ POR DEPARTAMENTO
                </h2>
                <div className='w-full min-h-[200px] flex flex-wrap items-center justify-between' >
                    {depa.map((item,index)=>{
                        return (
                            <div className='w-[384px] h-[264px] bg-red-900 rounded-xl cursor-pointer hover:shadow-md transition-shadow duration-200 mr-2 mb-8 overflow-hidden relative' key={index}>
                                <div className='w-full h-[240px] bg-green-900'>
                                    <img src={item.banner} alt="Categoria preview" className='w-full h-full object-cover'/>
                                </div>  
                                <div className='bg-white w-full h-[48px] text-center flex items-center justify-center absolute bottom-0'>
                                    <h3 className='uppercase text-sm text-gray-600'>{item.name}</h3>
                                </div>  
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Supermarket