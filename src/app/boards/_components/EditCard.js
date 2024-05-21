import React from "react";

const EditCard = ({ handleCardEditChange, handleSaveEdit, list, card }) => {
  return (
    <div>
      <input
        type="text"
        value={card.cardValue}
        onChange={(e) =>
          handleCardEditChange(list.listid, card.cardid, e.target.value)
        }
        onBlur={() => handleSaveEdit()}
        autoFocus
      />
    </div>
  );
};

export default EditCard;
