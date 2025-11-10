import React from "react";
import { Clock, Home, TrendingUp } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#111111] text-white flex flex-col justify-between p-4 min-h-screen">
      <section>
        <h2 className="text-xl font-bold">MENU</h2>
        <nav className="mt-4">
          <ul>
            <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <Home /> Discover
            </li>

            <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <TrendingUp /> Trending
            </li>

            <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <Clock /> Recent
            </li>
          </ul>
        </nav>
      </section>

      <section>
        <h2 className="mt-6 text-xl font-bold">FAVORITES</h2>
        <ul className="mt-2 mb-[2rem]">
        {Array(3).fill(null).map(i => (
          <div key={i} className="flex mt-[2rem] gap-4">
            <img src="https://images.stockcake.com/public/5/7/9/579e1c27-5860-435a-a038-4fd12e61ea46_large/neon-glowing-headphones-stockcake.jpg" 
            alt="" className="h-16 w-16 rounded-md bg-gray-700 object-cover" />
            <div>
              <p className="text-whie">Random</p>
              <p className="text-sm text-gray-400">Person</p>
            </div>
          </div>
        ))}
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;
