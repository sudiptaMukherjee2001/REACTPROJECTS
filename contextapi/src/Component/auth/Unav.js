import React from 'react'
import { Link } from 'react-router-dom'

function Unav() {
    return (
        <>
            <ul style={{
                display: "flex",
                listStyle: "none",
                justifyContent: "space-evenly"
            }}>
                <li> <Link to='/'>

                    Home
                </Link></li>
                <li>
                    <Link to='Product'>

                        product page
                    </Link>
                </li>
                <li>
                    <Link to='Login'>

                        <button>Login</button>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Unav