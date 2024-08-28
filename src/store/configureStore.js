//=============> Redux toolkit:
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";
import toastify from "./middleware/toast";

export default function () {
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware(),
      logger({ destination: "console" }),
      toastify,
    ],
  });
}

//===========> Redux store:

// import { createStore } from "redux";
// import reducer from "./bug";
// import { devToolsEnhancer } from "redux-devtools-extension";

// export default function configureStore() {
//   const store = createStore(reducer, devToolsEnhancer({ trace: true }));
//   return store;
// }
