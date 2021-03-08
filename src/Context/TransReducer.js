const TransReducer = (state, action) => {
  switch (action.type) {
    case "ADD-Transaction":
      return {
        ...state,
        transaction: [action.payload, ...state.transaction],
      };
    case "Delete-Transaction":
      return {
        ...state,
        transaction: state.transaction.filter(
          (tran) => tran.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
export default TransReducer;
