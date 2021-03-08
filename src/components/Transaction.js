import React, { useContext } from "react";
import { TransContext } from "../Context/TransContext";

function Transaction() {
  const { transaction } = useContext(TransContext);
  const transactionAmounts = transaction.map((trans) => trans.amount);
  const income = transactionAmounts
    .filter((transaction) => transaction > 0)
    .reduce((acc, transaction) => (acc += transaction), 0)
    .toFixed(2);

  const expense = Math.abs(
    transactionAmounts
      .filter((transaction) => transaction < 0)
      .reduce((acc, transaction) => (acc += transaction), 0)
  ).toFixed(2);
  return (
    <div className="transactions">
      <h1>
        income <br />
        <span>${income}</span>
      </h1>
      <h1>
        Expense <br />
        <span>${expense}</span>
      </h1>
    </div>
  );
}

export default Transaction;
