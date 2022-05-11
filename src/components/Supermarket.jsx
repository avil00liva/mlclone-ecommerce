import React from 'react'
import Banner from './Banner'

const Supermarket = () => {
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


  return (
    <div className='w-full min-h-screen bg-gray-200'>
        <Banner banner={banner}/>
        Supermarket
    </div>
  )
}

export default Supermarket