import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialBoards = JSON.parse(localStorage.getItem("boards")) || [
  {
    boardId: nanoid(),
    boardCount: 1,
    boardTitle: "Example Board",
    background: `url(https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800)`,
  },
];
console.log(initialBoards);
const initialState = {
  boards: initialBoards,
};
export const trelloDataSlice = createSlice({
  name: "Trello Data",
  initialState,
  reducers: {
    addBoard: (state, action) => {
      const { boardTitle, background, boardId } = action.payload;
      const boardCount = state.boards.length + 1;
      state.boards.push({
        boardId,
        boardCount,
        boardTitle,
        background,
      });
      console.log(localStorage.setItem("boards", JSON.stringify(state.boards)));
      localStorage.setItem("boards", JSON.stringify(state.boards));
    },
    clearBoards: (state) => {
      state.boards = [];
      state.lastBoardId = null;
      localStorage.removeItem("boards");
    },
  },
});
export const { addBoard } = trelloDataSlice.actions;
export default trelloDataSlice.reducer;
