import React, {useState, createRef, useEffect} from 'react'

const Banner = ({banner}) => {

  const [scrollId, setScrollId]=useState(0)
  const [scrollX, setScrollX]=useState(null)
  const [showMarks, setShowMarks]=useState(true)
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

export default Banner