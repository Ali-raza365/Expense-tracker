import React, { useContext, useState } from "react";
import { TransContext } from "../Context/TransContext";

function ADDTransaction() {
  const [Amount, setAmount] = useState("");
  const [Description, setDescription] = useState("");
  const { AddTransaction } = useContext(TransContext);
  const onSubmit = (evt) => {
    evt.preventDefault();
    if (Amount && Description) {
      let genId = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      };
      let newTran = {
        id: genId(),
        des: Description,
        amount: +Amount,
        type: Amount[0] == "-" ? "expense" : "income",
      };
      // console.log(newTran);
      AddTransaction(newTran);
    } else {
      alert("please fill the required fileds");
    }
  };
  return (
    <div className="add-transaction">
      <div style={{ textAlign: "center" }}>
        <h3>ADD New Transaaction</h3>
        <hr />
      </div>
      <form>
        <label>
          <span>Text</span>
          <input
            type="text"
            value={Description}
            onChange={(evt) => {
              setDescription(evt.target.value);
            }}
            placeholder="Enter Text"
            required
          />
        </label>
        <label>
          <span>Amount</span>
          <input
            type="number"
            value={Amount}
            onChange={(evt) => {
              setAmount(evt.target.value);
            }}
            placeholder="Enter Amount"
            required
          />
        </label>
        <input
          type="submit"
          value="ADD Transacction"
          onClick={(evt) => {
            onSubmit(evt);
          }}
        />
      </form>
    </div>
  );
}

export default ADDTransaction;
