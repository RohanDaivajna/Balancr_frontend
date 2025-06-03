import {
    LuTrendingUp,
    LuTrendingDown,
    LuTrash2,
    LuUtensils,
} from 'react-icons/lu';

// TransactionInfoCard displays a transaction with icon, title, date, amount, and optional delete button
const TransactionInfoCard = ({
    title,
    icon,
    date,
    amount,
    type,
    hideDeleteBtn,
    onDelete
}) => {

    // Returns styles for amount based on transaction type
    const getAmountStyles = () =>
        type === "income"
            ? "bg-green-50 text-green-500 group-hover:bg-green-100"
            : "bg-red-50 text-red-500 group-hover:bg-red-100";

    return (
        // Card container with hover and shadow effects
        <div className="group relative flex items-center gap-4 mt-2 p-3 rounded-lg bg-white border border-gray-100 shadow transition-all duration-200 hover:shadow-lg hover:bg-gray-50">
            {/* Icon section: shows custom icon or default */}
            <div className="w-12 h-12 flex items-center justify-center text-xl text-gray-800 bg-gray-100 rounded-full transition-all duration-200 group-hover:scale-105 group-hover:shadow-md">
                {icon ? (
                    <img src={icon} alt={title} className="w-6 h-6" />
                ) : (
                    <LuUtensils />
                )}
            </div>

            {/* Main content: title, date, amount, and delete button */}
            <div className="flex-1 flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-700 font-semibold">{title}</p>
                    <p className="text-xs text-gray-400 mt-1">{date}</p>
                </div>

                <div className="flex items-center gap-2">
                    {/* Delete button, shown on hover if not hidden */}
                    {!hideDeleteBtn && (
                        <button
                            className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                            onClick={onDelete}
                        >
                            <LuTrash2 size={18} />
                        </button>
                    )}

                    {/* Amount section with icon and color based on type */}
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-md transition-all duration-200 ${getAmountStyles()} group-hover:scale-105`}>
                        <h6 className="text-xs font-semibold">
                            {type === 'income' ? "+" : "-"} ₹{amount}
                        </h6>
                        {type === 'income' ? <LuTrendingUp /> : <LuTrendingDown />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransactionInfoCard