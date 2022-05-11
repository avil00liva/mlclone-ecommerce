import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fakeMock from '../assets/data/fakeMock'
import AskPartMarket from './AskPartMarket'
import MainRightExploreMarket from './MainRightExploreMarket'
import ProductCaractMarket from './ProductCaractMarket'
import RecommendedProductsMarket from "./RecommendedProductsMarket"

const SingleProduct = () => {
    const param = useParams()
    const paramInt= parseInt(param?.id) 
    const [products, setProducts]=useState(fakeMock)
    const productFilter= products.filter(product=> product.id === paramInt)

    const nombre = {
        nombre: "Agustin",
        apellido: "Oliva",
        id: 514
    }

    useEffect(()=>{
        const hist = localStorage.getItem("Historial")
        const historialParse = JSON.parse(hist || "[]")
        historialParse.push(...productFilter)
        localStorage.setItem("Historial", JSON.stringify(historialParse));
        
    },[productFilter])


  return (
    <>
        <div className='w-full min-h-screen bg-yellow-50 text-black'>
            <div className='w-full min-h-screen bg-gray-200 px-4 laptop:px-16 py-4'>
                <div className='w-full min-h-[20px] mb-8'>
                    <strong className='font-semibold'>También puede interesarte: </strong> 
                    <span className='cursor-pointer text-sm'>peluches gigantes</span>
                    {" "}
                    <span className='cursor-pointer text-sm'>encanto disney</span>
                    {" "}
                    <span className='cursor-pointer text-sm'>peluche</span>
                    {" "}
                    <span className='cursor-pointer text-sm'>unicornio</span>
                </div>
                <div className='bg-inherit w-full min-h-[20px] mb-4 flex flex-col tablet:flex-row justify-between items-center'>
                    <div className='flex flex-col bg-inherit text-sm'>Volver al listado | Productos de BIGcommerce </div>
                    <div className='flex mr-1 text-sm'>
                        <span className='text-blue-600 cursor-pointer'>Compartir <strong className='text-gray-700 font-thin'>|</strong> </span>
                        {" "}
                        {" "}
                        <span className='text-blue-600 cursor-pointer ml-1'> Vender uno igual</span>
                    </div>
                </div>
                <section className='w-full min-h-[500px] navbarExploreSw2 bg-gray-100 p-4'>
                    <div className='w-full h-full min-h-[500px] bg-inherit rounded-lg overflow-hidden flex flex-col-reverse tablet:flex-row'>
                        <div className='w-full h-full bg-inherit flex-[0.9]'>
                            <div className='w-full h-fit bg-inherit flex flex-col tablet:flex-row justify-between border-b pb-4 border-b-gray-300'>
                                <div className='min-h-full w-full tablet:w-[90px] bg-inherit p-2 flex flex-col items-center border-b border-b-gray-800 tablet:border-b-0'>
                                    {productFilter.map((product, index)=>{
                                        return (
                                            <div className='w-[60px] h-[60px] bg-inherit border border-gray-800 rounded-md cursor-pointer overflow-hidden mb-2 transition-opacity duration-300 hover:opacity-70' key={index}>
                                                <img src={product?.img} alt="Product preview" className='h-full w-full object-contain' />
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className='w-full min-h-auto max-h-fit bg-inherit flex items-center justify-center py-2'>
                                    <div className='w-full h-[500px]'>
                                        <img src={productFilter[0]?.img} alt="Picture selected preview" className='object-contain h-full w-full' />
                                    </div>
                                </div>
                            </div>
                            <RecommendedProductsMarket param={paramInt} productFilter={productFilter[0]} />
                            <ProductCaractMarket productFilter={productFilter[0]} />
                            <AskPartMarket productFilter={productFilter[0]} />
                        </div>




                        <div className='my-1 ml-2 mr-1 w-full h-full min-h-[100px] bg-inherit flex-[0.4]'>
                            <MainRightExploreMarket productFilter={productFilter[0]} />
                        </div>
                        
                    </div>
                </section>
            </div>
        </div>
    </>
  )
}

export default SingleProduct