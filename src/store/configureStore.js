//=============> Redux toolkit:
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./project";

export default function () {
  return configureStore({ reducer });
}

//===========> Redux store:

// import { createStore } from "redux";
// import reducer from "./bug";
// import { devToolsEnhancer } from "redux-devtools-extension";

// export default function configureStore() {
//   const store = createStore(reducer, devToolsEnhancer({ trace: true }));
//   return store;
// }
