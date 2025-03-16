import React from 'react'
import { Item } from '../../type'
import Image from 'next/image'

function Products({productData}:any) {
    // console.log(productData);

  return (
    <div className='py-6 px-4 grid grid-cols-4 gap-4'>
        {productData.map((item:Item)=>(
            <div className="border-[1px] border-gray-200 mb-6 group">
                <div className="w-full h-[350px] overflow-hidden p-1">
                    <Image 
                        width={300} 
                        height={250} 
                        className="w-full h-full object-contain scale-100 group-hover:scale-105"
                        src={item.images[1]}
                        alt="item Images"
                    ></Image>
                </div>  
            </div>
        ))}
    </div>
  )
}

export default Products