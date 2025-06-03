import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell,
} from 'recharts';

const CustomBarChart = ({ data }) => {

    const barColors = ["#7c3aed", "#a78bfa", "#38bdf8", "#fbbf24", "#34d399", "#f472b6"];
    const getBarColor = (index) => barColors[index % barColors.length];

    const CustomToolTip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className='bg-white shadow-lg rounded-xl p-3 border border-purple-200'>
                    <p className='text-xs font-bold text-purple-700 mb-1'>{payload[0].payload.category}</p>
                    <p className='text-sm text-gray-600'>
                        Amount: <span className='text-base font-semibold text-purple-900'>₹{payload[0].payload.amount}</span>
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className='bg-white mt-6 p-6 rounded-2xl shadow-lg'>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} barCategoryGap={30}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" tick={{ fontSize: 13, fill: "#7c3aed", fontWeight: 600 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 13, fill: "#64748b" }} axisLine={false} tickLine={false} />
                    <Tooltip content={<CustomToolTip />} cursor={{ fill: '#ede9fe', opacity: 0.3 }} />
                    <Bar
                        dataKey="amount"
                        radius={[12, 12, 0, 0]}
                        animationDuration={800}
                        maxBarSize={40}
                    >
                        {data.map((entry, index) => (
                            <Cell key={index} fill={getBarColor(index)} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default CustomBarChart