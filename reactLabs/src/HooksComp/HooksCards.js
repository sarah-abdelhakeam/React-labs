import React, { useEffect, useState } from 'react'
import HooksProducts from './HooksProducts'
import { products } from '../component/lab3/ProductData';

function HooksCards() {

  return (
        <div>
            {products.map((product, index) => (

            <div class="card" key={product.id}>

                <img src={product.img} class="image"/>
                <p>{product.name}</p>
                <h4><b>{product.price}</b></h4>
                <p>{product.category}</p>
                <p><HooksProducts /></p>
 
               
            </div>
  ))}

 </div>  
  )
}

export default HooksCards