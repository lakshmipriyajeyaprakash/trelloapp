import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { HiMiniAtSymbol } from "react-icons/hi2";
import { FaBell } from "react-icons/fa";
import Image from "next/image";
const TopBar = () => {
  return (
    <div className="h-16 bg-gradient-to-t from-purple-300 to-blue-500 w-full flex items-center justify-between px-5 fixed top-0">
      <h1
        className="flex items-center justify-center text-2xl h-16
       text-white font-bold"
      >
        Trello
      </h1>
      <div className="flex px-5 gap-2 items-center">
        <HiOutlineSearch className="w-5 h-5 text-white mt-1" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent border-0 text-white placeholder-white outline-none focus:ring-0 text-lg"
        ></input>
      </div>
      <div className="sm:flex space-x-5 hidden">
        <HiMiniAtSymbol className="text-white w-5 h-5" />
        <FaBell className="text-white w-5 h-5" />
        <div className="flex items-center text-white space-x-4">
          <h3 className="font-bold mr-3">Jenny Blake</h3>
          <Image
            src="https://randomuser.me/api/portraits/med/women/45.jpg"
            height={50}
            width={50}
            objectFit="cover"
            alt="noicon"
            className="rounded-full"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
