import React from 'react'
/*Koi bhi context ke value ko use karne ke liye useContext hook ko import karna mandatory hein And
context variable ko bhi import karna important hein*/
import { useContext } from 'react'
import { counterContext } from '../Context/Countercontex'
function Count() {
    // const counterStateFunc = useContext(counterContex);
    const counterStateFunction = useContext(counterContext)
    console.log("context value comming from counterContextss", counterStateFunction)


    const handelDecrement = () => {
        if (counterStateFunction.countValue <= 0) {

            counterStateFunction.setCount(0)
        }
        else {

            counterStateFunction.setCount(counterStateFunction.countValue - 1)
        }
    }
    return (
        <>
            <button
                onClick={() => counterStateFunction.setCount(counterStateFunction.countValue + 1)}
            >Increment</button>
            <button
                onClick={handelDecrement}
            >Decrement</button>
        </>
    )
}

export default Count