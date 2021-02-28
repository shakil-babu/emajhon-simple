import React from 'react'
import './Product.css';
import {FaShoppingCart} from 'react-icons/fa';
const Product = ({product, handleCart}) => {
    const {img, name , seller ,stock , price} = product ;
    return (
        <>
            <div className="product-information">
                <img src={img} alt=""/>
                <div className="product-details">
                    <a href="">{name}</a>
                    <p><small>by: {seller}</small></p>
                    <p>${price}</p>
                    <p>only {stock} left in stock - order soon</p>
                    <button onClick={() => handleCart(product)} className='btn'><FaShoppingCart className='icon'/> add to cart</button>
                </div>
            </div>   
        </>
    )
}

export default Product
