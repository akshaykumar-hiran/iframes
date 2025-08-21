"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { Heart, ShoppingCart, User, Mail, Phone, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full mx-auto bg-[#7E33E0] text-white text-sm">
      {/* Top bar */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 py-2 gap-2 sm:gap-0">
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row sm:space-x-6 text-center sm:text-left">
          <span className="flex items-center gap-1 justify-center hover:text-gray-200">
            <Mail size={16} /> info@example.com
          </span>
          <span className="flex items-center gap-1 justify-center hover:text-gray-200">
            <Phone size={16} /> +91 9876543210
          </span>
        </div>

        {/* Right Section */}
        <div className="flex space-x-4 items-center">
          {user ? (
            <div className="flex gap-3 items-center">
              <span className="hidden sm:inline">{user.email}</span>
              <button onClick={logout} className="bg-red-500 px-3 py-1 rounded text-xs sm:text-sm">
                Logout
              </button>
            </div>
          ) : (
            <Link className="flex items-center gap-1 hover:text-gray-200" href="/login">
              <User size={16} />
              <span className="hidden sm:inline">Login</span>
            </Link>
          )}
          <button className="flex items-center gap-1 hover:text-gray-200">
            <Heart size={16} />
            <span className="hidden sm:inline">Wishlist</span>
          </button>
          <button className="flex items-center gap-1 hover:text-gray-200">
            <ShoppingCart size={16} />
            <span className="hidden sm:inline">Cart</span>
          </button>
        </div>
      </div>

      {/* Main Header */}
      <header className="flex justify-between items-center px-4 sm:px-10 py-4 border-b bg-white shadow-sm relative">
        <h1 className="text-xl sm:text-2xl font-bold text-[#7E33E0]">Iframes</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-600">
          <a href="/devotional" className="hover:text-purple-600">Devotional</a>
          <a href="/sports" className="hover:text-purple-600">Sports</a>
          <a href="/motivational" className="hover:text-purple-600">Motivational</a>
          <a href="/lifestyle" className="hover:text-purple-600">Lifestyle</a>
          <a href="/customize" className="hover:text-purple-600">Customize</a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <Button variant="outline">Login</Button>
          <Button className="bg-purple-600 hover:bg-purple-700">Sign Up</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen( !isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute  text-gray-600 top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden z-50 ">
            <a href="#" className="hover:text-purple-600">Home</a>
            <a href="#" className="hover:text-purple-600">Pages</a>
            <a href="#" className="hover:text-purple-600">Products</a>
            <a href="#" className="hover:text-purple-600">Shop</a>
            <a href="#" className="hover:text-purple-600">Contact</a>
            <div className="flex space-x-3">
              <Button variant="outline">Login</Button>
              <Button className="bg-purple-600 hover:bg-purple-700">Sign Up</Button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
