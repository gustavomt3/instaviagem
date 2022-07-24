export default (state, action) => {
  switch (action.type) {
    case 'ADD_CARD_TO_WISHILIST':
      return {
        ...state,
        whishilist: [...state.whishilist, action.payload],
      };
    case 'REMOVE_CARD_TO_WISHILIST':
      return {
        ...state,
        whishilist: state.whishilist.filter(
          (data) => data._id !== action.payload,
        ),
      };
    default:
      return state;
  }
};
