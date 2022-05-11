import off1 from "../images/explore/Offs/off-1.jpg"
import off2 from "../images/explore/Offs/off-2.jpg"
import off3 from "../images/explore/Offs/off-3.jpg"
import off4 from "../images/explore/Offs/off-4.jpg"

const fakeOffs = [
    {
        id:1,
        name:"Lavarropas Automático Whirlpool Wlf80a Inverter",
        price:79.499,
        off:47,
        cout:"12x $ 6.624,92 sin interés",
        full:false,
        img:off1,
        type:"lavarropas",
        caracteristicas_value: [
            {
                caract:"lavasecarropas",
                value: "No",
            },
            {    
                caract: "carga tipo",
                value:"Frontal"
            },
            { 
                caract:"energia", 
                value: "A++",
            },
            {
                caract: "capacidad lavado", 
                value: "8Kg"
            },
            {
                caract: "inverter", 
                value: "Si"
            },
         ]

    },
    {
        id:2,
        name:"Samsung Galaxy S22 Ultra 12gb + 256gb Phantom Black",
        price:219.999,
        off:11,
        cout:"9x $24.444,33 sin interés",
        full:true,
        img:off2,
        type:"celulares",
        caracteristicas_value: [
            {
                caract:"pantalla", 
                value:'6.8"'
            },
            {
                caract:"memoria interna",
                value:"256 GB"
            },
            {
                caract:"camara trasera", 
                value:"108 Mpx"
            },
            {
                caract:"camara frontal", 
                value:"40 Mpx"
            }
        ]
    },
    {
        id:3,
        name:"Heladera Inverter No Frost Whirlpool Wre57d2 Blanca Con Freezer 443l 220v",
        price:202.899,
        off:45,
        cout:"6x $ 33.816,5 sin interés",
        full:false,
        img:off3,
        type:"heladeras",
        caracteristicas_value:[
            {
                caract:"color", 
                value:"Elegant inox"
            },
            {
                caract:"voltaje", 
                value:"220V"
            },
            {
                caract:"panel", 
                value:"Digital"
            },
            {
                caract:"freezer", 
                value:"Sí"
            },
            {
                caract:"modelo detail", 
                value:"RT29K577JS8"
            }
        ]
    },
    {
        id:4,
        name:"Serum Iluminador Vitamina C Niacinamida Garnier X 30ml",
        price:1.849,
        off:5,
        cout:"",
        full:true,
        img:off4,
        type:"",
        caracteristicas_value: [
            {
                caract:"null", 
                value:'--',
            }
        ]

    },
    {
        id:5,
        name:"Samsung Galaxy S22 Ultra 12gb + 256gb Phantom Black",
        price:219.999,
        off:11,
        cout:"9x $24.444,33 sin interés",
        full:true,
        img:off2,
        type:"celulares",
        caracteristicas_value: [
            {
                caract:"pantalla", 
                value:'6.8"'
            },
            {
                caract:"memoria interna", 
                value:"256 GB"
            },
            {
                caract:"camara trasera", 
                value:"108 Mpx"
            },
            {
                caract:"camara frontal", 
                value:"40 Mpx"
            }
        ]
    },
]

export default fakeOffs