import "./App.css";
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import { ToastContainer } from 'react-toastify';
import Dashboard from "./components/Dashboard.jsx";

function App() {
    return (
        <Provider store={store}>
            <Dashboard />
            <ToastContainer />
        </Provider>
    );
}

export default App;
