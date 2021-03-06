import React, { useEffect, useState } from 'react'
import './Review.css';
import {getDatabaseCart,removeFromDatabaseCart} from '../../utilities/databaseManager';
import fakeData from '../../fakeData/index.js';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
const Review = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const savedData = getDatabaseCart();
        const productKeys = Object.keys(savedData);
        const cartProduct = productKeys.map((key) => {
            const product = fakeData.find((item) => item.key === key);
            product.quantity = savedData[key];
            return product ;
        })
    console.log(cartProduct);
    setCart(cartProduct);
    },[])
    const removeHandler = (key) => {
        const newCart = cart.filter((item) => item.key !== key);
        setCart(newCart)
        removeFromDatabaseCart(key);
    }
    return (
        <>
            <div className="shop-container">
                <div className="product-container">
                {
                cart.map(product => <ReviewItem remove = {removeHandler} key={product.key} product ={product}/>)
            }
                </div>
                <div className="cart-containr">
                    <Cart cart={cart} />
                </div>
            </div>
        </>
    )
}

export default Review
