import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import toast from 'react-hot-toast';
const CartContext = createContext()

const CartProvider = ({children}) => {
    const [UserProduct,setUserProduct] = useState([])
    const [UserProductDetail,setUserProductDetail] = useState([])
    // { headers: {"Authorization" : `Bearer ${localStorage.getItem('access_token')}`} }
  

    //Show cart Item
    const showCartIem =()=>{
        axios.get('http://127.0.0.1:8000/user-product/',{
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            }
        })
        .then(res=>{
          setUserProduct(res.data)
        })
      }
      useEffect(()=>{
        if(localStorage.getItem('access_token')){
            
            showCartIem()
        }
      },[])

      const showCartIemUser =()=>{
        axios.get('http://127.0.0.1:8000/user-details/',{
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            }
        })
        .then(res=>{
            setUserProductDetail(res.data)
        })
      }
      useEffect(()=>{
        if(localStorage.getItem('access_token')){
            
            showCartIemUser()
        }
      },[])
 
 
//Delete cart item
const deleteData = async (id) => {
    try {
       const response = await axios.delete(`http://127.0.0.1:8000/user-product/${id}/`);
       toast.success('Product Deleted')
      showCartIem()
      showCartIemUser()
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
        showCartIemUser,
        UserProductDetail
    }
    return (
        <CartContext.Provider value= {value}>{children}</CartContext.Provider>
    );
    
};
const useCartContext =()=>{
    return useContext(CartContext)
}

export  {CartProvider, useCartContext};