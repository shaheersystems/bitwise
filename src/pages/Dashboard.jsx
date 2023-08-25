import React from "react";
import DashboardNav from "../components/DashboardNav";
import Sidebar from "../components/Sidebar";
function Dashboard() {
  return (
    <div>
      <div className='flex'>
        <Sidebar />
        <div className='flex-1 bg-white'>
          <DashboardNav />
          <h1 className="font-mono font-light px-3 py-2 bg-gray-900 text-white">This is GitHub workspace testing....</h1>
          <hr/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
