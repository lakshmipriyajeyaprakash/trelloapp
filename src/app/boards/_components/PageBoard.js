import React, { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

const PageBoard = ({ filtered }) => {
  const [inputtile, setInputTile] = useState(false);
  const [listValue, setListValue] = useState("");
  const [listdata, setListData] = useState([]);
  const [cardInputs, setCardInputs] = useState({});

  const handleAddList = (e) => {
    e.preventDefault();
    const newListValue = listValue.trim();
    if (newListValue !== "") {
      const listObject = {
        listid: nanoid(),
        listValue: newListValue,
        cards: [],
      };
      setListData([...listdata, listObject]);
      setListValue(""); // Clear the input after adding the list
      setInputTile(false);
    }
  };

  const handleAddCard = (listId) => {
    const newCardValue = cardInputs[listId]?.trim();
    if (newCardValue !== undefined && newCardValue !== "") {
      const updatedLists = listdata.map((list) =>
        list.listid === listId
          ? {
              ...list,
              cards: [
                ...list.cards,
                { cardid: nanoid(), cardValue: newCardValue },
              ],
            }
          : list
      );
      const updatedCardInputs = { ...cardInputs, [listId]: "" }; // Clear the card input value
      setListData(updatedLists);
      setCardInputs(updatedCardInputs);
    }
  };

  const handleCardInputChange = (listId, value) => {
    const updatedCardInputs = { ...cardInputs, [listId]: value };
    setCardInputs(updatedCardInputs);
  };

  return (
    <div>
      {filtered.length > 0 ? (
        filtered.map((boardPage, index) => (
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
              <h1 className="font-bold text-purple-800 sm:text-4xl text-2xl">
                {boardPage.boardTitle}
              </h1>
              <ul className="flex gap-6 flex-wrap">
                {listdata.length > 0 &&
                  listdata.map((list, listIndex) => (
                    <li key={listIndex} className="flex flex-col">
                      <div className="flex gap-5">
                        <h2>{list.listValue}</h2>
                      </div>
                      <ul>
                        {list.cards.map((card, cardIndex) => (
                          <li key={cardIndex}>
                            <div className="flex gap-2">
                              <span>{card.cardValue}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleAddCard(list.listid);
                        }}
                      >
                        <input
                          type="text"
                          value={cardInputs[list.listid] || ""}
                          onChange={(e) =>
                            handleCardInputChange(list.listid, e.target.value)
                          }
                          placeholder="Add Card Name"
                        />
                        <button>Add Card</button>
                      </form>
                    </li>
                  ))}
                <div className="">
                  <button onClick={() => setInputTile(true)}>Add List</button>
                  {inputtile && (
                    <form onSubmit={handleAddList}>
                      <input
                        type="text"
                        value={listValue}
                        onChange={(e) => setListValue(e.target.value)}
                        placeholder="Add List Name"
                      />
                      <button type="submit">Save</button>
                    </form>
                  )}
                </div>
              </ul>
            </div>
          </div>
        ))
      ) : (
        <div>Something went wrong</div>
      )}
    </div>
  );
};

export default PageBoard;
