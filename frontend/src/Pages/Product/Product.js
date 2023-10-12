import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './product.css'
import SingleProduct from './SingleProduct';
const Product = () => {
    const [products,setProduct] = useState([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/product/')
        .then(res=>{
            setProduct(res.data)
        })
    },[])
    return (
        <div className='product-view'>
            {
                products.map((product,id)=>{
                    return <SingleProduct
                    key={id}
                    product={product}
                    />
                })
            }
        </div>
    );
};

export default Product;