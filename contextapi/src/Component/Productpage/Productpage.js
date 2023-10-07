import React from 'react'
import { useCart } from '../../Context/CartContex'
function Productpage({ productName, productPrice }) {
    // const cart = useContext(cartContexvariable)
    const cart = useCart();

    console.log("useCart", cart);


    // send the value to state varibale  item which is present in CartContext
    const storeCartItem = () => {
        cart.setItems([...cart.item, { productname: productName, productValue: productPrice }])
    }

    return (
        <>
            <>

                <h5>{productName}</h5>
                <p>and price is {productPrice}</p>
                <button
                    onClick={storeCartItem}
                >Add to cart</button>
            </>
        </>
    )
}

export default Productpage