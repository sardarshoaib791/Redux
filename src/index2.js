import configureStore from "./store/configureStore";
const store = configureStore();
import * as actions from "./store/api";

store.dispatch(
  actions.apiCallBegan({
    url: "/bugs",
    onSucess: "bugsReceived",
  })
);

// store.dispatch((dispatch, getState) => {
//   dispatch({ type: "bugRecived", bugs: [1, 2, 3] });
//   console.log(getState());
// });

// store.dispatch({
//   type: "error",
//   payload: {
//     message: "error mesage is this",
//   },
// });
