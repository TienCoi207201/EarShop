import React from 'react'
import { products } from '../../data'
import './Product.css'
const Product = () => {
  return (
    <div className='product-container'>
        <div>
          {
            products &&
            products.map(item=>{
              return <>
                  <h1>{item.name}</h1>
                  <img  width={300} height ={300} src = {item.img} />
                  <p>{item.des}</p>
                  <span>{item.price}</span>
              </>           
            })
          }
        </div>
    </div>
  )
}

export default Product