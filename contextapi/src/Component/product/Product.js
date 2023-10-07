import React from 'react'
import Productpage from '../Productpage/Productpage'
import Cart from '../Cart/Cart'

function Product() {
    return (
        <>
            <h2>Product page</h2>
            <Productpage productName={'Iphone1'} productPrice={'$100'} />
            <Productpage productName={'Iphone2'} productPrice={'$200'} />
            <Productpage productName={'Iphone3'} productPrice={'$300'} />
            <Productpage productName={'Iphone4'} productPrice={'$400'} />
            <Cart />
        </>
    )
}

export default Product