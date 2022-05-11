import React, { useState } from 'react'
import { BsHeart, BsHeartFill, BsStarFill, BsStarHalf, BsTruck, BsArrowReturnLeft, BsShieldCheck, BsTrophy } from "react-icons/bs"
import { RiCloseFill } from "react-icons/ri"
import explore1 from "../../assets/images/explore/explore-1.webp"
import explore2 from "../../assets/images/explore/explore-2.webp"
import explore3 from "../../assets/images/explore/explore-3.webp"
import explore4 from "../../assets/images/explore/explore-4.webp"
import explore5 from "../../assets/images/explore/explore-5.webp"
import explore6 from "../../assets/images/explore/explore-6.webp"
import AskPart from './AskPart'
import MainRightExplore from './MainRightExplore'
import ProductCaract from './ProductCaract'
import RecommendedProducts from './RecommendedProducts'

const MainExplore = () => {
    const [fav, setFav]=useState(false)
    const products = [
        {   
            id:1,
            item: explore1
        },
        {
            id:2,
            item: explore2
        },
        {
            id:3,
            item: explore3
        },
        {
            id:4,
            item: explore4
        },
        {
            id:5,
            item: explore5
        },
        {
            id:6,
            item: explore6
        },
    ]
    

    const saveFav = ()=>{
        setFav(!fav)
    }

    const [selectedProduct, setSelectedProduct] = useState(1)
    const filterProduct = products.filter((product)=>{
        return product.id === selectedProduct
    })
    const changeProduct = ()=>{
        if(selectedProduct <= products.length - 1 ){
            setSelectedProduct(selectedProduct + 1)
        }
        else {
            setSelectedProduct(1)
        }
    }

  return (
    <div className='w-full min-h-screen bg-gray-200 px-16 py-4'>
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
        <div className='bg-inherit w-full min-h-[20px] mb-4 flex justify-between items-center'>
            <div className='flex flex-col bg-inherit text-sm'>Volver al listado | Juegos y Juguetes Peluches Stitch </div>
            <div className='flex mr-1 text-sm'>
                <span className='text-blue-600 cursor-pointer'>Compartir <strong className='text-gray-700 font-thin'>|</strong> </span>
                {" "}
                {" "}
                <span className='text-blue-600 cursor-pointer ml-1'> Vender uno igual</span>
            </div>
        </div>
        <section className='w-full min-h-[500px] navbarExploreSw2 bg-gray-100 p-4'>
            <div className='w-full h-full min-h-[500px] bg-inherit rounded-lg overflow-hidden flex'>
                <div className='w-full h-full bg-inherit flex-[0.9]'>
                    <div className='w-full h-fit bg-inherit flex justify-between border-b pb-4 border-b-gray-300'>
                        <div className='min-h-full w-[90px] bg-inherit p-2 flex flex-col items-center'>
                            {products.map((product, index)=>{
                                return (
                                    <div className='w-[60px] h-[60px] bg-inherit border border-gray-800 rounded-md cursor-pointer overflow-hidden mb-2 transition-opacity duration-300 hover:opacity-70' key={index} onMouseEnter={changeProduct}>
                                        <img src={product.item} alt="Product preview" className='h-full w-full object-contain' />
                                    </div>
                                )
                            })}
                        </div>
                        <div className='w-full min-h-auto max-h-fit bg-inherit flex items-center justify-center py-2'>
                            <div className='w-full h-[500px]'>
                                <img src={filterProduct[0].item} alt="Picture selected preview" className='object-contain h-full w-full' />
                            </div>
                        </div>
                    </div>
                    <RecommendedProducts />
                    <ProductCaract />
                    <AskPart />
                </div>




                <div className='my-1 ml-2 mr-1 w-full h-full min-h-[100px] bg-inherit flex-[0.4]'>
                    <MainRightExplore />
                </div>
                
            </div>
        </section>
    </div>
  )
}

export default MainExplore