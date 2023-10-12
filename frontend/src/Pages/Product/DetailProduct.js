import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './product.css'
import { useCartContext } from '../../Components/Reduce/Cart_Context';
import toast from 'react-hot-toast';
const DetailProduct = () => {

  const [productQuantity, setProductQuantity] = useState(1)
    // const {addToCart} = useCartContext();
    const [product,setProduct] = useState({})
    const {name,price,image,detail} = product
    const {id} = useParams()
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/product/${id}/`)
        .then(res=>{
          setProduct(res.data)
        })
    },[])
    const addToCart = (product)=>{
        const data = {'product':product}
        axios.post('http://127.0.0.1:8000/user-product/',data)
        .then(res=>{
            toast.success('product added')
        })
    }
    const setIncrease=()=>{
        setProductQuantity(productQuantity+1)
    }
    const setDecrease = ()=>{
        setProductQuantity(productQuantity-1)
    }

    return (
        <div className='detail-product text-light'>
            <img src={image} alt="" />
            <div class="img-fluid">
        <div class="">
           <h3 className='card-title'>Name: {name}</h3>
           <h5>Price: {price}</h5>
           <p>Details: {detail}</p>
           <div>
            <button onClick={()=>setIncrease()}>+</button>
            <h3>{productQuantity}</h3>
            <button onClick={()=>setDecrease()}>-</button>
        </div>
           <button onClick={()=>addToCart(product.id)} className='btn btn-lg btn-primary'>Add to Cart</button>
        </div>
        </div>
        </div>
    );
};

export default DetailProduct;