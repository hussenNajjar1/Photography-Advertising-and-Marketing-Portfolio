'use client'
import React from 'react';
import { signIn } from 'next-auth/react';

const Signin = () => {
    return (
        <button type="button" onClick={() => signIn('google')}>
            Sign in with Google
        </button>
    );
};

export default Signin;
