import Image from "next/image";
import React from 'react'

export function Login() {
    return (
        <div className="grid place-items-center">
            <Image
                src="https://links.papareact.com/t4i"
                height={400}
                width={400}
                objectFit="contain"
            />
            <h1>Login with Facebook</h1>
        </div>
    )
}

export default Login;