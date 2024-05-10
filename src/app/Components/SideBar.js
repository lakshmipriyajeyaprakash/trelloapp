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
    <div className="fixed h-full flex flex-col left-0 top-16 bg-white w-38 sm:block hidden">
      <ul className="flex flex-col flex-grow">
        <li className="flex flex-col justify-center items-center py-7 text-gray-500 text-lg">
          <HiUserGroup className="w-4 h-4" />
          Manage
        </li>
        <li className="flex flex-col justify-center items-center py-7 text-gray-500">
          <HiServer className="w-4 h-4" />
          Boards
        </li>
        <li className="flex flex-col justify-center items-center py-7 text-gray-500">
          <HiCalendar className="w-4 h-4" />
          Schedule
        </li>
        <li className="flex flex-col justify-center items-center py-7 text-gray-500">
          <HiChartSquareBar className="w-4 h-4" />
          Report
        </li>
        <li className="flex flex-col justify-center items-center py-7 text-gray-500 mt-auto mb-14">
          <IoMdSettings className="w-4 h-4" />
          Settings
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
