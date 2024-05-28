import React, { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import CardAdded from "./CardAdded";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const PageBoard = ({ filtered }) => {
  const [inputtile, setInputTile] = useState(false);
  const [listValue, setListValue] = useState("");
  const [listdata, setListData] = useState([]);
  const [cardInputs, setCardInputs] = useState({});
  const [editingCard, setEditingCard] = useState(null);
  const [editingList, setEditingList] = useState(null);

  const handleAddList = (e) => {
    if (e.key === "Enter") {
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

  const handleCardEditChange = (listId, cardId, value) => {
    const updatedLists = listdata.map((list) =>
      list.listid === listId
        ? {
            ...list,
            cards: list.cards.map((card) =>
              card.cardid === cardId ? { ...card, cardValue: value } : card
            ),
          }
        : list
    );
    setListData(updatedLists);
  };

  const handleSaveEdit = () => {
    setEditingCard(null);
  };

  const handleEditListName = (listId, newName) => {
    const updatedLists = listdata.map((list) =>
      list.listid === listId ? { ...list, listValue: newName } : list
    );
    setListData(updatedLists);
  };

  const handleDragEnd = (result) => {
    const { source, destination, type } = result;

    // If no destination, return
    if (!destination) return;

    // Reordering lists
    if (type === "LIST") {
      const newListData = Array.from(listdata);
      console.log(newListData);
      const [movedList] = newListData.splice(source.index, 1);
      newListData.splice(destination.index, 0, movedList);
      console.log(listdata, source.index, destination.index, newListData);
      setListData(newListData);
    } else {
      // Reordering cards within the same list
      const sourceListIndex = listdata.findIndex(
        (list) => list.listid === source.droppableId
      );
      const destListIndex = listdata.findIndex(
        (list) => list.listid === destination.droppableId
      );

      if (sourceListIndex === destListIndex) {
        const newCards = Array.from(listdata[sourceListIndex].cards);
        const [movedCard] = newCards.splice(source.index, 1);
        newCards.splice(destination.index, 0, movedCard);

        const newListData = [...listdata];
        newListData[sourceListIndex].cards = newCards;
        setListData(newListData);
      } else {
        // Moving card between different lists
        const sourceCards = Array.from(listdata[sourceListIndex].cards);
        const [movedCard] = sourceCards.splice(source.index, 1);

        const destCards = Array.from(listdata[destListIndex].cards);
        destCards.splice(destination.index, 0, movedCard);

        const newListData = [...listdata];
        newListData[sourceListIndex].cards = sourceCards;
        newListData[destListIndex].cards = destCards;

        setListData(newListData);
      }
    }
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
              <h1 className="font-bold text-black sm:text-4xl text-2xl">
                {boardPage.boardTitle}
              </h1>
              <div className="">
                <DragDropContext onDragEnd={handleDragEnd}>
                  <div>
                    <Droppable
                      droppableId={boardPage.boardId}
                      type="LIST"
                      direction="Horizontal"
                    >
                      {(provided) => (
                        <ul
                          className="flex gap-6 flex-wrap"
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                        >
                          {listdata.length > 0 &&
                            listdata.map((list, listIndex) => (
                              <Draggable
                                draggableId={list.listid}
                                index={listIndex}
                                key={list.listid}
                              >
                                {(provided) => (
                                  <li
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className="flex flex-col w-25 bg-gray-200 rounded-sm p-2"
                                  >
                                    {/* <Droppable
                                    droppableId={list.listid}
                                    type="LIST"
                                  >
                                    {(provided) => (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                      > */}
                                    <div className="flex gap-5 border-slate-100 mt-2 ml-2 mr-2">
                                      {editingList === list.listid ? (
                                        <input
                                          type="text"
                                          value={list.listValue}
                                          onChange={(e) =>
                                            handleEditListName(
                                              list.listid,
                                              e.target.value
                                            )
                                          }
                                          onBlur={() => setEditingList(null)} // Save and exit editing on blur
                                          autoFocus
                                        />
                                      ) : (
                                        <h2
                                          className="text-lg"
                                          onClick={() =>
                                            setEditingList(list.listid)
                                          }
                                        >
                                          {list.listValue}
                                        </h2>
                                      )}
                                    </div>
                                    <CardAdded
                                      list={list}
                                      cardInputs={cardInputs}
                                      handleAddCard={handleAddCard}
                                      handleCardInputChange={
                                        handleCardInputChange
                                      }
                                      handleCardEditChange={
                                        handleCardEditChange
                                      }
                                      handleSaveEdit={handleSaveEdit}
                                      editingCard={editingCard}
                                      setEditingCard={setEditingCard}
                                    />
                                    {/* </div>
                                    )}
                                  </Droppable> */}
                                  </li>
                                )}
                              </Draggable>
                            ))}
                          {provided.placeholder}
                          <div>
                            {inputtile ? (
                              <form className=" bg-gray-200 rounded-sm">
                                <input
                                  type="text"
                                  value={listValue}
                                  onChange={(e) => setListValue(e.target.value)}
                                  onKeyPress={handleAddList}
                                  placeholder="Add List Name"
                                  className="rounded-sm"
                                />
                              </form>
                            ) : (
                              <button
                                onClick={() => setInputTile(true)}
                                className="bg-blue-600 w-25 rounded-sm p-2"
                              >
                                Add List
                              </button>
                            )}
                          </div>
                        </ul>
                      )}
                    </Droppable>
                  </div>
                </DragDropContext>
              </div>
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
