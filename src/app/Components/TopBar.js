"use client";
import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { HiMiniAtSymbol } from "react-icons/hi2";
import { FaBell } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import BoardCreate from "./BoardCreate";

const TopBar = () => {
  const [navSelected, setNavSelected] = useState("");
  const [showCreateBoard, setShowCreateBoard] = useState(false);
  return (
    <div className="h-16 bg-slate-100 w-full flex items-center justify-between px-2 fixed top-0">
      <div className="flex gap-2">
        <svg
          width="24"
          height="24"
          role="presentation"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="h-16"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16V6ZM14 5C13.4477 5 13 5.44772 13 6V12C13 12.5523 13.4477 13 14 13H18C18.5523 13 19 12.5523 19 12V6C19 5.44772 18.5523 5 18 5H14Z"
            fill="currentColor"
          ></path>
        </svg>
        <h1
          className="flex items-center justify-center text-xl h-16
       text-gray font-bold"
        >
          Trello
        </h1>
        <div className="flex gap-4">
          <Link
            href="/"
            className={`mt-5 ml-3 hover:text-blue-400 bg-transparent ${
              navSelected === "Workspaces" ? "text-blue-300" : ""
            }`}
            onClick={() => setNavSelected("Workspaces")}
          >
            Workspaces
          </Link>
          <Link
            href="/"
            className={`mt-5 hover:text-blue-400 bg-transparent ${
              navSelected === "Create" ? "text-blue-300" : ""
            }`}
            onClick={() => {
              setNavSelected("Create");
              setShowCreateBoard(true);
            }}
          >
            Create
          </Link>
        </div>
      </div>
      {/* <div className="flex px-5 gap-2 items-center">
        <HiOutlineSearch className="w-5 h-5 text-white mt-1" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent border-0 text-white placeholder-white outline-none focus:ring-0 text-lg"
        ></input>
  </div>*/}
      <div className="sm:flex space-x-5 hidden">
        {/* <HiMiniAtSymbol className="text-black w-5 h-5" />
        <FaBell className="text-black w-5 h-5" />*/}
        <div className="flex items-center text-black space-x-4">
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
      {showCreateBoard && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
          <BoardCreate
            formCreate={showCreateBoard}
            formClose={() => setShowCreateBoard(false)}
            setNavSelected={setNavSelected}
          />
        </div>
      )}
    </div>
  );
};

export default TopBar;
