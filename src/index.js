import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  getUnresolvedBug,
  bugAssignToUser,
  getBugsByUser,
} from "./store/bug";
import { addProject, removeProject } from "./store/project";
import { userAdded } from "./store/users";

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
//======> bugs:
store.dispatch(bugAdded({ description: "bug1" }));
store.dispatch(bugAdded({ description: "bug2" }));
store.dispatch(bugAdded({ description: "bug-3" }));
store.dispatch(bugAdded({ description: "bug-3" }));
// unsub();
store.dispatch(bugResolved({ id: 1 }));
store.dispatch(bugRemoved({ id: 3 }));
console.log(store.getState().entities.bugs);
const x = getUnresolvedBug(store.getState());
const y = getUnresolvedBug(store.getState());
console.log("un resolved bug access:", x);
console.log(x === y);

//users:
store.dispatch(userAdded({ name: "users1" }));
store.dispatch(userAdded({ name: "users2" }));
store.dispatch(bugAssignToUser({ bugId: 1, userId: 1 }));
const user1bugs = getBugsByUser(1)(store.getState());
console.log("user one bug", user1bugs);
console.log("users list", store.getState().entities.users);

//===>Simple-Redux

// store.dispatch(bugAdded("bug1"));
// store.dispatch(bugAdded("bug2"));
// store.dispatch(bugRemoved(1));
// // unsub();
// store.dispatch(bugAdded("bug3"));
// store.dispatch(bugResolved(1));
// console.log(store.getState());
