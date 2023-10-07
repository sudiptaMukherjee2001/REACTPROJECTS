import React, { useState } from 'react'
import { useAuth } from '../../Context/authContext';


// DATA SEND TO AUTH CONTEXT


function Login() {
    const [name, setName] = useState('')
    const [email, setemail] = useState('')

    const auth = useAuth();
    // console.log(auth);
    const handelsend = (e) => {
        e.preventDefault();
        auth.setName(name)
        auth.setEmail(email)
    }
    // console.log("name", auth.name)
    // console.log("email", auth.email)
    return (
        <>
            username: <input type="text" name="" id="" value={name} onChange={(e) => setName(e.target.value)} />
            Email: <input type="text" name="" id="" value={email} onChange={(e) => setemail(e.target.value)} />
            <button
                onClick={handelsend}
            >Login</button>
        </>
    )
}

export default Login