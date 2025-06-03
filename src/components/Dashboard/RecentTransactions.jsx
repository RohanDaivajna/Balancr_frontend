import moment from 'moment';
import { LuArrowRight } from 'react-icons/lu';
import TransactionInfoCard from '../Cards/TransactionInfoCard';

// RecentTransactions component displays a preview list of recent transactions (income/expense)
const RecentTransactions = ({ transactions, onSeeMore }) => {
  return (
    <div className='card'>
      {/* Header with title and "See All" button */}
      <div className='flex items-center justify-between'>
        <h5 className='text-lg'>Recent Transactions</h5>
        <button className='card-button' onClick={onSeeMore}>
            See All <LuArrowRight className='text-base' />
        </button>
      </div>
      {/* Show up to 5 recent transactions */}
      <div className='mt-6'>
          {transactions?.slice(0,5)?.map((item)=>(
            <TransactionInfoCard
              key={item._id}
              title={item.type == 'expense' ? item.category : item.source}
              icon = {item.icon}
              date = {moment(item.date).format('Do MMM YYYY')}
              amount = {item.amount}
              type = {item.type}
              hideDeleteBtn
            />
          ))}
        </div>
    </div>
  )
}

export default RecentTransactions