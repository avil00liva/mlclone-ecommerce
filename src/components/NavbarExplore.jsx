import React, { useState, useEffect } from 'react'
import { BsGeoAlt, BsBell, BsCart2, BsSearch } from "react-icons/bs"
import { FaRegUserCircle, FaBars } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { usePosts } from '../context/PostsContext'
import NotifiBox from './NotifiBox'


const NavbarExplore = () => {
    const [notifi, setNotifi]=useState(false)
    const { mockProducts } = usePosts()
    const [filterMockProducts, setFilterMockProducts]=useState([])
    const [selectedWord, setSelectedWord]=useState("")
    const [menuOpen, setMenuOpen]=useState(false)
    const [menuCategories, setMenuCategories]=useState(false)
    const [categories, setCategories] = useState(mockProducts)
    const [listaItemsCat, setListaItemCat] = useState([])

    
    
    useEffect(()=>{
      const mapCategories = categories.map((mock)=> mock.categorie)
      const uniqueCategorie = [...new Set(mapCategories)]
      setListaItemCat(uniqueCategorie)
    },[])

    const handleFilter = (e)=>{
      const searchWord = e.target.value
      setSelectedWord(searchWord)
      const newFilter = mockProducts.filter((item)=>{
        return item.name.toLowerCase().includes(searchWord.toLowerCase())
      })
      if(searchWord == ""){
        setFilterMockProducts([])
      } else {
        setFilterMockProducts(newFilter)
      }
    }

    const showNoti=()=>{
        setNotifi(!notifi)
    }

    const menuList = [
        {
            itemList: <div onClick={()=> setMenuCategories(true)} >
                        Categorias
                      </div>
        }, 
        {
            itemList:"Ofertas",
            address:"ofertas",
        }, 
        {
            itemList:"Historial",
            address:"historial",
        }, 
        {
            itemList:"Supermercado",
            address:"supermercado",

        },
        {
            itemList:"Moda",
            address:"moda",
        }, 
        {
            itemList:"Vender",
            address:"vender",
        }, 
        {
            itemList:"Ayuda",
            address:"ayuda",
        }
    ]
    const menuUser = [
        {
            itemList: <div className='flex items-center'>
                        <FaRegUserCircle className='w-5 h-7 font-light mr-1' />
                        José..
                      </div>
        },
        {
            itemList: "Mis compras"
        },
        {
            itemList: "Favoritos"
        },
        {
            itemList: <BsBell className='w-5 h-7 font-light' onClick={showNoti} />
        },
        {
            itemList: <BsCart2 className='w-5 h-7 font-light' />
        }
    ]

  return (
    <nav className='text-black w-full min-h-[10px] bg-yellow-300 px-6 laptop:px-16 pt-3 navbarExploreSw relative z-[300]'>
        <div className='w-full min-h-[50px] flex justify-between items-start'>
            <Link to="/">
                <div className='mr-2'>
                    <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-black relative inline-block mr-2'>
                        <strong className='uppercase text-white z-50 relative '>
                            big
                        </strong> 
                    </span>
                    commerce
                </div>
            </Link>
            <div className='h-fit flex-grow mx-4 relative overflow-hidden flex items-center'>
                <input type="text" placeholder='Buscar productos, marcas y más...' className='w-full rounded-md placeholder:text-gray-300 outline-none border-0 py-2 px-4 text-base flex-grow ' value={selectedWord} onChange={handleFilter} />
                <div className='bg-transparent cursor-pointer flex items-center justify-center w-10 absolute top-0 h-full right-1'>
                    <Link to={`/market/productos/${selectedWord.toLowerCase()}`} onClick={()=> setFilterMockProducts([])}>
                        <BsSearch className='w-5 h-5' />
                    </Link>
                </div>
            </div>
            <div className='ml-2 hidden laptop:block'>
                <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-black relative inline-block mr-2'>
                    <strong className='uppercase text-white z-50 relative font-mono'>
                        Disney
                    </strong> 
                </span>
                <small className='hidden laptop:inline'>
                    Suscribite al nivel 6: beneficios exclusivos
                </small>
            </div>
            <div className='laptop:hidden self-start pt-2 flex items-center bg-inherit w-fit h-full'>
                <FaBars className="w-6 h-6 text-black cursor-pointer" onClick={()=>setMenuOpen(!menuOpen)}/>
            </div>
        </div>
        {menuOpen && 
            <div className='z-[200] w-full quini:w-[400px] min-h-screen absolute right-0 top-14 bg-yellow-300'>
                <ul className='flex flex-col justify-between items-start'>
                    {menuList.map((item, index)=>{
                        return (
                            <Link to={`/market/${item.address}`} className='w-full h-full' key={index}>
                                <li className='p-4 text-lg cursor-pointer text-gray-800 hover:text-black border-b border-b-gray-800 w-full transition-colors duration-300'>
                                    {item.itemList}
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        }



        <div className='hidden w-full min-h-[50px] bg-inherit laptop:flex justify-between items-center'>
            <div className='flex items-center'>
                <BsGeoAlt className='w-7 h-7 text-gray-700 font-extralight' />
                <span className='flex flex-col text-sm'>
                    <small className=''>Enviar a</small>
                    <strong className='font-medium'> Córdoba 5017</strong>
                </span>
            </div>
            <ul className='flex justify-between items-center flex-[0.9] relative'>
                {menuList.map((item, index)=>{
                    return (
                        <>
                        {item.address ?
                        <Link to={`/market/${item.address}`} className='w-full h-full' key={index}>
                            <li className='ml-2 text-sm cursor-pointer text-gray-800 hover:text-black transition-colors duration-300'>
                                {item.itemList}
                            </li>
                        </Link>
                        :
                        <li className='relative ml-2 w-full h-full text-sm cursor-pointer text-gray-800 hover:text-black transition-colors duration-300' key={index}>
                        {item.itemList}
                        </li>
                        }
                        
                        
                        {menuCategories && 
                            <div className='w-[250px] min-h-[80px] bg-[#262626] text-white absolute top-7 py-4' onMouseLeave={()=>setMenuCategories(false)}>
                                <ul className='w-full h-full'>
                                    {listaItemsCat.map((mock, index)=>{
                                        return (
                                            <Link to={`/market/categoria/${mock.toLowerCase()}`} className='w-full h-full' key={index}>
                                                <li className='w-full h-full text-sm hover:bg-blue-700 transition-colors duration-300 cursor-pointer pl-4 py-2' key={index}>
                                                    {mock}
                                                </li>
                                            </Link>
                                        )
                                    })}
                                </ul>
                            </div>
                        }
                        </>
                    )
                })}
            </ul>
            <ul className='flex justify-between items-center px-2'>
                {menuUser.map((item, index)=>{
                    return (
                        <li className='ml-2 text-sm cursor-pointer text-gray-800 hover:text-black transition-colors duration-300' key={index}>
                            {item.itemList}
                        </li>
                    )
                })}
            </ul>
        </div>
        {filterMockProducts?.length !== 0 && (
            <>
                <div className="z-[600] m-auto mt-[5px] w-[50%] min-w-[50%] h-[200px] bg-white shadow-md overflow-hidden overflow-y-auto absolute top-12 left-[16%]">
                    {filterMockProducts?.map((item, index)=>{
                        return (
                            <Link to={"/market/" + item.id} key={index}>
                                <div className="flex items-center text-gray-800 hover:bg-gray-300 transition-colors duration-200">
                                    <p className='ml-4 py-4'>{item.name}</p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </>
        )}
        {notifi && <NotifiBox />}
    </nav>
  )
}

export default NavbarExplore