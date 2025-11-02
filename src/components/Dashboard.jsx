import Filter from "./Filter";
import TransactionDialog from "./TransactionDialog";
import Transactions from "./Transactions";

const Dashboard = () => {
    return (
        <div className="w-10/12 m-auto">
            {/* <TransactionDialog /> */}
            <Filter />
            <Transactions />
        </div>
    );
};

export default Dashboard;
