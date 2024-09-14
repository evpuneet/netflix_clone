import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NOTfound from './NOTfound'

export default function Home() {
  let [data, setData] = useState([])
  let productApi="https://dummyjson.com/products"

  let callApi=()=>{
    axios.get(productApi)
  .then((res)=>{return res.data})
  .then((final)=>{
    return setData(final.products)
  })
  }
  useEffect(()=>{
    callApi()
  }, [])

  
  return (
    <>
      <Header/>
      {data.length>=1? 
      <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl text-black p-4 font-semibold">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <ProductSingle product={product} key={product.id}/>
          ))}
        </div>
      </div>
      </div>
      :<NOTfound/>}
    </>
  )
}


let ProductSingle=({product})=>{
  return(
    <>
      <Link to={'/product-detail/'+product.id}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  alt={product.imageAlt}
                  src={product.thumbnail}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </Link>
    </>
  )
}