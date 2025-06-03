import { LuArrowRight } from 'react-icons/lu'
import TransactionInfoCard from '../Cards/TransactionInfoCard'
import moment from 'moment'

// RecentIncome component displays a preview list of recent income transactions
const RecentIncome = ({transactions, onSeeMore}) => {
  return (
    <div className='card'>
        {/* Header with title and "See All" button */}
        <div className='flex items-center justify-between'>
            <h5 className='text-lg'>Income</h5>

            <button className='card-button' onClick={onSeeMore}>
                See All <LuArrowRight className="text-base"/>
            </button>
        </div>

        {/* Show up to 5 recent income transactions */}
        <div className='mt-6'>
            {transactions?.slice(0,5)?.map((item)=>(
                <TransactionInfoCard
                    key={item._id}
                    title={item.source}
                    icon={item.icon}
                    date={moment(item.date).format("Do MMM YYYY")}
                    amount={item.amount}
                    type="income"
                    hideDeleteBtn
                />
            ))}
        </div>
    </div>
  )
}

export default RecentIncome