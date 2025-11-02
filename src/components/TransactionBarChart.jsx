import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const TransactionBarChart = ({ transactions }) => {
    if (!transactions || transactions.length === 0) return <div>No data available</div>;

    const grouped = transactions.reduce((acc, t) => {
        const month = new Date(t.date).toLocaleString("default", { month: "short", year: "numeric" });
        if (!acc[month]) acc[month] = { month, income: 0, expense: 0 };
        acc[month][t.type] += Number(t.amount);
        return acc;
    }, {});

    const chartData = Object.values(grouped);

    return (
        <div className="bg-base-200 rounded-xl p-4 my-5">
            <h2 className="text-lg font-semibold mb-2 text-center">Income vs Expense</h2>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="income" fill="#1b9cff" name="Income" />
                    <Bar dataKey="expense" fill="#ffaf3b" name="Expense" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TransactionBarChart;
