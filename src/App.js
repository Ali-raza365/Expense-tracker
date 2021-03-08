import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Transaction from "./components/Transaction";
import Balance from "./components/Balance";
import ADDTransaction from "./components/ADDTransaction";
import TransactionHistory from "./components/TransactionHistory";
import { GlobalProvider } from "./Context/TransContext";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <Balance />
        <Transaction />
        <TransactionHistory />
        <ADDTransaction />
      </GlobalProvider>
    </div>
  );
}

export default App;
