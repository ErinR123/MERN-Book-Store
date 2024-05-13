import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white" style={{ fontFamily: 'Pacifico, cursive', fontSize: '1.5rem', marginRight: 'auto' }}>PlotPoint Books.</div>
        <div className="flex">
          <Link to="/allBooks" className="text-white font-bold mr-4">Bookstore</Link>
          <Link to="/login" className="text-white font-bold mr-4">Login</Link>
          <span className="text-white font-bold mr-4">Events</span>
          <span className="text-white font-bold mr-4">About</span>
          <span className="text-white font-bold mr-4">Contact</span>
          <FaShoppingCart className="text-white" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;















