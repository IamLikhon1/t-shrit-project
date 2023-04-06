import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const tshirts=useLoaderData();
    const [cart, setCart]=useState();

    const handleAddToCart=tshirt=>{
        console.log(tshirt);
    }
    return (
        <div className='home-container'>
           <div className='t-shirt-container'>
           {
                tshirts.map(tshirt=><Tshirt
                key={tshirt._id}
                tshirt={tshirt}
                handleAddToCart={handleAddToCart}
                ></Tshirt>)
            }
           </div>
           <div className="cart-container">
            <Cart></Cart>
           </div>
            
        </div>
    );
};

export default Home;
<h1>this is home</h1>