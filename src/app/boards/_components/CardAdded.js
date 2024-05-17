import React, { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import EditCard from "./EditCard";
const CardAdded = ({
  list,
  handleAddCard,
  handleCardInputChange,
  cardInputs,
  handleCardEditChange,
  handleSaveEdit,
  editingCard,
  setEditingCard,
}) => {
  return (
    <div>
      <ul>
        {list.cards.map((card, cardIndex) => (
          <li key={card.cardid} className="relative flex flex-col">
            <div className="bg-white rounded-sm ml-2 mr-2 mb-2 w-auto h-auto flex justify-between items-center group">
              {editingCard === card.cardid ? (
                <EditCard
                  handleCardEditChange={handleCardEditChange}
                  handleSaveEdit={handleSaveEdit}
                  list={list}
                  card={card}
                ></EditCard>
              ) : (
                <span onClick={() => setEditingCard(card.cardid)}>
                  {card.cardValue}
                </span>
              )}

              <MdModeEdit
                className="hidden group-hover:block cursor-pointer"
                onClick={() => setEditingCard(card.cardid)}
              />
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
          onChange={(e) => handleCardInputChange(list.listid, e.target.value)}
          placeholder="Add Card Name"
          className="w-25 flex flex-wrap ml-2 mr-2"
        />
        <button className="bg-blue-200 w-25 rounded-sm ml-2 mt-1">
          Add Card
        </button>
      </form>
    </div>
  );
};

export default CardAdded;
