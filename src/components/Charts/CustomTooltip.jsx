// CustomTooltip component for displaying custom tooltip content in charts
const CustomTooltip = ({ active, payload }) => {
    // Show tooltip only when active and payload exists
    if (active && payload && payload.length) {
        return (
            <div className='bg-white shadow-lg rounded-xl p-3 border border-purple-200'>
                {/* Category or label */}
                <p className='text-xs font-bold text-purple-700 mb-1'>
                    {payload[0].name}
                </p>
                {/* Amount value */}
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