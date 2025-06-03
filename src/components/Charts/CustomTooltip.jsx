import React from 'react'

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className='bg-white shadow-lg rounded-xl p-3 border border-purple-200'>
                <p className='text-xs font-bold text-purple-700 mb-1'>
                    {payload[0].name}
                </p>
                <p className='text-sm text-gray-600'>
                    Amount:
                    <span className='text-base font-semibold text-purple-900 ml-1'>
                        ₹{payload[0].value}
                    </span>
                </p>
            </div>
        )
    }
    return null;
}

export default CustomTooltip