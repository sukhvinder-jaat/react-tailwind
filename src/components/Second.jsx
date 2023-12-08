import React from "react";
import { Link } from "react-router-dom";

const Second = () => {
  return (
    <>
      <div className=" flex flex-col items-center justify-center">
        <p className="text-center text-[100px] text-red-300">Second</p>
        <Link to="/" className="text-center text-[30px] text-red-300">
          home
        </Link>
      </div>
    </>
  );
};

export default Second;
