import React, { useState } from 'react'

function Login() {
    const [isLoggedIn, setLoggedIn] = useState(true);
    return (
        <div className="text-end">
            <button onClick={() => setLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? 'Welcome' : 'Sign in'}
            </button>
        </div>
    )
}

export default Login;