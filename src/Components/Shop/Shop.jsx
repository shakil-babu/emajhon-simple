import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData/index.js';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const firstTenProduct = fakeData.slice(0,10);
    const [products, setProducts]  = useState(firstTenProduct);
    const [cart , setCart] = useState([]);

    const handleCart = (product) => {
        console.log('Product added', product);
        const newCart = [...cart, product];
        setCart(newCart)
    }

    return (
        <>
            <section className="shop-container">
                <div className="product-container">
                    {
                        products.map((product) => <Product handleCart = {handleCart} product = {product} />)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart = {cart}/>
                </div>
            </section>   
        </>
    )
}

export default Shop
