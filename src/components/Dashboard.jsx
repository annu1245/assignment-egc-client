import TransactionAction from "./TransactionAction";
import Transactions from "./Transactions";

const Dashboard = () => {
    return (
        <div className="w-10/12 m-auto">
            <TransactionAction />
            <Transactions />
        </div>
    );
};

export default Dashboard;
