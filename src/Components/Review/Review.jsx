import React, { useEffect, useState } from 'react'
import './Review.css';
import {getDatabaseCart,processOrder,removeFromDatabaseCart} from '../../utilities/databaseManager';
import fakeData from '../../fakeData/index.js';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImg from '../../images/giphy.gif';
const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    useEffect(() => {
        const savedData = getDatabaseCart();
        const productKeys = Object.keys(savedData);
        const cartProduct = productKeys.map((key) => {
            const product = fakeData.find((item) => item.key === key);
            product.quantity = savedData[key];
            return product ;
        })
    setCart(cartProduct);
    },[])
    const removeHandler = (key) => {
        const newCart = cart.filter((item) => item.key !== key);
        setCart(newCart)
        removeFromDatabaseCart(key);
    }
    const handlePlaceOrder = () => {
        setCart([]);
        processOrder();
        setOrderPlaced(true);
    }
    return (
        <>
            <div className="shop-container">
                <div className="product-container">
                {
                cart.map(product => <ReviewItem remove = {removeHandler} key={product.key} product ={product}/>)
            }

            {orderPlaced && <img src={happyImg} alt=""/> }
                </div>
                <div className="cart-containr">
                    <Cart cart={cart} >
                        <button onClick={handlePlaceOrder} className='btn'>Place order</button>
                    </Cart>
                </div>
            </div>
        </>
    )
}

export default Review
