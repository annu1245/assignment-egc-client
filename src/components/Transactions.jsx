import { useGetTransactionsQuery } from "../services/api.js";

function Transactions() {
    const { data: transactions, error, isLoading } = useGetTransactionsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <h1>Transactions</h1>
            <ul>
                {transactions?.data?.map((post) => (
                    <li key={post._id}>
                        {post.type} - {post.amount} - {post.category} - {post.description}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Transactions;
