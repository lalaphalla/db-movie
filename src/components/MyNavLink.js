import React from "react";
import { Link } from "react-router-dom";

export default function MyNavLink({page, to , isActive, setNavBarOpen}) {
  return (
    <Link
      to={to}

      className="block rounded bg-primary hover:bg-white hover:text-black px-3 py-2 text-white dark:text-white md:bg-transparent md:p-0 md:text-white md:dark:text-blue-500"
      aria-current="page" 
    >
      {page}
    </Link>
  );
}
