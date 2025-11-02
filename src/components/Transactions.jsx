import { useSelector } from "react-redux";
import { useGetTransactionsQuery } from "../services/api.js";

function Transactions() {
    const filters = useSelector((state) => state.filter);
    const { data, error, isLoading } = useGetTransactionsQuery(filters);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <div className="py-2">Total records: {data?.length}</div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-200">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Category</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.transactions?.map((transaction, index) => (
                            <tr key={transaction._id} className="hover:bg-base-300">
                                <td>{index + 1}</td>
                                <td>{transaction.type}</td>
                                <td>{transaction.amount}</td>
                                <td>{transaction.category}</td>
                                <td>{transaction.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Transactions;
