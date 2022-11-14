const INITIAL_STATE = {
  allQuestions: "",
};

const reducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case "QUESTIONS":
      return {
        ...state,
        allQuestions: action.payload,
      };
    default: return state;

  }

};

export default reducer;