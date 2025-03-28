import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-semibold">Feeding Tracker</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Ana Sayfa</Link>
        <Link to="/create" className="hover:underline">Yeni Giriş</Link>
      </div>
    </nav>
  );
};

export default Navbar;
