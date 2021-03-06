import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData/index.js';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import {addToDatabaseCart} from '../../utilities/databaseManager'; 
const Shop = () => {
    const firstTenProduct = fakeData.slice(0,10);
    const [products, setProducts]  = useState(firstTenProduct);
    const [cart , setCart] = useState([]);

    const handleCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
        const sameProduct = newCart.filter(pd => pd.key === product.key);
        const count = sameProduct.length ;
        addToDatabaseCart(product.key, count);
    }

    return (
        <>
            <section className="shop-container">
                <div className="product-container">
                    {
                        products.map((product) => <Product key={product.key} handleCart = {handleCart} product = {product} showAddToCart = {true} />)
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
