import React from 'react'
import './Product.css';
import {FaShoppingCart} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Product = ({product, handleCart, showAddToCart}) => {
    const {img, name , seller ,stock , price, key} = product ;
    return (
        <>
            <div className="product-information">
                <img src={img} alt=""/>
                <div className="product-details">
                    <Link to={'/product/'+key}>{name}</Link>
                    <p><small>by: {seller}</small></p>
                    <p>${price}</p>
                    <p>only {stock} left in stock - order soon</p>
                   {showAddToCart &&  <button onClick={() => handleCart(product)} className='btn'><FaShoppingCart className='icon'/> add to cart</button>}
                </div>
            </div>   
        </>
    )
}

export default Product
