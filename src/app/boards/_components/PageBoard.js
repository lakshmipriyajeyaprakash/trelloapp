"use client";
import React from "react";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import ListAdded from "./ListAdded";
const PageBoard = ({ filtered }) => {
  console.log(filtered);
  const [inputtile, setInputTile] = useState(false);
  const [listValue, setListValue] = useState("");
  const [listdata, setListData] = useState([]);
  console.log(listdata);
  const handleAddList = (e) => {
    const listValue = e.target.value;
    e.preventDefault();
    const listObject = {
      listid: nanoid(),
      listValue: listValue,
    };
    setListData([...listdata, listObject]);
  };
  return (
    <div>
      {filtered.length > 0
        ? filtered.map((boardPage, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `${boardPage.background}`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="bg-image min-h-screen"
            >
              <div className="sm:ml-40 mt-16 p-2 md:p-5 flex flex-col gap-5">
                <h1 className=" font-bold text-purple-800 sm:text-4xl text-2xl">
                  {boardPage.boardTitle}
                </h1>
                <div>
                  {!listdata ? (
                    listdata.map((list, index) => (
                      <ul>
                        <li>{list.listValue}</li>
                      </ul>
                    ))
                  ) : (
                    <textArea onChange={handleAddList}>Add List Title</textArea>
                  )}
                </div>
              </div>
            </div>
          ))
        : "Something went wrong"}
    </div>
  );
};

export default PageBoard;
