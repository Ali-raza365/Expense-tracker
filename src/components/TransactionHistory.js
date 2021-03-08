import React, { useContext } from "react";
import { TransContext } from "../Context/TransContext";

function TransactionHistory() {
  const { transaction, DeleteTransaction } = useContext(TransContext);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h3>Transaction History</h3>
        <hr />
      </div>

      <div className="transaction-list">
        {transaction.map((trans, ind) => {
          return (
            <li
              className="list"
              style={{
                borderRight:
                  trans.type == "income" ? "3px solid green" : "3px solid red",
              }}
              key={ind}
            >
              <span>{trans.des}</span>
              <span>{trans.amount}</span>

              <button
                className="delete-btn"
                onClick={() => DeleteTransaction(trans.id)}
              >
                X
              </button>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default TransactionHistory;
