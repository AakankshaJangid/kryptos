import React from "react";
import { useState } from "react";

import { Button,ButtonOutLine } from '../../utils/Index.jsx'
import Header from '../header/Header.jsx'
const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  const navBarElements = ["Market", "Exchange", "Wallet", "Trade"];
  return (
    <nav className="w-full bg-black fixed">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href={<Header />}>
              <h2 className="text-3xl font-mono font-bold text-white">
                krypt<span className="text-blue-600">o</span>s
              </h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {navBarElements.map((data,i) => (
                <li key={i} className="text-white text-xl hover:text-indigo-200 flex flex-col">
                  <a href={<Header />}>{data}</a>
                </li>
              ))}
            </ul>

            <div className="mt-3 space-y-2 md:hidden flex flex-col">
              <Button props={"Log in"} />
              <ButtonOutLine props={"Sign Up"} />
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:flex">
          <Button props={"Log in"} />
          <ButtonOutLine props={"Sign Up"} />{" "}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
