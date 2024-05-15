import React, { useState } from 'react';
import * as usersService from '../utilities/users-service';
import logo2 from "../../public/logo2.jpg"

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
      <div className="flex items-center justify-center">
          <img src={logo2} alt="Logo" className="h-24 w-auto" /> {/* Adjust the class to set the size of the logo */}
          <h2 className="ml-4 mt-5 text-3xl font-extrabold text-gray-900" style={{ fontFamily: 'Pacifico, cursive' }}>PlotPoint Books.</h2>
        </div>
        <form className="mt-8 space-y-6" autoComplete="off" onSubmit={handleSubmit}>
          <div className="bg-white rounded-md shadow-md p-4">
            <label htmlFor="email" className="sr-only">Email</label>
            <input type="text" name="email" value={credentials.email} onChange={handleChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email" />
          </div>
          <div className="bg-white rounded-md shadow-md p-4 mt-4">
            <label htmlFor="password" className="sr-only">Password</label>
            <input type="password" name="password" value={credentials.password} onChange={handleChange} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
          <div className="mt-4">
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">LOG IN</button>
          </div>
        </form>
      </div>
      <p className="error-message text-center mt-4">&nbsp;{error}</p>
    </div>
  );
}



