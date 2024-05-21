"use client";
import React from "react";
import { useState } from "react";
import ImagesList from "@/assets/ImagesList";
import { useRouter } from "next/navigation";
import { addBoard } from "../lib/features/trelloDataSlice";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { nanoid } from "@reduxjs/toolkit";
import { IoMdClose } from "react-icons/io";

const BoardCreate = ({ formCreate, formClose }) => {
  const dispatch = useAppDispatch();
  const boards = useAppSelector((state) => state.boards);
  console.log(boards.length);
  const router = useRouter();
  const [boardTitle, setBoardTitle] = useState("");
  const [background, setBackground] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const boardId = nanoid();
    dispatch(addBoard({ boardTitle, background, boardId }));

    router.push(`/boards/${boardId}`);
    setBoardTitle("");
  };
  const buttonDisabled =
    boardTitle.trim() === "" || background === "" ? true : false;
  return (
    <div>
      {formCreate && (
        <div className="max-w-md mx-auto mt-4 p-3 bg-white rounded-lg shadow-md">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold mb-4">Create Board</h1>
            <div onClick={formClose}>
              <IoMdClose />
            </div>
          </div>
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
                    key={image.id}
                    style={{
                      backgroundImage: `url(${image.src})`,
                      height: "50px",
                      width: "50px",
                      backgroundSize: "contain",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(e.target.style.backgroundImage);
                      setBackground(`url(${image.src})`);
                    }}
                    className={`rounded-lg hover:shadow-sm shadow-gray-800 ease-in-out ${
                      `url(${image.src})` === background
                        ? "border border-purple-800"
                        : ""
                    }`}
                  ></button>
                </div>
              ))}
            </div>
            <button
              type="submit"
              className={`${
                buttonDisabled
                  ? "hover:bg-white border-slate-800 cursor-not-allowed"
                  : "inline-block px-4 py-2 text-sm font-medium leading-5 text-white uppercase bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none focus:bg-indigo-700"
              } `}
              disabled={buttonDisabled}
            >
              Create
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default BoardCreate;
