import React from 'react';
import logo from '../assets/stimpee.svg';

const Navbar = () => {
    return (
        <nav className="bg-black text-white w-full px-6 py-4">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                {/* Logo Section */}
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-10 w-auto"
                    />
                </div>

                {/* Search Bar */}
                <div className="flex-1 max-w-md mx-8">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-white"
                    />
                </div>

                {/* Account Link */}
                <div className="flex items-center">
                    <Link
                        to="/account"
                        className="text-white hover:text-gray-300 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-gray-800"
                    >
                        Account
                    </Link>
                </div>
            </div>
        </nav>
    );
};

// Mock Link component for demonstration
const Link = ({ to, children, className, ...props }) => (
    <a href={to} className={className} {...props}>
        {children}
    </a>
);

export default Navbar;