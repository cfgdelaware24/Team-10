import React, { useState } from 'react';
import axios from 'axios';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send email and password as JSON in the request body
      const response = await axios.post('http://localhost:8080/api/professionals/login', {
        email: email,
        password: password
      });

      // Handle the response from the backend
      console.log('Login successful:', response.data);
      setErrorMessage('');  // Clear any error message
    } catch (error) {
      // Handle any error that occurred during the request
      if (error.response && error.response.data) {
        // Display the error message from the server response
        setErrorMessage(error.response.data.message || 'An error occurred');
      } else {
        setErrorMessage('An error occurred');
      }
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://images.squarespace-cdn.com/content/v1/64921d1aeeb5d7799955bc21/eef0f2e5-94c9-45da-9251-e7745f07f0ca/spurimpacthoriz+tagline.png"
          className="mx-auto h-100 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md py-1.5"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md py-1.5"
              />
            </div>
          </div>

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
