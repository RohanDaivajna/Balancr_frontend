import {
    LuTrendingUp,
    LuTrendingDown,
    LuTrash2,
    LuUtensils,
} from 'react-icons/lu';

const TransactionInfoCard = ({
    title,
    icon,
    date,
    amount,
    type,
    hideDeleteBtn,
    onDelete
}) => {

    const getAmountStyles = () =>
        type === "income"
            ? "bg-green-50 text-green-500 group-hover:bg-green-100"
            : "bg-red-50 text-red-500 group-hover:bg-red-100";

    return (
        <div className="group relative flex items-center gap-4 mt-2 p-3 rounded-lg bg-white border border-gray-100 shadow transition-all duration-200 hover:shadow-lg hover:bg-gray-50">
            <div className="w-12 h-12 flex items-center justify-center text-xl text-gray-800 bg-gray-100 rounded-full transition-all duration-200 group-hover:scale-105 group-hover:shadow-md">
                {icon ? (
                    <img src={icon} alt={title} className="w-6 h-6" />
                ) : (
                    <LuUtensils />
                )}
            </div>

            <div className="flex-1 flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-700 font-semibold">{title}</p>
                    <p className="text-xs text-gray-400 mt-1">{date}</p>
                </div>

                <div className="flex items-center gap-2">
                    {!hideDeleteBtn && (
                        <button
                            className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                            onClick={onDelete}
                        >
                            <LuTrash2 size={18} />
                        </button>
                    )}

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