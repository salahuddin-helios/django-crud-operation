import React, { useEffect, useState } from 'react';
import { useCartContext } from './Cart_Context';
import CartAmountToggler from '../../Pages/Product/CartAmountToggler';
import axios from 'axios';

const Cart = () => {
    // const {cart,setIncrease,setDecrease} = useCartContext();
    const [UserProduct,setUserProduct] = useState([])
    useEffect(()=>{
      axios.get('http://127.0.0.1:8000/user-product/')
      .then(res=>{
        setUserProduct(res.data)
      })
    },[])
    console.log(UserProduct);
    return (
        <div className='mt-4 w-75 cart-data mt-4'>
        <table className="table text-white">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">price</th>
            </tr>
          </thead>
          <tbody>
          

              {
                UserProduct &&
                UserProduct.map((product,id)=>
                <tr key={id}>
                  <th>{product.id}</th>
                  <th>{product.products.name}</th>
                  <th>{product.products.price}</th>
                  <th>
                  {/* <CartAmountToggler
           setDecrease={()=>setDecrease(product.id)}
           setIncrease={()=>setIncrease(product.id)}
           amount={amount}
           /> */}
                  </th>
                </tr>
                )
              }
          </tbody>
        </table>
      </div>
    );
};

export default Cart;