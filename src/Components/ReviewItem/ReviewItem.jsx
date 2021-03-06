import React from 'react'
import './ReviewItem.css';
const ReviewItem = ({product, remove}) => {
    return (
        <>
            <div className="product-item-detail">
            <h3>{product.name}</h3>
            <p>Quantity: {product.quantity}</p>
            <p><small>Price:{product.price}</small></p>
            <button onClick={() => remove(product.key)} className="btn">remove</button>
            </div>
        </>
    )
}

export default ReviewItem
