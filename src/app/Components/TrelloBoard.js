import React from "react";
import { useAppSelector } from "../lib/hooks";
import Link from "next/link";

const TrelloBoard = ({ handleFormCreate, formCreate }) => {
  const boards = useAppSelector((state) => state.boards);
  return (
    <div className="sm:ml-16">
      <h1 className="font-bold">Board List</h1>
      <div className="flex flex-wrap gap-2 mt-4">
        {boards.length > 0 &&
          boards.map((board, index) => (
            <Link
              href={`/boards/${board.boardId}`}
              key={index}
              className="shadow-sm p-3 rounded-lg hover:shadow-lg hover:shadow-blue-200 cursor-pointer hover:scale-105 transition-all ease-in-out"
              style={{
                backgroundImage: `${board.background}`,
                backgroundSize: "cover",
                height: "100px",
                width: "180px",
              }}
            >
              <h1 className="text-black font-bold">{board.boardTitle}</h1>
            </Link>
          ))}
        {!formCreate && (
          <div
            className="shadow-sm p-3 hover:shadow-lg hover:shadow-blue-500 cursor-pointer hover:scale-105 transition-all ease-in-out h-auto w-auto mt-auto bg-slate-100"
            onClick={handleFormCreate}
            style={{
              height: "100px",
              width: "180px",
            }}
          >
            Create Board
          </div>
        )}
      </div>
    </div>
  );
};

export default TrelloBoard;
