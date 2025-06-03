import { LuDownload } from 'react-icons/lu'
import TransactionInfoCard from '../Cards/TransactionInfoCard'
import moment from 'moment'

// ExpenseList component displays a list of all expenses with download option
const ExpenseList = ({ transactions, onDelete, onDownload }) => {
  return (
    <div className='card'>
       {/* Header with title and download button */}
       <div className='flex items-center justify-between'>
            <h5 className='text-lg'>All Expenses</h5>

            <button className='card-button' onClick={onDownload}>
                <LuDownload className='text-base' />
                Download
            </button>
        </div>
        {/* List of expense transaction cards */}
        <div className='grid grid-cols-1 md:grid-cols-2'>
            {transactions?.map((expense)=>(
                <TransactionInfoCard
                    key={expense._id}
                    title={expense.category}
                    icon={expense.icon}
                    date={moment(expense.date).format("Do MMM YYYY")}
                    amount={expense.amount}
                    type="expense"
                    onDelete={() => onDelete(expense._id)}
                />
            ))}
        </div>
    </div>
  )
}

export default ExpenseList