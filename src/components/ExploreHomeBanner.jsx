import React, {useState, createRef, useEffect} from 'react'
import banner1 from "../assets/images/explore/banner-1.webp"
import banner2 from "../assets/images/explore/banner-2.webp"
import banner3 from "../assets/images/explore/banner-3.webp"
import banner4 from "../assets/images/explore/banner-4.webp"
import banner5 from "../assets/images/explore/banner-5.webp"
import banner6 from "../assets/images/explore/banner-6.webp"
import banner7 from "../assets/images/explore/banner-7.webp"

const ExploreHomeBanner = () => {
  const banner = [
      {
          id:1,
          banner: banner1 
      },
      {
          id:2,
          banner: banner2 
      },
      {
          id:3,
          banner: banner3 
      },
      {
          id:4,
          banner: banner4 
      },
      {
          id:5,
          banner: banner5 
      },
      {
          id:6,
          banner: banner6 
      },
      {
          id:7,
          banner: banner7 
      },
  ]
  const [scrollId, setScrollId]=useState(0)
  const [scrollX, setScrollX]=useState(null)
  const [showMarks, setShowMarks]=useState(true)
  const div = document.getElementById("container")
  const myRef= createRef()
  const scroll = (scrollOffset) => {
      myRef.current.scrollLeft += scrollOffset;
      setScrollId(scrollId + scrollOffset)
  };

  const showSteps = ()=>{
      setShowMarks(!showMarks)
  }

  useEffect(()=>{
      var div = document.getElementById("container")
      const hasHorizontalScrollbar = div?.scrollWidth === div?.clientWidth
      setScrollX(hasHorizontalScrollbar)
      if(scrollId >= div?.scrollWidth){
        scroll(-(div?.scrollWidth))
      }
  },[setScrollX, scrollId])


  return (
    <div className='w-full h-[340px] bg-yellow-200'>
        <div className='bannerCarrousel'>
            <div id='container' className='container bannerContent' ref={myRef}>
                {banner.map((item, index)=>{
                    return (
                        <div className='bannerC' key={index}>
                            <div className='overflow-hidden w-full h-[340px]'>
                                <img src={item.banner} alt="Products banner preview" className='min-w-full w-full laptop:w-[2000px] h-full object-cover' />
                            </div>
                        </div>
                    )
                })}
            </div>
            {scrollId >= div?.clientWidth && <button className={`${!showMarks ? "hidden" : "hidden quini:block z-30 w-10 text-blue-500 text-2xl font-medium h-16 bg-white absolute left-0 rounded-tr-full rounded-br-full border-b border-b-gray-800 hover:bg-gray-100 transition-colors duration-200 "}`} onClick={() => scroll(-(div?.clientWidth))}> - </button>}
            {!scrollX && <button className={`${!showMarks ? "hidden" : "hidden quini:block z-30 w-10 h-16 text-blue-500 text-2xl font-medium bg-white absolute right-0 rounded-tl-full rounded-bl-full border-b border-b-gray-800 hover:bg-gray-100 transition-colors duration-200"} `} onClick={() => scroll(div?.clientWidth)}> + </button>}
        </div>
    </div>
  )
}

export default ExploreHomeBanner