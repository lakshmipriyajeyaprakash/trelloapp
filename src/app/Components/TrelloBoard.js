"use client";
import React, { useState } from "react";
import { useAppSelector } from "../lib/hooks";
import Link from "next/link";

const TrelloBoard = ({ handleFormCreate }) => {
  const boards = useAppSelector((state) => state.boards);
  return (
    <div className="sm:ml-16">
      <h1>Board List</h1>
      <div className="flex flex-wrap gap-2">
        {boards.length > 0 &&
          boards.map((board, index) => (
            <Link
              href={`/boards/${board.boardId}`}
              key={index}
              className="shadow-sm p-3 hover:shadow-lg hover:shadow-blue-200 cursor-pointer hover:scale-105 transition-all ease-in-out"
              style={{
                backgroundImage: `${board.background}`,
                backgroundSize: "cover",
                height: "100px",
                width: "180px",
              }}
            >
              <h1>{board.boardTitle}</h1>
            </Link>
          ))}
        <div
          className="shadow-sm p-3 hover:shadow-lg hover:shadow-blue-500 cursor-pointer hover:scale-105 transition-all ease-in-out h-30 w-40"
          onClick={handleFormCreate}
        >
          Create Board
        </div>
      </div>
    </div>
  );
};

export default TrelloBoard;
