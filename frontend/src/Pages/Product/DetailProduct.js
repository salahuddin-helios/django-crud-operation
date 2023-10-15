import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './product.css'
import { FaPlus,FaMinus } from "react-icons/fa";
import toast from 'react-hot-toast';
import { useCartContext } from '../../Components/Reduce/Cart_Context';
const DetailProduct = () => {
    const {showCartIem,setDecrease,setIncrease,productQuantity,addToCart} = useCartContext()
    const [product,setProduct] = useState({})
    const {name,price,image,detail} = product
    const {id} = useParams()
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/product/${id}/`)
        .then(res=>{
          setProduct(res.data)
          
        })
    },[])

    return (
        <div className='detail-product text-light'>
            <img className='img-fluid' src={image} alt="" />
            <div class="img-fluid">
        <div class="">
           <h5 className='card-title'>{name}</h5>
           <p className='card-price'>৳ {price}</p>
           <p className='card-detail'>Details: {detail}</p>
           <div className='product-quantity'>
            <p>Quantity</p>
            <button disabled={productQuantity === 1} className='decrease' onClick={()=>setDecrease()}><FaMinus></FaMinus></button>
            <span>{productQuantity}</span>
            <button className='increase' onClick={()=>setIncrease()}><FaPlus></FaPlus></button>
        </div>
           <button onClick={()=>addToCart(product.id)} className='btn btn-primary'>Add to Cart</button>
        </div>
        </div>
        </div>
    );
};

export default DetailProduct;