import { PlusIcon } from "@heroicons/react/24/outline";
import React from "react";

function DashboardNav() {
  return (
    <div className='px-4 py-4 border-b flex items-center justify-between'>
      <h1>
        <span className='text-2xl font-semibold'>Dashboard</span>
      </h1>
      <button className='flex items-center gap-2 text-sm px-4 py-2 bg-secondary rounded text-white hover:bg-neutral-800'>
        <PlusIcon className='h-5 w-5' />
        New Project
      </button>
    </div>
  );
}

export default DashboardNav;
