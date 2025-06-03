import moment from 'moment'
import { LuArrowRight } from 'react-icons/lu'
import TransactionInfoCard from '../Cards/TransactionInfoCard'

// ExpenseTransactions component displays a preview list of recent expenses
const ExpenseTransactions = ({ transactions, onSeeMore }) => {
  return (
    <div className='card'>
        {/* Header with title and "See All" button */}
        <div className='flex items-center justify-between'>
            <h5 className='text-lg'>Expenses</h5>

            <button className='card-button' onClick={onSeeMore}>
                See All <LuArrowRight className='text-base'/>
            </button>
        </div>
        {/* Show up to 5 recent expense transactions */}
        <div className='mt-6'>
            {transactions?.slice(0,5)?.map((expense) => (
                <TransactionInfoCard
                key={expense._id}
                title={expense.category}
                icon={expense.icon}
                date={moment(expense.date).format("Do MMM YYYY")}
                amount={expense.amount}
                type="expense"
                hideDeleteBtn
            />
            ))}
        </div>
    </div>
  )
}

export default ExpenseTransactions