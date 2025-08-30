import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Menu from "../assets/icons/menu-wider.png";
import Close from "../assets/icons/x.png";

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <header className="w-full fixed top-0 z-50 ">
        <nav className="flex justify-between items-center py-3 px-[3%] backdrop-blur-sm">
          <Link to="/">
            <p className="text-3xl text-orange-500">RecipesClub</p>
          </Link>
          <ul className="hidden sm:flex gap-5 text-sm">
            <NavLink to="/">
              <p>Home</p>
            </NavLink>
            <NavLink to="/About">
              <p>About</p>
            </NavLink>
            <NavLink to="/Contact">
              <p>Contact</p>
            </NavLink>
          </ul>
          <img
            className="sm:hidden cursor-pointer"
            onClick={() => setVisible(true)}
            src={Menu}
            alt="Menu"
          />
        </nav>
      </header>
      <aside
        className={`absolute top-0 right-0 bottom-0 z-50 overflow-hidden bg-transparent backdrop-blur-lg transition-all ${
          visible ? "page-frame" : "w-0"
        }`}
      >
        <div className="w-full flex flex-col">
          <div
            onClick={() => setVisible(false)}
            className="cursor-pointer py-5"
          >
            <img className="w-8 " src={Close} alt="close" />
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="text-xl py-3 pl-6 border-b"
            to="/"
          >
            {" "}
            home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="text-xl py-3 pl-6 border-b"
            to="/about"
          >
            {" "}
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="text-xl py-3 pl-6 border-b"
            to="/contact"
          >
            {" "}
            Contact
          </NavLink>
        </div>
      </aside>
    </>
  );
};

export default NavBar;
