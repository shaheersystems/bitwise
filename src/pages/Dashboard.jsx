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
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
