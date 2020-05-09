const initialState = {
  user: {},
  posts: []
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case "SET_USER":
      return { ...state, ...action.payload };
    case "SET_POSTS":
        return { ...state, ...action.payload };  
    default:
      return state;
  }
};

export default reducer;
