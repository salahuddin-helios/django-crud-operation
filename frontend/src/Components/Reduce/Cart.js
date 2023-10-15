import React, { useEffect, useState } from 'react';
import { useCartContext } from './Cart_Context';
import axios from 'axios';
import './Cart.css'
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
const Cart = () => {
  const {UserProduct,showCartIem,deleteData} = useCartContext()
    return (
        <div className='w-75 cart-data'>
        <table className="table text-white">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Checkout</th>
              <th scope="col">Delete</th>

            </tr>
          </thead>
          <tbody>
          

              {
                UserProduct &&
                UserProduct.map((product,id)=>
                <tr key={id}>
                  <th>{product.products.name}</th>
                  <th><img className='img-fluid' src={product.products.image} alt="" /></th>
                  <th>৳ {product.products.price}</th>
                  <th>{product.quantity}</th>
                  <th><Link>Buy now</Link></th>
                  <th><button onClick={()=>{deleteData(product.id)}}>X</button></th>
                </tr>
                )
              }
          </tbody>
        </table>
      </div>
    );
};

export default Cart;