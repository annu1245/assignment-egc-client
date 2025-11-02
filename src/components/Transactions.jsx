import { useGetTransactionsQuery } from "../services/api.js";

function Transactions() {
    const { data: transactions, error, isLoading } = useGetTransactionsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="w-10/12 m-auto">
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
                        {transactions?.data?.map((post, index) => (
                            <tr key={post._id} className="hover:bg-base-300">
                                <td>{index+1}</td>
                                <td>{post.type}</td>
                                <td>{post.amount}</td>
                                <td>{post.category}</td>
                                <td>{post.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Transactions;
