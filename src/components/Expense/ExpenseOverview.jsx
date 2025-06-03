import { useEffect, useState } from 'react'
import { prepareExpenseLineChartData } from '../../utils/helper';
import { LuPlus } from 'react-icons/lu';
import CustomLineChart from '../Charts/CustomLineChart';

// ExpenseOverview component displays a summary and chart of expenses
const ExpenseOverview = ({ transactions, onExpenseIncome }) => {

    // Local state for chart data
    const [chartData, setChartData] = useState([]);

    // Update chart data whenever transactions change
    useEffect(() => {
        const result = prepareExpenseLineChartData(transactions);
        setChartData(result);
        return () => {};
    }, [transactions]);

    return (
    <div className='card'>
        {/* Header with title, description, and add expense button */}
        <div className='flex items-center justify-between'>
            <div className=''>
                <h5 className='text-lg'>Expense Overview</h5>
                <p className='text-xs text-gray-400 mt-0.5'>
                    Track your spending trends over time and gain insights into where
                    your money goes.
                </p>
            </div>
            <button className='add-btn'
                onClick={onExpenseIncome}
            >
                <LuPlus className='text-lg'/>
                Add Expense
            </button>
        </div>
        {/* Line chart showing expense trends */}
        <div className='mt-10'>
            <CustomLineChart data={chartData}/>
        </div>
    </div>
  )
}

export default ExpenseOverview