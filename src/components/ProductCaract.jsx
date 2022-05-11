import React from 'react'

const ProductCaract = () => {
    const caracteristicas = [
        {
            name: "Marca",
            value: "Stitch"
        },
        {
            name: "Modelo",
            value: "Stitch&Lilo"
        },
        {
            name: "Franquicia",
            value: "Disney"
        },
        {
            name: "Animal",
            value: "Stitch"
        },
        {
            name: "Personaje",
            value: "Stitch"
        },
    ]
  return (
    <div className='px-4 mb-4 w-full min-h-[100px] bg-inherit'>
        <h1 className='font-normal text-xl mb-4'>Características principales</h1>
        <section className='w-full min-h-[200px] bg-gray-100 rounded-lg overflow-hidden border border-gray-300 mb-4'>
            {caracteristicas.map((item, index)=>{
                return (
                    <div className='w-full h-[50px] text-sm bg-inherit flex justify-start items-center border-b border-b-gray-300' key={index}>
                        <div className='bg-gray-200 w-[150px] h-full flex justify-start items-center px-4 font-medium'>{item.name}</div>
                        <div className='bg-gray-100 w-full h-full flex justify-start items-center px-4'>{item.value}</div>
                    </div>
                )
            })}
        </section>
        <div className='w-full min-h-[80px] pb-8 mb-8 border-b border-b-gray-300'>
            <h2 className='font-normal text-lg mt-8 mb-4'>Otras características</h2>
            <div className='w-full min-h-[30px] flex justify-start items-center text-sm'>
                <div className='w-full min-h-[30px]'>
                    <p><strong className='font-medium'>Material:</strong> Peluche</p>
                </div>
                <div className='w-full min-h-[30px]'>
                    <p><strong className='font-medium'>Altura x Ancho:</strong> 20 cm x 0 cm</p>
                </div>
            </div>
            <p className='text-sm'><strong className='font-medium'>Es material hipoalergénico:</strong> No</p>
        </div>
        <div className='w-full min-h-[200px] my-4 bg-inherit'>
            <h1 className='font-normal text-xl mb-4'>Descripción</h1>
            <p className='text-base text-gray-400'>
                SOMOS MULTIVENTAS AZ
                MERCADOLIBRE PLATINUM UNOS DE LOS MEJORES VENDEDORES EN EL SITIO!!!
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos vel quo repellendus possimus expedita! Accusantium, ratione autem illum tempora velit eius dicta labore ex debitis?
                <br />
                <br />
                Visita mis otros artículos publicados. DESDE YA GRACIAS
            </p>
        </div>
    </div>
  )
}

export default ProductCaract