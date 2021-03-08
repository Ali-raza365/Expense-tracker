import { createContext, useReducer } from "react";
import AppReducer from "./TransReducer";
const initialState = {
  transaction: [
    // { des: "cash", amount: "-324", type: "expense" },
    // { des: "bike", amount: "1324", type: "income" },
    // { des: "car", amount: "-21222", type: "expense" },
    // { des: "game", amount: "324", type: "income" },
    // { des: "house", amount: "32333334", type: "income" },
  ],
};

export const TransContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  function AddTransaction(trans) {
    dispatch({
      type: "ADD-Transaction",
      payload: trans,
    });
  }
  function DeleteTransaction(trans) {
    dispatch({
      type: "Delete-Transaction",
      payload: trans,
    });
  }
  return (
    <TransContext.Provider
      value={{
        transaction: state.transaction,
        AddTransaction,
        DeleteTransaction,
      }}
    >
      {children}
    </TransContext.Provider>
  );
};
