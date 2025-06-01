import React, { useState } from 'react';

const SignInUp = () => {
    const [signUpData, setSignUpData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        fullName: ''
    });

    const [signInData, setSignInData] = useState({
        email: '',
        password: ''
    });

    const handleSignUpChange = (e) => {
        setSignUpData({
            ...signUpData,
            [e.target.name]: e.target.value
        });
    };

    const handleSignInChange = (e) => {
        setSignInData({
            ...signInData,
            [e.target.name]: e.target.value
        });
    };

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        console.log('Sign up data:', signUpData);
    };

    const handleSignInSubmit = (e) => {
        e.preventDefault();
        console.log('Sign in data:', signInData);
    };

    return (
        <div className="bg-black min-h-screen flex items-center justify-center p-8">
            <div className="flex gap-8 max-w-4xl w-full">

                {/* Sign Up Form */}
                <div className="flex-1 bg-gray-900 p-8 rounded-lg border border-gray-700">
                    <h2 className="text-white text-2xl font-bold mb-6 text-center">Sign Up</h2>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-white text-sm font-medium mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                value={signUpData.fullName}
                                onChange={handleSignUpChange}
                                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-white placeholder-gray-400"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-white text-sm font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={signUpData.email}
                                onChange={handleSignUpChange}
                                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-white placeholder-gray-400"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-white text-sm font-medium mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={signUpData.password}
                                onChange={handleSignUpChange}
                                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-white placeholder-gray-400"
                                placeholder="Create a password"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-white text-sm font-medium mb-2">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={signUpData.confirmPassword}
                                onChange={handleSignUpChange}
                                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-white placeholder-gray-400"
                                placeholder="Confirm your password"
                                required
                            />
                        </div>

                        <button
                            onClick={handleSignUpSubmit}
                            className="w-full bg-white text-black py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
                        >
                            Create Account
                        </button>
                    </div>

                    <p className="text-gray-400 text-center mt-4">
                        Already have an account? Sign in on the right →
                    </p>
                </div>

                {/* Sign In Form */}
                <div className="flex-1 bg-gray-900 p-8 rounded-lg border border-gray-700">
                    <h2 className="text-white text-2xl font-bold mb-6 text-center">Sign In</h2>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-white text-sm font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={signInData.email}
                                onChange={handleSignInChange}
                                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-white placeholder-gray-400"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-white text-sm font-medium mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={signInData.password}
                                onChange={handleSignInChange}
                                className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-white placeholder-gray-400"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center text-sm text-gray-400">
                                <input type="checkbox" className="mr-2" />
                                Remember me
                            </label>
                            <Link to="/forgot-password" className="text-sm text-white hover:text-gray-300">
                                Forgot password?
                            </Link>
                        </div>

                        <button
                            onClick={handleSignInSubmit}
                            className="w-full bg-white text-black py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
                        >
                            Sign In
                        </button>
                    </div>

                    <p className="text-gray-400 text-center mt-4">
                        Don't have an account? Sign up on the left ←
                    </p>
                </div>
            </div>
        </div>
    );
};

// Mock Link component
const Link = ({ to, children, className, ...props }) => (
    <a href={to} className={className} {...props}>
        {children}
    </a>
);

export default SignInUp;