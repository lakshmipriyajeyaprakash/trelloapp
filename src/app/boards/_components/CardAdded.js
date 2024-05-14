import React from "react";

const CardAdded = ({
  list,
  handleAddCard,
  handleCardInputChange,
  cardInputs,
}) => {
  return (
    <div>
      <ul>
        {list.cards.map((card, cardIndex) => (
          <li key={cardIndex} className="flex flex-col">
            <div className=" bg-white rounded-sm ml-2 mr-2 mb-2 w-auto h-auto">
              {card.cardValue}
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
