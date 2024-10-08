// //DUCK PETTTEREN:
// ReduxtoolKit====>
import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
//combine action creator and reduce:
let lastId = 0;
const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAssignToUser: (bugs, action) => {
      const { bugId, userId } = action.payload;
      const index = bugs.findIndex((bug) => bug.id === bugId);
      bugs[index].userId = userId;
    },
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolve: false,
      });
    },
    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolve = true;
      // console.log(index);
    },
    bugRemoved: (bugs, action) => {
      return bugs.filter((bug) => bug.id !== action.payload.id);
    },
  },
});

//selector:
// export const getUnresolvedBug = (state) =>
//   state.entities.bugs.filter((bug) => !bug.resolve);
//selector^

//Memoization:
export const getUnresolvedBug = createSelector(
  (state) => state.entities.bugs,
  (state) => state.entities.projects, // just for multiple selector we can pass
  (bugs, project) => bugs.filter((bug) => !bug.resolve)
);
export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );
//
export const { bugAdded, bugRemoved, bugResolved, bugAssignToUser } =
  slice.actions;
export default slice.reducer;
//Actions:

// export const bugAdded = createAction("bugAdded");
// export const bugResolved = createAction("bugResolved");
// export const bugRemoved = createAction("bugRemoved");

// // // Reducer

// // let lastId = 0;

// export default createReducer([], {
//   [bugAdded.type]: (bugs, action) => {
//     bugs.push({
//       id: ++lastId,
//       description: action.payload.description,
//       resolve: false,
//     });
//   },
//   [bugResolved.type]: (bugs, action) => {
//     const index = bugs.findIndex((bug) => bug.id === action.payload.id);
//     bugs[index].resolve = true;
//   },
//   [bugRemoved.type]: (bugs, action) => {
//     return bugs.filter((bug) => bug.id !== action.payload.id);
//   },
// });

//================================================//
//Simple Redux
// //Actions types:

// const BUG_ADDED = "bugAdded";
// const BUG_REMOVED = "bugRemoved";
// const BUG_RESOLVED = "bugResolved";

// //Actions:
// export const bugAdded = (description) => ({
//   type: BUG_ADDED,
//   payload: {
//     description: description,
//   },
// });

// export const bugRemoved = (id) => ({
//   type: BUG_REMOVED,
//   payload: {
//     id,
//   },
// });

// export const bugResolved = (id) => ({
//   type: BUG_RESOLVED,
//   payload: {
//     id,
//   },
// });

// // Reducer

// let lastId = 0;
// export default function reducer(state = [], action) {
//   //By using Switch:
//   switch (action.type) {
//     case BUG_ADDED:
//       return [
//         ...state,
//         {
//           id: ++lastId,
//           description: action.payload.description,
//           resolve: false,
//         },
//       ];
//     case BUG_REMOVED:
//       return state.filter((bug) => bug.id !== action.payload.id);

//     case BUG_RESOLVED:
//       return state.map((bug) =>
//         bug.id !== action.payload.id ? bug : { ...bug, resolve: true }
//       );
//     default:
//       return state;
//   }
// }
