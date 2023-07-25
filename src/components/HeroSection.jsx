import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className='min-h-[77vh] w-full flex items-center flex-col justify-center gap-8'>
      <h1 className='text-secondary text-7xl text-center font-bold'>
        Organize your work <br /> and life, finally.
      </h1>
      <p className='text-center text-3xl text-gray-600'>
        Become focused, organized, and calm with Bitwise. The world’s #1 <br />{" "}
        task manager and productivity app.
      </p>
      <Link
        to='/signup'
        className='text-xl font-semibold rounded px-4 py-2 bg-secondary text-white hover:bg-neutral-800'
      >
        Start for free
      </Link>
    </div>
  );
}

export default HeroSection;
