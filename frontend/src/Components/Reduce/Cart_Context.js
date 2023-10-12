import React, { createContext, useContext, useReducer } from 'react';
const CartContext = createContext()

const CartProvider = ({children}) => {
    const initialState = {
        cart: []
    }
    const reducer =(state,action)=>{

        // add to cart reducer
        if(action.type ==='ADD_TO_CART'){
            let {product} = action.payload;
            console.log(product);
            let cartProduct;
            cartProduct = {
                name: product.name,
                price: product.price,
                image: product.image
            }
            return {
                ...state,
                cart: [...state.cart,cartProduct]
            }
            
        }
        //decrement item
        else if(action.type === 'SET_DECREMENT'){
            let updatedProduct = state.cart.map((currEl)=>{
                if(currEl.id === action.payload){
                    console.log(currEl);
                } 
            })
        }
       
    }
   
    
    const [state, dispatch] = useReducer(reducer,initialState)
    //add to cart
    const addToCart =(product)=>{
        dispatch({type:"ADD_TO_CART",payload:{product}})
    }
    const setDecrease = (id)=>{
        dispatch({type:'SET_DECREMENT',payload:id})
    }
    const setIncrease = (id)=>{
        dispatch({type:'SET_INCREMENT', payload:id})
    }
    return (
        <CartContext.Provider value={{
            ...state,
            addToCart,
            setDecrease,
            setIncrease
        }}>{children}</CartContext.Provider>
    );
    
};
const useCartContext =()=>{
    return useContext(CartContext)
}

export  {CartProvider, useCartContext};