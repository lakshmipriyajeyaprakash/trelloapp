"use client";
import BoardCreate from "./Components/BoardCreate";
import TrelloBoard from "./Components/TrelloBoard";
import { useState } from "react";
export default function Home() {
  const [formCreate, setFormCreate] = useState(false);
  const handleFormCreate = () => {
    setFormCreate(true);
  };
  const handleFormClose = () => {
    setFormCreate(false);
  };
  return (
    <div className="ml-30 mt-16 p-5">
      <TrelloBoard handleFormCreate={handleFormCreate}></TrelloBoard>
      <BoardCreate
        formCreate={formCreate}
        formClose={handleFormClose}
      ></BoardCreate>
    </div>
  );
}
