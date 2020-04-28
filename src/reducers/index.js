const initialState = {
  user: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
