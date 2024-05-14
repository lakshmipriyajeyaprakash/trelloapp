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
          onChange={(e) => handleCardInputChange(list.listid, e.target.value)}
          placeholder="Add Card Name"
        />
        <button className="bg-blue-200 w-25 rounded-sm ml-2">Add Card</button>
      </form>
    </div>
  );
};

export default CardAdded;
