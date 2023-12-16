import React from "react";

export default function ButtonFilter({ key, children, onClick, isActive }) {
  return (
    <>
      <button
        className={
          !isActive
            ? "m-2 rounded-lg bg-green-custom px-4 py-2 text-sm text-white "
            : "m-2 rounded-lg bg-green-900 px-4 py-2 text-sm text-white "
        }
        key={key}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}
