import React from 'react'
import {
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Area,
    AreaChart,
} from 'recharts';

const CustomLineChart = ({ data }) => {

    const CustomTooltip = ({ active, payload }) => {
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
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#875cf5" stopOpacity={0.4} />
                            <stop offset="95%" stopColor="#875cf5" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                        dataKey="month"
                        tick={{ fill: '#7c3aed', fontSize: 13, fontWeight: 600 }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        tick={{ fill: '#64748b', fontSize: 13 }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: '#ede9fe', opacity: 0.3 }} />
                    <Area
                        type="monotone"
                        dataKey="amount"
                        stroke="#875cf5"
                        fillOpacity={1}
                        fill="url(#incomeGradient)"
                        strokeWidth={3}
                        dot={{ r: 4, fill: '#a78bfa', stroke: '#875cf5', strokeWidth: 2 }}
                        activeDot={{ r: 6, fill: '#7c3aed', stroke: '#fff', strokeWidth: 2 }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
};

export default CustomLineChart