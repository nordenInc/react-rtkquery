import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
      <h3>Github search</h3>
      <span>
        <Link to="/" className="mr-2">Home</Link>
        <Link to="/favourites">Favourites</Link>
      </span>
    </div>
  );
};
