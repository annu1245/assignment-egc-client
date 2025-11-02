import { useGetTransactionsQuery } from "../services/api";
import TransactionAction from "./TransactionAction";
import TransactionBarChart from "./TransactionBarChart";
import Transactions from "./Transactions";
import { useSelector } from "react-redux";

const Dashboard = () => {
    const filters = useSelector((state) => state.filter);
    const { data, isLoading } = useGetTransactionsQuery(filters);

    if (isLoading) return <div>Loading chart...</div>;

    return (
        <div className="w-10/12 m-auto">
            <TransactionAction />
            <TransactionBarChart transactions={data?.transactions || []} />
            <Transactions />
        </div>
    );
};

export default Dashboard;
