import React from 'react';
import linkedInLogo from './LinkedlnLogo.webp'; // Adjust the path to your LinkedIn logo
import simplifyLogo from './SimplifyLogo.png'; // Adjust the path to your Simplify logo

const SignUpPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <h1 className="text-4xl font-bold mb-6">Create an Account</h1>
            <form className="bg-gray-800 p-6 rounded-lg shadow-lg w-96 flex flex-col space-y-4">
                <input
                    type="text"
                    placeholder="Name"
                    className="p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                />
                <button className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-md text-white font-semibold transition duration-200" type="submit">
                    Sign Up
                </button>
            </form>

            <div className="flex flex-col items-center space-y-4 mt-6">
                <button className="flex items-center px-4 py-2 bg-gray-600 text-white rounded transition duration-200 hover:bg-gray-700 w-72">
                    Sign in with LinkedIn
                    <img src={linkedInLogo} alt="LinkedIn" className="h-5 w-5 mr-2" />
                </button>
                <button className="flex items-center px-4 py-2 bg-gray-600 text-white rounded transition duration-200 hover:bg-gray-700 w-72">
                    Sign in with Simplify
                    <img src={simplifyLogo} alt="Simplify" className="h-5 w-5 mr-2" />
                </button>
                <p className="mt-4 text-sm">
                    Already have an account?{' '}
                    <button className="text-green-500 hover:underline">
                        <p>Log in</p>
                    </button>
                </p>
            </div>
        </div>
    );
};

export default SignUpPage;
