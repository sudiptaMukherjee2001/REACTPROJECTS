import { createContext, useContext, useState } from "react"

//1.Create context variable

export const cartContexvariable = createContext(null);




/* const cart = useContext(cartContexvariable) YAH line  humlog
likte hein uss file main  jaha value store karna ya value fetch karna hota hein.. Iske badle main humlog
custom hook context file main bana sakte hein .. So at the end 11 to 14  line in Cartcontext is same as 4 number line in Productpage */
export const useCart = () => {
    const cart = useContext(cartContexvariable);
    return cart;
}


export const CartProvider = ({ children }) => {
    const [item, setItems] = useState([])
    // yah jo value hein oo usko app  main har jaga se access kiya ja sakta hein
    return (<cartContexvariable.Provider value={{ item, setItems }}>
        {children}
    </cartContexvariable.Provider>

    )

}