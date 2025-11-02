import "./App.css";
import TransactionForm from "./components/TransactionForm";
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import Transactions from "./components/Transactions.jsx";
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <Provider store={store}>
            <TransactionForm />
            <Transactions />
            <ToastContainer />
        </Provider>
    );
}

export default App;
