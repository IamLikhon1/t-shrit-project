import React from 'react';
import './tshirt.css'

const Tshirt = ({tshirt,handleAddToCart}) => {
    // console.log(tshirt);
    const {picture,name,price}=tshirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price${price}</p>
            <button onClick={handleAddToCart}>Buy Now</button>
            
        </div>
    );
};

export default Tshirt;