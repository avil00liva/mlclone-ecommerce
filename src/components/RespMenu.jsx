import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const RespMenu = ({menuList, setMenuOpen, listaItemsCat}) => {
    const [categoriesOpen, setCategoriesOpen]=useState(false)
    const filterMenuItems = menuList.filter((item, index)=> index !== 0)
    
    console.log(categoriesOpen)

  return (
    <div className='z-[200] w-full quini:w-[400px] min-h-screen absolute right-0 top-14 bg-yellow-300'>
        <ul className='flex flex-col justify-between items-start'>
            <li className='p-4 text-lg cursor-pointer text-gray-800 hover:text-black border-b border-b-gray-800 w-full transition-colors duration-300' onClick={()=>{setCategoriesOpen(!categoriesOpen)}}>Categorias</li>
            {categoriesOpen &&
                <div className='w-full min-h-[80px] bg-[#262626] text-white py-4'>
                    <ul className='w-full h-full'>
                        {listaItemsCat.map((mock, index)=>{
                            return (
                                <Link to={`/market/categoria/${mock.toLowerCase()}`} className='w-full h-full' key={index} onClick={()=> setMenuOpen(false)}>
                                    <li className='w-full h-full text-sm hover:bg-blue-700 transition-colors duration-300 cursor-pointer pl-8 py-2' key={index}>
                                        {mock}
                                    </li>
                                </Link>
                            )
                        })}
                    </ul>
                </div>
            }
            {filterMenuItems.map((item, index)=>{
                return (
                    <Link to={`/market/${item.address}`} className='w-full h-full' key={index} onClick={()=>{setMenuOpen(false)}}>
                        <li className='p-4 text-lg cursor-pointer text-gray-800 hover:text-black border-b border-b-gray-800 w-full transition-colors duration-300'>
                            {item.itemList}
                        </li>
                    </Link>
                )
            })}
        </ul>
    </div>
  )
}

export default RespMenu