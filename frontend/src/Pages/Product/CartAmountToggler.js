import React from 'react';

const CartAmountToggler = ({amount,setDecrease,setIncrease}) => {
    return (
        <div>
            <button onClick={()=>setIncrease()}>+</button>
            <h3>{amount}</h3>
            <button onClick={()=>setDecrease()}>-</button>
        </div>
    );
};

export default CartAmountToggler;