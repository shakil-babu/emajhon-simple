import React from 'react' ;
import './Cart.css';

const Cart = ({cart}) => {
    let productPrice = cart.reduce((total, cur) => total + cur.price , 0).toFixed(2);
    
    const shipping = (total) =>{
        let Shipping = 0 ;
        if(total > 0){
            Shipping = 0 ;
        }else if(total > 15){
            Shipping = 12
        }else if(total > 35){
            Shipping = 4
        }
        return Shipping ;
    }
    const shippingCost = shipping(productPrice);
    console.log(shippingCost)
    let totalPrice = productPrice + shippingCost ;
    const tax = (productPrice / 10).toFixed(2);
    const grandTotal = totalPrice + tax ;
    return (
        <>
            <section className="cart-details">
            <h3>Order Summery</h3>
            <h5>{cart.length > 1 ? 'Items':'Item'} ordered: {cart.length}</h5>
            <p>Product price: {productPrice} </p>
            <p>Shipping cost : {shippingCost} </p>
            <p>Tax + VAT : {tax} </p>
            <p>Total price: {totalPrice}</p>
            <h5>Order Total: {grandTotal} </h5>
            </section>   
        </>
    )
}

export default Cart
