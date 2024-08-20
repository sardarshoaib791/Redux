import reducer from "./reducer";

function createStore(reducer) {
  let state;
  let listeners = [];

  function subscribe(listner) {
    listeners.push(listner);
  }

  function dispatch(action) {
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) listeners[i]();
  }

  function getState() {
    return state;
  }
  return {
    subscribe,
    dispatch,
    getState,
  };
}

export default createStore(reducer);
