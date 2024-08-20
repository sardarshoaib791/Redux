import configureStore from "./store/configureStore";
import { bugAdded, bugRemoved, bugResolved } from "./store/bug";
import { addProject, removeProject } from "./store/project";

const store = configureStore();

const unsub = store.subscribe(() => {
  console.log("state chnaged !", store.getState());
});
// Redux tool kit====>:
store.dispatch(addProject({ name: "project1" }));
store.dispatch(addProject({ name: "project2" }));
store.dispatch(addProject({ name: "project3" }));
store.dispatch(removeProject({ id: 1 }));
console.log(store.getState().length);
// store.dispatch(bugAdded({ description: "bug1" }));
// store.dispatch(bugAdded({ description: "bug2" }));
// // unsub();
// store.dispatch(bugResolved({ id: 1 }));
// store.dispatch(bugRemoved({ id: 1 }));
// console.log(store.getState());

//===>Simple-Redux

// store.dispatch(bugAdded("bug1"));
// store.dispatch(bugAdded("bug2"));
// store.dispatch(bugRemoved(1));
// // unsub();
// store.dispatch(bugAdded("bug3"));
// store.dispatch(bugResolved(1));
// console.log(store.getState());
