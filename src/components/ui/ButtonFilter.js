import React from "react";

export default function ButtonFilter({ key, children, onClick, isActive }) {

  return (
    <>
      <button
        className="m-2 rounded-lg bg-green-custom px-4 py-2 text-white text-sm " key={key}
        onClick={onClick}
        
      >
        {children}
      </button>
    </>
  );
}
