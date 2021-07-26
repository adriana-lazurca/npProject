import React, { useState } from 'react'


function Login() {
    const [isLoggedIn, setLoggedIn] = useState(true);
    let message = isLoggedIn ? 'Sign out' : 'Sign in'


    return (
        < div className="text-end">
            <button onClick={() => setLoggedIn(!isLoggedIn)}>
                {message}
            </button>
        </div >
    )
}

export default Login;