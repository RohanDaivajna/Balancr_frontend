import { LuDownload } from 'react-icons/lu'
import TransactionInfoCard from '../Cards/TransactionInfoCard'
import moment from 'moment'

// IncomeList component displays a list of all income sources with download option
const IncomeList = ({ transactions, onDelete, onDownload }) => {
  return (
    <div className='card'>
       {/* Header with title and download button */}
       <div className='flex items-center justify-between'>
            <h5 className='text-lg'>Income Source</h5>

            <button className='card-button' onClick={onDownload}>
                <LuDownload className='text-base' />
                Download
            </button>
        </div>
        {/* List of income transaction cards */}
        <div className='grid grid-cols-1 md:grid-cols-2'>
            {transactions?.map((income)=>(
                <TransactionInfoCard
                    key={income._id}
                    title={income.source}
                    icon={income.icon}
                    date={moment(income.date).format("Do MMM YYYY")}
                    amount={income.amount}
                    type="income"
                    onDelete={() => onDelete(income._id)}
                />
            ))}
        </div>
    </div>
  )
}

export default IncomeList