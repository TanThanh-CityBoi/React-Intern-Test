const initialState = {
  isLoading: false,
  motions: [],
  error: ''
};


export function appReducer(state = initialState, { type, ...rest }) {
  switch (type) {
    case "get":
      return { ...state, ...rest };
    default:
      return state;
  }
}

