"use client"

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = await signIn('credentials', {
      redirect: false,
      email: email,
      password: password
    });

    if (!result.error) {
    } else {
      console.log(result.error);
    }
  };

  return (
    <form className="mt-20" onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" name="email" value={email} onChange={handleEmailChange} required />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={password} onChange={handlePasswordChange} required />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginPage;