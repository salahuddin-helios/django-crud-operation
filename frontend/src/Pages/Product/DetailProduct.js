import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './product.css'
import { FaPlus,FaMinus } from "react-icons/fa";
import toast from 'react-hot-toast';
import { useCartContext } from '../../Components/Reduce/Cart_Context';
const DetailProduct = () => {
    const {showCartIem,showCartIemUser} = useCartContext()
    const [productQuantity, setProductQuantity] = useState(1)
    const [product,setProduct] = useState({})
    const {name,price,image,detail} = product
    const {id} = useParams()
    const navigate = useNavigate()
    //get cart item detail
    const localUrl = process.env.REACT_APP_LOCAL_URL
    useEffect(()=>{
        axios.get(`${localUrl}product/${id}/`,{
            // headers:{
            //     'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            // }
        })
        .then(res=>{
          setProduct(res.data)
          
        })
    },[])
    // increase
    const setIncrease=()=>{
        setProductQuantity(productQuantity+1)
    }
    //decrease
    const setDecrease = ()=>{
        setProductQuantity(productQuantity-1)
    }
    // add to cart

    const addToCart = (product)=>{
        
        if (localStorage.getItem('access_token') == null) {
            navigate('/login')
           }
           
        else{
            const data = {'product':product,'quantity':productQuantity}
        axios.post(`${localUrl}user-product/`,data,
        {
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            }
        }
        )
        .then(res=>{
            toast.success('product added')
            showCartIem()
            showCartIemUser()
        })
        }
    }

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