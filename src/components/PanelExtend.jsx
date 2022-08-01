import React, {useState} from 'react'

const PanelExtend = ({off}) => {
    const [panelActive, setPanelActive] = useState(false)
    const panelClicked = ()=>{
        setPanelActive(!panelActive)
    }

  return (
    <div className={`panel ${panelActive ? "active" : ""}`} onClick={panelClicked}>
        <img src={off.img} alt="Product preview" className='w-full h-full' />
        <h3>{off.name}</h3>
    </div>
  )
}

export default PanelExtend