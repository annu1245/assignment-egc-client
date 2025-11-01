import { useState } from "react";
import "./App.css";
import TransactionForm from "./components/TransactionForm";
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import Transactions from "./components/Transactions.jsx";

function App() {
    return (
        <Provider store={store}>
            <TransactionForm />
            <Transactions />
        </Provider>
    );
}

export default App;
