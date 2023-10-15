import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import toast from 'react-hot-toast';
const CartContext = createContext()

const CartProvider = ({children}) => {
    const [UserProduct,setUserProduct] = useState([])
    const [productQuantity, setProductQuantity] = useState(1)
    // add to cart
    console.log(productQuantity);
    const addToCart = (product)=>{
        const data = {'product':product,'quantity':productQuantity}
        console.log(data);
        axios.post('http://127.0.0.1:8000/user-product/',data)
        .then(res=>{
            toast.success('product added')
            showCartIem()
        })
        console.log(data);
    }
    const setIncrease=()=>{
        setProductQuantity(productQuantity+1)
    }
    const setDecrease = ()=>{
        setProductQuantity(productQuantity-1)
    }


    //Show cart Item
    const showCartIem =()=>{
        axios.get('http://127.0.0.1:8000/user-product/')
        .then(res=>{
          setUserProduct(res.data)
        })
      }
      useEffect(()=>{
        showCartIem()
      },[])
//Delete cart item
const deleteData = async (id) => {
    console.log(id);
    try {
       const response = await axios.delete(`http://127.0.0.1:8000/user-product/${id}/`);
       toast.success('Product Deleted')
      showCartIem()
    } catch (error) {
       console.error(error);
    }
 };
//  sign up here



 // pass data
    const value = {
        UserProduct,
        showCartIem,
        deleteData,
        addToCart,
        setDecrease,
        setIncrease,
        productQuantity
    }
    return (
        <CartContext.Provider value= {value}>{children}</CartContext.Provider>
    );
    
};
const useCartContext =()=>{
    return useContext(CartContext)
}

export  {CartProvider, useCartContext};