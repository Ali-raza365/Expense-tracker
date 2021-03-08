import React, { useContext } from "react";
import { TransContext } from "../Context/TransContext";

function Balance() {
  const { transaction } = useContext(TransContext);
  const transactionAmounts = transaction.map((tran) => tran.amount);
  const balance = transactionAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  return (
    <div className="balanceContainer">
      <h1>
        Current Balance <br /> ${balance}
      </h1>
    </div>
  );
}

export default Balance;
