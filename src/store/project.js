import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    addProject: (state, action) => {
      state.push({
        id: ++lastId,
        name: action.payload.name,
      });
    },
    removeProject: (state, action) => {
      return state.filter((project) => project.id !== action.payload.id);
    },
  },
});
export const { addProject, removeProject } = slice.actions;
export default slice.reducer;
