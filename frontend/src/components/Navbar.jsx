import React, { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(Context);

  const logOut = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }
   
  return (
    <div className="flex justify-around items-center py-7">
      <Link to="/">
        <img src={assets.logo} className="w-32" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-black text-lg font-semibold font-serif">
        <Link to="/" className="hover:text-gray-400">
          Home
        </Link>
        <Link to="/collection" className="hover:text-gray-400">
          Collection
        </Link>
        <Link to="/about" className="hover:text-gray-400">
          About
        </Link>
        <Link to="/contact" className="hover:text-gray-400">
          Contact
        </Link>
      </ul>
      <div className="flex items-center gap-5">
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" />
        <div className="group relative">
          <img  onClick={() => token ? null : navigate('/login')} src={assets.profile_icon} className="w-5 cursor-pointer" />
          {/* ******************* Dropdown menu **************** */}
          {token &&
          <div className="hidden group-hover:block absolute right-0 pt-4 bg-white">
            <div className="flex flex-col gap-2 py-3 px-5 w-36 bg-slate-100 text-gray-400 font-semibold border border-black rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p onClick={()=>navigate('/orders')} className="cursor-pointer hover:text-black">Orders</p>
              <p onClick={logOut} className="cursor-pointer hover:text-black">LogOut</p>
            </div>
          </div>}
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 cursor-pointer" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white rounded-full">
            {token ? getCartCount() : 0}
          </p>
        </Link>
        <img
          onClick={() => {
            setVisible(true);
          }}
          src={assets.menu_icon}
          className="w-5 sm:hidden cursor-pointer"
        />
      </div>
      <div
        className={`absolute top-0 right-0 bottom-0 sm:hidden overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col">
          <div
            onClick={() => {
              setVisible(false);
            }}
            className="flex items-center gap-4 p-3"
          >
            <img
              src={assets.dropdown_icon}
              className="h-4 rotate-180 cursor-pointer"
            />
            <p>Back</p>
          </div>
          <Link
            onClick={() => {
              setVisible(false);
            }}
            to="/"
            className="hover:text-gray-400 py-2 pl-6 text-lg border"
          >
            Home
          </Link>
          <Link
            onClick={() => {
              setVisible(false);
            }}
            to="/collection"
            className="hover:text-gray-400 py-2 pl-6 text-lg border"
          >
            Collection
          </Link>
          <Link
            onClick={() => {
              setVisible(false);
            }}
            to="/about"
            className="hover:text-gray-400 py-2 pl-6 text-lg border"
          >
            About
          </Link>
          <Link
            onClick={() => {
              setVisible(false);
            }}
            to="/contact"
            className="hover:text-gray-400 py-2 pl-6 text-lg border"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
