import React from "react";
import { Link } from "react-router-dom";

const Practise = () => {
  return (
    <>
      <div className=" flex flex-col items-center justify-center">
        <p className=" text-center text-[100px] text-red-300">
          Practise file tailwind
        </p>
        <Link to="/second" className="text-center text-[30px] text-red-300">
          Second page
        </Link>
      </div>
    </>
  );
};

export default Practise;
