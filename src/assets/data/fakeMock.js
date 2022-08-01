import off1 from "../images/explore/Offs/off-1.jpg"
import off2 from "../images/explore/Offs/off-2.jpg"
import off3 from "../images/explore/Offs/off-3.jpg"
import off4 from "../images/explore/Offs/off-4.jpg"
import lavarropasInverter2 from "../images/explore/Lavarropas-Automatico-Whirlpool-Wlf80a-Inverter-2.webp"
import lavarropasInverter3 from "../images/explore/Lavarropas-Automatico-Whirlpool-Wlf80a-Inverter-3.webp"
import mousepad1 from "../images/explore/Mousepad-Anime-Xl-80x28cm-Cod038-Evangelion.webp"
import mousepad2 from "../images/explore/mousepad-2-xl-80x28cm.webp"
import mousepad3 from "../images/explore/mousepad-3-xl.webp"
import mousepad4 from "../images/explore/mousepad-4-xl.webp"
import dron1 from "../images/explore/dron-1.webp"
import dron2 from "../images/explore/dron-2.webp"
import dron3 from "../images/explore/dron-3.webp"
import camara1 from "../images/explore/camara-1.webp"
import camaras1 from "../images/explore/camara-seguridad-1.webp"
import camaras2 from "../images/explore/camara-seguridad-2.webp"
import camaras3 from "../images/explore/camara-seguridad-3.webp"
import calefactor1 from "../images/explore/calefactor-1.webp"
import bicicleta1 from "../images/explore/bicicleta-1.webp"
import alimentom1 from "../images/explore/alimento-mascota-1.webp"
import vino1 from "../images/explore/vino-1.webp"
import vino2 from "../images/explore/vino-2.webp"
import panhales1 from "../images/explore/panales-1.webp"
import coffee1 from "../images/explore/coffee-1.webp"

const fakeMock=[
    {
        id:1,
        name:"Lavarropas Automático Whirlpool Wlf80a Inverter 1",
        nameS:"lavarropas automático whirlpool wlf80a inverter 1",
        price:79.499,
        off:47,
        cout:"12x $ 6.624,92 sin interés",
        type:"lavarropas",
        general_type:"electrodomésticos",
        full:false,
        img:off1,
        caracteristicas_value: [
            {
                caract:"lavasecarropas", 
                value:"No"
            },
            {
                caract:"carga tipo", 
                value:"Frontal"
            },
            {
                caract:"energia", 
                value:"A++"
            },
            {
                caract:"capacidad lavado", 
                value:"8Kg"
            },
            {
                caract:"inverter", 
                value:"Si"
            }
        ],
        categorie: "Hogar"
    },
    {
        id:2,
        name:"Lavarropas Automático Whirlpool Wlf80a Inverter 2",
        nameS:"lavarropas automático whirlpool wlf80a inverter 2",
        price:79.499,
        off:47,
        cout:"12x $ 6.624,92 sin interés",
        type:"lavarropas",
        general_type:"electrodomésticos",
        full:false,
        img:lavarropasInverter2,
        caracteristicas_value:[
            {
                caract:"lavasecarropas", 
                value:"No"
            },
            {
                caract:"carga tipo", 
                value:"Frontal"
            },
            {
                caract:"energia", 
                value:"A++"
            },
            {
                caract:"capacidad lavado", 
                value:"8Kg"
            },
            {
                caract:"inverter", 
                value:"Si"
            }
        ],
        categorie: "Hogar"
    },
    {
        id:3,
        name:"Lavarropas Automático Whirlpool Wlf80a Inverter 3",        
        nameS:"lavarropas automático whirlpool wlf80a inverter 3",
        price:79.499,
        off:47,
        cout:"12x $ 6.624,92 sin interés",
        type:"lavarropas",
        general_type:"electrodomésticos",
        full:false,
        free: false,
        oferta:true,
        img:lavarropasInverter3,
        caracteristicas_value:[
            {
                caract:"lavasecarropas", 
                value:"No"
            },
            {
                caract:"carga tipo", 
                value:"Frontal"
            },
            {
                caract:"energia", 
                value:"A++"
            },
            {
                caract:"capacidad lavado", 
                value:"8Kg"
            },
            {
                caract:"inverter", 
                value:"Si"
            }
        ],
        categorie: "Hogar"
    },
    {
        id:4,
        name:"Lavarropas Automático Whirlpool Wlf80a Inverter 4",
        nameS:"lavarropas automático whirlpool wlf80a inverter 4",
        price:79.499,
        off:47,
        cout:"12x $ 6.624,92 sin interés",
        type:"lavarropas",
        general_type:"electrodomésticos",
        full:false,
        free: true,
        img:off1,
        caracteristicas_value:[
            {
                caract:"lavasecarropas", 
                value:"No"
            },
            {
                caract:"carga tipo", 
                value:"Frontal"
            },
            {
                caract:"energia", 
                value:"A++"
            },
            {
                caract:"capacidad lavado", 
                value:"8Kg"
            },
            {
                caract:"inverter", 
                value:"Si"
            }
        ],
        categorie: "Hogar"
    },
    {
        id:5,
        name:"Samsung Galaxy S22 Ultra 12gb + 256gb Phantom Black 1",
        name:"samsung galaxy s22 ultra 12gb + 256gb phantom black 1",
        price:219.999,
        off:11,
        cout:"9x $24.444,33 sin interés",
        type:"celulares",
        free: true,
        general_type:"tecnologia",
        full:true,
        img:off2,
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
        ],
        categorie: "Tecnologia"
    },
    {
        id:6,
        name:"Samsung Galaxy S21 Ultra 5G 256 GB  phantom black 12 GB RAM 2",
        price:219.999,
        off:11,
        cout:"9x $24.444,33 sin interés",
        type:"celulares",
        general_type:"tecnologia",
        full:true,
        free: true,
        img:off2,
        caracteristicas_value:[
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
        ],
        categorie: "Tecnologia"
    },
    {
        id:7,
        name:"Samsung Galaxy S20 FE 128 GB  cloud navy 6 GB RAM 3",
        price:219.999,
        off:11,
        cout:"9x $24.444,33 sin interés",
        type:"celulares",
        general_type:"tecnologia",
        full:true,
        img:off2,
        caracteristicas_value:[
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
        ],
        categorie: "Tecnologia"
    },
    {
        id:8,
        name:"Samsung Galaxy S21 Fe Gris Oscuro 5g 4",
        price:219.999,
        off:11,
        cout:"9x $24.444,33 sin interés",
        type:"celulares",
        general_type:"tecnologia",
        full:true,
        free: true,
        img:off2,
        caracteristicas_value:[
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
        ],
        categorie: "Tecnologia"
    },
    {
        id:9,
        name:"Heladera Inverter No Frost Whirlpool Wre57d2 Blanca Con Freezer 443l 220v 1",
        price:202.899,
        off:45,
        cout:"6x $ 33.816,5 sin interés",
        type:"heladeras",
        general_type:"electrodomésticos",
        full:false,
        img:off3,
        caracteristicas_value:[
            {
                caract:"color", 
                value:"Blanco"
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
                value:"WRM56D2"
            }
        ],
        categorie: "Hogar"
    },
    {
        id:10,
        name:"Heladera Inverter No Frost Whirlpool Wre57d2 Blanca Con Freezer 443l 220v 2",
        price:202.899,
        off:45,
        cout:"6x $ 33.816,5 sin interés",
        full:false,
        type:"heladeras",
        general_type:"electrodomésticos",
        img:off3,
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
        ],
        categorie: "Hogar"
    },
    {
        id:11,
        name:"Heladera Inverter No Frost Whirlpool Wre57d2 Blanca Con Freezer 443l 220v 3",
        price:202.899,
        off:45,
        cout:"6x $ 33.816,5 sin interés",
        type:"heladeras",
        general_type:"electrodomésticos",
        full:false,
        free: true,
        img:off3,
        caracteristicas_value:[
            {
                caract:"color", 
                value:"Inox"
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
                value:"RT38K5932SL"
            }
        ],
        categorie: "Hogar"
    },
    {
        id:12,
        name:"Heladera Inverter No Frost Whirlpool Wre57d2 Blanca Con Freezer 443l 220v 4",
        price:202.899,
        off:45,
        cout:"6x $ 33.816,5 sin interés",
        type:"heladeras",
        oferta:true,
        general_type:"electrodomésticos",
        full:false,
        img:off3,
        caracteristicas_value:[
            {
                caract:"color", 
                value:"Inox"
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
                value:"RT38K5932SL"
            }
        ],
        categorie: "Hogar"
    },
    {
        id:13,
        name:"Serum Iluminador Vitamina C Niacinamida Garnier X 30ml 1",
        price:1.849,
        off:5,
        cout:"",
        full:true,
        type:"accesorios",
        general_type:"limpieza",
        img:off4,
        caracteristicas_value:[
            {
                caract:"--", 
                value:'--'
            },
        ],
        categorie: "Accesorios"

    },
    {
        id:14,
        name:"Serum Iluminador Vitamina C Niacinamida Garnier X 30ml 2",
        price:1.849,
        off:5,
        cout:"",
        full:true,
        type:"accesorios",
        general_type:"limpieza",
        img:off4,
        caracteristicas_value:[
            {
                caract:"--", 
                value:'--'
            },
        ],
        categorie: "Accesorios"

    },
    {
        id:15,
        name:"Serum Iluminador Vitamina C Niacinamida Garnier X 30ml 3",
        price:1.849,
        off:5,
        cout:"",
        full:true,
        type:"accesorios",
        general_type:"limpieza",
        img:off4,
        caracteristicas_value:[
            {
                caract:"--", 
                value:'--'
            },
        ],
        categorie: "Accesorios"

    },
    {
        id:16,
        name:"Serum Iluminador Vitamina C Niacinamida Garnier X 30ml 4",
        price:1.849,
        off:5,
        cout:"",
        full:true,
        oferta:false,
        type:"celulares",
        general_type:"tecnologia",
        img:off4,
        caracteristicas_value:[
            {
                caract:"--", 
                value:'--'
            },
        ],
        categorie: "Accesorios"

    },
    {
        id:17,
        name:"Samsung Galaxy S22 Ultra 12gb + 256gb Phantom Black 1",
        price:219.999,
        off:11,
        cout:"9x $24.444,33 sin interés",
        type:"celulares",
        general_type:"tecnologia",
        full:true,
        img:off2,
        caracteristicas_value:[
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
        ],
        categorie: "Tecnologia"

    },
    {
        id:18,
        name:"Samsung Galaxy S22 Ultra 12gb + 256gb Phantom Black 2",
        price:219.999,
        off:11,
        cout:"9x $24.444,33 sin interés",
        type:"celulares",
        general_type:"tecnologia",
        full:true,
        img:off2,
        caracteristicas_value:[
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
        ],
        categorie: "Tecnologia"

    },
    {
        id:19,
        name:"Samsung Galaxy S22 Ultra 12gb + 256gb Phantom Black 3",
        price:219.999,
        off:11,
        cout:"9x $24.444,33 sin interés",
        type:"celulares",
        general_type:"tecnologia",
        full:true,
        img:off2,
        caracteristicas_value:[
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
        ],
        categorie: "Tecnologia"

    },
    {
        id:20,
        name:"Samsung Galaxy S22 Ultra 12gb + 256gb Phantom Black 4",
        price:219.999,
        off:11,
        cout:"9x $24.444,33 sin interés",
        full:true,
        oferta:true,
        type:"celulares",
        general_type:"tecnologia",
        img:off2,
        caracteristicas_value:[
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
        ],
        categorie: "Tecnologia"

    },
    {
        id:21,
        name: "Mousepad Anime Xl *80x28,5cm* Cod:038 Evangelion",
        price: "2.150",
        off:"",
        cout:"12x 304",
        free: true,
        full:true,
        img:mousepad1,
        type:"accesorio",
        general_type:"gaming",
        caracteristicas_value:[
            {
                caract:"marca", 
                value:'OMAIGAT'
            },
            {
                caract:"modelo",
                value:"XL"
            },
            {
                caract:"Tamaño de pad", 
                value:"XL"
            },
            {
                caract:"Ancho y largo", 
                value:"80 cm x 28.5cm"
            },
            {
                caract:"Alto", 
                value:"3mm"
            }
        ],
        categorie: "Gaming"
    },
    {
        id:22,
        name: "Mouse Pad Gamer Gatitos Xxl (90x46cm) Cod:001 - Pixel City",
        price: 2.995,
        off:"",
        cout:"12x 410",
        full:false,
        img:mousepad2,
        type:"accesorio",
        general_type:"gaming",
        caracteristicas_value:[
            {
                caract:"marca", 
                value:'OMAIGAT'
            },
            {
                caract:"modelo",
                value:"XL"
            },
            {
                caract:"Tamaño de pad", 
                value:"XL"
            },
            {
                caract:"Ancho y largo", 
                value:"80 cm x 28.5cm"
            },
            {
                caract:"Alto", 
                value:"3mm"
            }
        ],
        categorie: "Gaming"
    },
    {
        id:23,
        name: "Mousepad Paisaje Xxl *90x40cm* Cod:007",
        price: 2.995,
        off:"",
        cout:"12x 410",
        full:false,
        img:mousepad3,
        type:"accesorio",
        general_type:"gaming",
        caracteristicas_value:[
            {
                caract:"marca", 
                value:'OMAIGAT'
            },
            {
                caract:"modelo",
                value:"XL"
            },
            {
                caract:"Tamaño de pad", 
                value:"XL"
            },
            {
                caract:"Ancho y largo", 
                value:"90 cm x 46.5cm"
            },
            {
                caract:"Alto", 
                value:"3mm"
            }
        ],
        categorie: "Gaming"
    },
    {
        id:24,
        name: "Mouse Pad Redragon P003 Suzaku de caucho y tela xl 300mm x 800mm x 3mm negro/rojo",
        price: 2.299,
        off:"",
        cout:"12x 410",
        oferta:true,
        full:true,
        free: true,
        img:mousepad4,
        caracteristicas_value:[
            {
                caract:"marca", 
                value:'Redragon'
            },
            {
                caract:"modelo",
                value:"P003"
            },
            {
                caract:"Tamaño de pad", 
                value:"XL"
            },
            {
                caract:"Ancho y largo", 
                value:"800mm x 300mm"
            },
            {
                caract:"Alto", 
                value:"3mm"
            }
        ],
        type:"accesorio",
        general_type:"gaming",
        categorie: "Gaming"
    },
    {
        id:25,
        name: "Mini drone DJI Mavic Mini 2 DRDJI018 Fly More Combo con cámara 4K light gray 3 baterías",
        price: 154.999,
        off:"30",
        cout:"12x 21980",
        oferta:false,
        full:true,
        free: true,
        img:dron1,
        caracteristicas_value:[
            {
                caract:"Resolución máxima de la cámara", 
                value:'4K'
            },
            {
                caract:"Velocidad máxima",
                value:"16 m/s"
            },
            {
                caract:"Cantidad de baterías", 
                value:"3"
            },
            {
                caract:"Tiempo máximo de vuelo", 
                value:"31 m"
            },
            {
                caract:"Cantidad de motores", 
                value:"4"
            }
        ],
        type:"dron",
        general_type:"cameras",
        categorie: "Tecnologia"
    },
    {
        id:26,
        name: "Canon EOS Rebel Kit T100 + lente 18-55mm III DSLR color negro",
        price: 122.750,
        off:"5",
        cout:"6x 20458 pesos",
        oferta:false,
        full:false,
        free: false,
        img:camara1,
        caracteristicas_value:[
            {
                caract:"Marca", 
                value:'Canon'
            },
            {
                caract:"Línea",
                value:"EOS Rebel"
            },
            {
                caract:"Modelo", 
                value:"Kit T100 + lente 18-55mm III"
            },
            {
                caract:"Color", 
                value:"Negro"
            },
            {
                caract:"Es kit", 
                value:"Sí"
            }
        ],
        type:"camera",
        general_type:"cameras",
        categorie: "Tecnologia"
    },
    {
        id:27,
        name: "Camara de seguridad Ezviz C3WN 2.8mm con resolución de 2MP visión nocturna incluida blanca",
        price: 8.200,
        off:"-",
        cout:"12x 1162 pesos",
        oferta:false,
        full:false,
        free: false,
        img:camaras1,
        caracteristicas_value:[
            {
                caract:"Tipo de cámara", 
                value:'Domo'
            },
            {
                caract:"Con visión nocturna",
                value:"Sí"
            },
            {
                caract:"Con micrófono", 
                value:"Sí"
            },
            {
                caract:"Modelo", 
                value:"C3WN 2.8mm"
            },
            {
                caract:"Color", 
                value:"Blanco"
            }
        ],
        type:"camera-seguridad",
        general_type:"cameras",
        categorie: "Tecnologia"
    },
    {
        id:28,
        name: "Camara de seguridad Smart Tech N8-200W-IR con resolución de 2MP visión nocturna incluida blanca",
        price: 8.699,
        off:"-",
        cout:"12x 1162 pesos",
        oferta:true,
        full:true,
        free: false,
        img:camaras2,
        caracteristicas_value:[
            {
                caract:"Tipo de cámara", 
                value:'Domo'
            },
            {
                caract:"Con visión nocturna",
                value:"Sí"
            },
            {
                caract:"Con micrófono", 
                value:"Sí"
            },
            {
                caract:"Modelo", 
                value:"C3WN 2.8mm"
            },
            {
                caract:"Color", 
                value:"Blanco"
            }
        ],
        type:"camera-seguridad",
        general_type:"cameras",
        categorie: "Tecnologia"
    },
    {
        id:29,
        name: "Camara de seguridad Ezviz C6N con resolución de 2MP visión nocturna incluida blanca",
        price: 5.792,
        off:"-",
        cout:"12x 821 pesos",
        oferta:false,
        full:true,
        free: true,
        img:camaras3,
        caracteristicas_value:[
            {
                caract:"Tipo de cámara", 
                value:'Domo'
            },
            {
                caract:"Con visión nocturna",
                value:"Sí"
            },
            {
                caract:"Con micrófono", 
                value:"Sí"
            },
            {
                caract:"Modelo", 
                value:"C3WN 2.8mm"
            },
            {
                caract:"Color", 
                value:"Blanco"
            }
        ],
        type:"camera-seguridad",
        general_type:"cameras",
        categorie: "Tecnologia"
    },
    {
        id:30,
        name: "Spy Drone Con Lentes Realidad Virtual Y Control Remoto Xtrem",
        price: 25.609,
        off:"-",
        cout:"12x 3631",
        oferta:false,
        full:false,
        free: false,
        img:dron2,
        caracteristicas_value:[
            {
                caract:"Tiempo máximo de vuelo", 
                value:'10 m'
            },
            {
                caract:"Cantidad de motores",
                value:"4"
            },
        ],
        type:"dron",
        general_type:"cameras",
        categorie: "Tecnologia"
    },
    {
        id:31,
        name: "Drone Daming DM107S con cámara FullHD black 1 batería",
        price: 10.890,
        off:"-",
        cout:"12x 1544",
        oferta:true,
        full:true,
        free: false,
        img:dron3,
        caracteristicas_value:[
            {
                caract:"Resolución máxima de la cámara", 
                value:'Full HD'
            },
            {
                caract:"Velocidad máxima",
                value:"11 m/s"
            },
            {
                caract:"Cantidad de baterías", 
                value:"1"
            },
            {
                caract:"Tiempo máximo de vuelo", 
                value:"10 m"
            },
            {
                caract:"Cantidad de motores", 
                value:"4"
            }
        ],
        type:"dron",
        general_type:"cameras",
        categorie: "Tecnologia"
    },
    {
        id:32,
        name: "Calefactor eléctrico convector Peabody PE-VC20 negro 220V",
        price: 13.599,
        off:"24",
        cout:"12x 1928",
        oferta:true,
        full:true,
        free: true,
        img:calefactor1,
        caracteristicas_value:[
            {
                caract:"Marca", 
                value:'Peabody'
            },
            {
                caract:"Modelo",
                value:"PE-VC20"
            },
            {
                caract:"Color", 
                value:"Negro"
            },
            {
                caract:"Voltaje", 
                value:"220V"
            },
            {
                caract:"Material", 
                value:"Vidrio"
            }
        ],
        type:"calefactor",
        general_type:"calefaccion",
        categorie: "Hogar"
    },
    {
        id:33,
        name: "Bicicleta Raleigh 2.0 Rod 29 Disco Env Grat Cuotas Sin Inter",
        price: 96.299,
        off:"10",
        cout:"12x 8.024",
        oferta:false,
        full:true,
        free: false,
        img:bicicleta1,
        caracteristicas_value:[
            {
                caract:"Marca", 
                value:'Raleigh'
            },
            {
                caract:"Rodado", 
                value:'29'
            },
            {
                caract:"Tipo de bicicleta",
                value:"Mountain bike"
            },
            {
                caract:"Cantidad de velocidades", 
                value:"21"
            },
            {
                caract:"Grupo etario", 
                value:"Adultos"
            },
            {
                caract:"Material", 
                value:"Aluminio"
            }
        ],
        type:"bicicleta",
        general_type:"bicicleta",
        categorie: "Transporte"
    },
    {
        id:34,
        name: "Alimento Pedigree Óptima Digestión Etapa 2 para perro adulto todos los tamaños sabor carne, pollo y cereales en bolsa de 21 kg",
        price: 4.335,
        off:"15",
        cout:"12x 614",
        oferta:true,
        full:false,
        free: false,
        img:alimentom1,
        caracteristicas_value:[
            {
                caract:"Mascota recomendada", 
                value:'Perro'
            },
            {
                caract:"Tamaño de la raza", 
                value:'Todos los tamaños'
            },
            {
                caract:"Sabor",
                value:"Carne/Pollo/Cereales"
            },
            {
                caract:"Etapa de vida de la mascota", 
                value:"Adulto"
            },
            {
                caract:"Tipo de comida", 
                value:"Seca"
            },
        ],
        type:"mascotas",
        general_type:"comida",
        categorie: "supermercado"
    },
    {
        id:35,
        name: "Vino (combo Premiun Caja 6 Botellas X 750) Rutini 1. Quirino",
        price: 5.114,
        off:"32",
        cout:"12x 725",
        oferta:true,
        full:false,
        free: true,
        img:vino1,
        caracteristicas_value:[
            {
                caract:"Bodega", 
                value:'Rutini / Finca / Bianchi / Cafayate / Reserva de Los Andes'
            },
            {
                caract:"Marca", 
                value:'Rutini / Finca / Bianchi / Cafayate / Reserva de Los Andes'
            },
            {
                caract:"Línea",
                value:"Rutini / Finca / Bianchi / Cafayate / Reserva de Los Andes"
            },
            {
                caract:"Año", 
                value:"2019"
            },
            {
                caract:"Varietal", 
                value:"Malbec/Cabernet"
            },
            {
                caract:"Volumen de la unidad", 
                value:"750 mL"
            },
        ],
        type:"bebida",
        general_type:"comida",
        categorie: "supermercado"
    },
    {
        id:36,
        name: "Pañales Pampers Premium Care  XXG 54 u",
        price: 2.238,
        off:"22",
        cout:"12x 317",
        oferta:false,
        full:true,
        free: false,
        img:panhales1,
        caracteristicas_value:[
            {
                caract:"Marca", 
                value:'Pampers'
            },
            {
                caract:"Línea",
                value:"Premium Care"
            },
            {
                caract:"Tamaño", 
                value:"XXG"
            },
            {
                caract:"Unidades por envase", 
                value:"54"
            },
        ],
        type:"higiene",
        general_type:"higiene",
        categorie: "supermercado"
    },
    {
        id:37,
        name: "16 Capsulas Cortado Espresso Dolce Gusto Nescafe Capsuland",
        price: 819,
        off:"37",
        cout:"12x 159",
        oferta:false,
        full:false,
        free: false,
        img:coffee1,
        caracteristicas_value:[
            {
                caract:"Marca", 
                value:'Nescafé Dolce Gusto'
            },
            {
                caract:"Línea",
                value:"Dolce Gusto"
            },
            {
                caract:"Variedad de la infusión", 
                value:"Cortado"
            },
            {
                caract:"Unidades por envase", 
                value:"16"
            },
            {
                caract:"Unidades por pack", 
                value:"1"
            },
        ],
        type:"bebida",
        general_type:"comida",
        categorie: "supermercado"
    },
    {
        id:38,
        name: "Combo Vinos Tintos Premium Dv Catena Escorihuela Desquiciado",
        price: 4711,
        off:"25",
        cout:"12x 668",
        oferta:false,
        full:false,
        free: true,
        img:vino2,
        caracteristicas_value:[
            {
                caract:"Bodega", 
                value:'Escorihuela Gascón | Catena Zapata | Desquiciado Wines | Pascual Toso | El Esteco | Norton'
            },
            {
                caract:"Marca",
                value:"Escorihuela Gascón | D.V. Catena | Desquiciado | Pascual Toso | Elementos | Elegido"
            },
            {
                caract:"Línea", 
                value:"Escorihuela Gascón Organic"
            },
            {
                caract:"Variedad", 
                value:"Tinto"
            },
            {
                caract:"Varietal", 
                value:"Malbec | Cabernet Sauvignon | Cabernet Franc | Cabernet Malbec"
            },
            {
                caract:"Volumen de la unidad", 
                value:"750mL"
            },
        ],
        type:"bebida",
        general_type:"comida",
        categorie: "supermercado"
    },

]

export default fakeMock;