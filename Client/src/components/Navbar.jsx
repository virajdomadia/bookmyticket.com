import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/book my ticket.png";

const Navbar = () => {
  return (
    <>
      <div className="w-full bg-[#f8f8f8] py-4 px-40 flex flex-row justify-between items-center shadow-md border-b border-gray-300">
        <img src={logo} alt="Logo" className="w-40" />
        <ul className="list-none flex flex-row gap-4">
          <li>
            <NavLink 
              to="/hotel" 
              className={({ isActive }) => isActive ? "text-blue-500" : ""}
            >
              Hotel
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/flight" 
              className={({ isActive }) => isActive ? "text-blue-500" : ""}
            >
              Flight
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/packages" 
              className={({ isActive }) => isActive ? "text-blue-500" : ""}
            >
              Packages
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/visa" 
              className={({ isActive }) => isActive ? "text-blue-500" : ""}
            >
              Visa
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/insurance" 
              className={({ isActive }) => isActive ? "text-blue-500" : ""}
            >
              Insurance
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/cabs" 
              className={({ isActive }) => isActive ? "text-blue-500" : ""}
            >
              Cabs
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/train" 
              className={({ isActive }) => isActive ? "text-blue-500" : ""}
            >
              Train
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/bus" 
              className={({ isActive }) => isActive ? "text-blue-500" : ""}
            >
              Bus
            </NavLink>
          </li>
        </ul>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="25"
            height="25"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Navbar;
