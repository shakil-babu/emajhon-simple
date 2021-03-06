import React from 'react'
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './ProductDetails.css';
const ProductDetails = (props) => {
    const {key} = useParams();
    const data = fakeData.find((item) => item.key == key);
    console.log(data);
    return (
        <>
            <Product showAddToCart = {false} product={data}/>
        </>
    )
}

export default ProductDetails
