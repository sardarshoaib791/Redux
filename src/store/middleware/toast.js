const toastify = (store) => (next) => (action) => {
  if (action.type === "error") console.log("tosify", action.payload.message);
  else next(action);
};
export default toastify;
