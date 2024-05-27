import React from "react";
import {
  HiUserGroup,
  HiServer,
  HiChartSquareBar,
  HiCalendar,
} from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
const SideBar = () => {
  return (
    <div className="fixed h-full flex flex-col left-0 top-16 bg-slate-100 w-38 sm:block hidden">
      <ul className="flex flex-col flex-grow">
        <li className="flex flex-col justify-center items-center py-7 px-2 text-gray-500 text-sm hover:text-blue-300">
          <HiUserGroup className="w-3 h-3" />
          Manage
        </li>
        <li className="flex flex-col justify-center items-center py-7 px-2 text-gray-500 text-sm hover:text-blue-300">
          <HiServer className="w-3 h-3" />
          Boards
        </li>
        <li className="flex flex-col justify-center items-center py-7 px-2 text-gray-500 text-sm hover:text-blue-300">
          <HiCalendar className="w-3 h-3" />
          Schedule
        </li>
        <li className="flex flex-col justify-center items-center py-7 px-2 text-gray-500 text-sm hover:text-blue-300">
          <HiChartSquareBar className="w-3 h-3" />
          Report
        </li>
        <li className="flex flex-col justify-center items-center py-7 px-2 text-gray-500  text-sm mt-auto mb-14 hover:text-blue-300">
          <IoMdSettings className="w-4 h-4" />
          Settings
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
