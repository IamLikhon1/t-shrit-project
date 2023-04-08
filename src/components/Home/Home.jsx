import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';

const Home = () => {
    const tshirts=useLoaderData();
    const [cart, setCart]=useState([]);

    const handleAddToCart=tshirt=>{
        // console.log(tshirt);
        const exit=cart.find(ts=>ts._id===tshirt._id)
        if(exit){
            toast.success('You have already added a t-shirt')
        }
        else{

            const newCart=[...cart, tshirt];
            setCart(newCart)
        }
    }
    const handleRemoveToCart=id=>{
        // console.log(id);
        const remaining=cart.filter(ts=>ts._id!==id)
        setCart(remaining)
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
            <Cart cart={cart}
            handleRemoveToCart={handleRemoveToCart}
            ></Cart>
           </div>
            
        </div>
    );
};

export default Home;
<h1>this is home</h1>