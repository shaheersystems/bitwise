import React from "react";
import { Link } from "react-router-dom";
import bitwiseLogo from "../assets/bitwise.svg";
function PublicNav() {
  return (
    <div className='flex border-b px-8 py-4 items-center justify-between'>
      <div>
        <Link to='/'>
          <img className='h-8' src={bitwiseLogo} alt='Bitwise Logo' />
        </Link>
      </div>
      <div></div>
      <div className='flex gap-3 border-l'>
        <Link to='/login' className='text-sm font-semibold py-2 px-4 rounded'>
          Login
        </Link>
        <Link
          to='/signup'
          className='text-sm font-semibold hover:bg-neutral-700 bg-secondary text-white py-2 px-4 rounded'
        >
          Start for free
        </Link>
      </div>
    </div>
  );
}

export default PublicNav;
