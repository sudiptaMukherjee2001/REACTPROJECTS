//Store
import { createContext, useState } from "react";

// 1. First create context variable;
export const counterContext = createContext(null);// export const ContextVariable=createcontext(default_Variable);

// 2. Second step to create a provider for the context

export const CounterProvider = ({ children }) => {
    const [countValue, setCount] = useState(0)
    return (<counterContext.Provider value={{ countValue, setCount }}>
        {children}
    </counterContext.Provider>
    )
}

// Notes:
// 1. First create context variable;
// export const ContextVariable=createcontext(default_Variable);

// 2.Second step to create a provider for the context
/* export const CounterProvider# = ({ children }) => {
    return <counterContex.Provider>
        {children}
    </counterContex.Provider>

}*/

// 3. Wrap your app.js component with  CounterProvider#