import React from "react";
import { Link } from "react-router-dom";

export default function MyNavLink({page, to , isNavBarOpen, setNavBarOpen}) {
  
  const toggleMenu = () => {
    setNavBarOpen(!isNavBarOpen)
  }
  return (
    <Link
      to={to}
      className="block rounded bg-primary hover:bg-white hover:text-black md:hover:text-gray-400 px-3 py-2 text-white dark:text-white md:bg-transparent md:p-0 md:hover:bg-primary md:text-white md:dark:text-blue-500"
      aria-current="page"     
      onClick={toggleMenu}
    >
      {page}
    </Link>
  );
}
