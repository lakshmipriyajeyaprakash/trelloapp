"use client";
import React from "react";
import { useState } from "react";
import ImagesList from "@/assets/ImagesList";
import { useRouter } from "next/navigation";
import { addBoard } from "../lib/features/trelloDataSlice";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { nanoid } from "@reduxjs/toolkit";

const BoardCreate = () => {
  const dispatch = useAppDispatch();
  const boards = useAppSelector((state) => state.boards);
  console.log(boards.length);
  const newBoard = boards[boards.length - 1]; // Get the last board (newly added)
  const newBoardId = newBoard.boardId;
  const router = useRouter();
  const [boardTitle, setBoardTitle] = useState("");
  const [background, setBackground] = useState("");
  console.log(background);
  const handleSubmit = (e) => {
    e.preventDefault();
    const boardId = nanoid();
    dispatch(addBoard({ boardTitle, background, boardId }));

    router.push(`/boards/${boardId}`);
    setBoardTitle("");
  };

  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label
          htmlFor="boardTitle"
          className="text-sm font-medium text-gray-700"
        >
          Board Title:
        </label>
        <input
          type="text"
          id="boardTitle"
          name="boardTitle"
          value={boardTitle}
          onChange={(e) => {
            e.preventDefault();
            setBoardTitle(e.target.value);
          }}
          placeholder="Enter board title"
          className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <label
          htmlFor="boardImage"
          className="text-sm font-medium text-gray-700"
        >
          Background:
        </label>
        <div className="flex flex-wrap gap-2">
          {ImagesList.map((image, index) => (
            <div key={image.id}>
              <button
                style={{
                  backgroundImage: `url(${image.src})`,
                  height: "50px",
                  width: "50px",
                  backgroundSize: "contain",
                }}
                className="rounded-lg"
                onClick={(e) => {
                  e.preventDefault();
                  console.log(e.target.style.backgroundImage);
                  setBackground(e.target.style.backgroundImage);
                }}
              ></button>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="inline-block px-4 py-2 text-sm font-medium leading-5 text-white uppercase bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none focus:bg-indigo-700"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default BoardCreate;
