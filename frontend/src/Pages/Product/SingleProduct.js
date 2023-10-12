import React from 'react';
import { Link } from 'react-router-dom';
const SingleProduct = ({product}) => {
    const {id,image,name,price} = product
;
    return (
        <Link className="card" to={`/product/${id}/`} style={{width:'18rem'}} >
        <img className="card-img-top img-fluid" src={image} alt="Card image cap"/>
        <div className="card-body">
        <Link className='text-decoration-none' to={`/product/${id}/`} >{name}</Link>
          <p className="card-text">{price}</p>
        </div>
      </Link>
    );
};

export default SingleProduct;