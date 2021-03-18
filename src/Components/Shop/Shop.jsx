import React, { useEffect, useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData/index.js';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import {addToDatabaseCart, getDatabaseCart} from '../../utilities/databaseManager'; 
import { Link } from 'react-router-dom';
const Shop = () => {
    const firstTenProduct = fakeData.slice(0,10);
    const [products, setProducts]  = useState(firstTenProduct);
    const [cart , setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(existingKey => {
            const product = fakeData.find( pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey];
            return product;
        })
    })
    const handleCart = (product) => {
        let count = 1 ;
        let newCart;
        const toBeAddKey = product.key ;
        const sameProduct = cart.find(pd => pd.key === toBeAddKey);
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity =count;
            const ohters = cart.filter((pd) => pd.key  !== toBeAddKey);
            newCart = [...ohters, sameProduct];
        }else{
            product.quantity = 1 ;
            newCart = [...cart, product];
        }
        setCart(newCart)
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
                    <Cart cart = {cart}>
                    <Link to='/review' ><button className='btn'>Review Order</button></Link>
                    </Cart>
                </div>
            </section>   
        </>
    )
}

export default Shop
