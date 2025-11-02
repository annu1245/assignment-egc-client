import { useState } from "react";
import Filter from "./Filter";
import TransactionDialog from "./TransactionDialog";

const TransactionAction = () => {
    const [ type, setType ] = useState("income");

    const handleIncome = () => {
        setType("income");
        document.getElementById('transaction_modal').showModal();
    }

    const handleExpense = () => {
        setType("expense");
        document.getElementById('transaction_modal').showModal();
    }

    return (
        <>
            <div className="flex justify-between">
                <Filter />
                <div className="flex gap-x-5 items-end pb-1">
                    <button className="btn bg-[#1b9cff] text-white" onClick={handleIncome}>Income</button>
                    <button className="btn bg-[#ffaf3b] text-white" onClick={handleExpense}>Expense</button>
                </div>
            </div>
            <TransactionDialog type={type} />
        </>
    );
};

export default TransactionAction;
