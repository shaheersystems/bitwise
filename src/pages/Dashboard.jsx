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
          <h1 className="font-mono font-light px-3 py-2 bg-gray-900 text-white">
            <pre>
            {`await fetch('https://api.vercel.app/blog', {
  next: { revalidate: 10 }, // Seconds
});`}
            </pre>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
