import React from "react";

export default function MyFooter() {
  return (
    <div className=" w-full bg-black text-white pt-6">
      <ul className="flex w-full justify-center mx-auto text-gray-400 ">
        <li className="pl-4">Privacy Policy</li>
        <li className="pl-4">Terms of Use</li>
        <li className="pl-4">Legal</li>
        <li className="pl-4">Site Map</li>
      </ul>
      <p className="text-center mt-4">© 2023 All Rights Reserved</p>
    </div>
  );
}
