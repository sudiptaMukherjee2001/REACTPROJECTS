import React from 'react'
import { useCart } from '../../Context/CartContex'

function Cart() {

    const cart = useCart();
    console.log("store value in context", cart)
    return (
        <>
            <h3>
                cart page
            </h3>


        </>
    )
}

export default Cart