import React from 'react';

const Header = () => {
    return (
        <header className="h-20 w-full border-b-2 border-slate-200 px-4 flex flex-row items-center justify-between">
            <h1 className="text-3xl font-bold shadow-lg  bg-purple-50 rounded-lg text-purple-900 mb-6 p-3">My Blockchain App</h1>
            <nav className="flex gap-20 ">
                <a href="#home" className="hover:text-purple-400 transition">About</a>
                <a href="#about" className="text-gray-800 hover:text-blue-500">Blockchain</a>
                <a href="#contact" className="text-gray-800 hover:text-blue-500">Contact</a>
            </nav>
        </header>
    );
};

export default Header;