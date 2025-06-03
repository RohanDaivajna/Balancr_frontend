import { useEffect, useState } from 'react'
import { prepareIncomeBarChartData } from '../../utils/helper';
import { LuPlus } from 'react-icons/lu';
import CustomBarChart from '../Charts/CustomBarChart';

// IncomeOveriew component displays a summary and bar chart of income
const IncomeOveriew = ({transactions, onAddIncome }) => {
  
    // Local state for chart data
    const [chartData, setChartData] = useState([]);

    // Update chart data whenever transactions change
    useEffect(() => {
      const result = prepareIncomeBarChartData(transactions);
      setChartData(result);
    
      return () => {}
    }, [transactions])
    
    return (
    <div className='card'>
        {/* Header with title, description, and add income button */}
        <div className='flex items-center justify-between'>
            <div className=''>
                <h5 className='text-lg'>Income Overview</h5>
                <p className='text-xs text-gray-400 mt-0.5'>
                    Track your earnings over time and analyze your income trends.
                </p>
            </div>
            <button className='add-btn' onClick={onAddIncome}>
                <LuPlus className='text-lg' />Add Income
            </button>
        </div>
        {/* Bar chart showing income trends */}
        <div className='mt-10'>
            <CustomBarChart data={chartData}/>
        </div>  
    </div>
  )
}

export default IncomeOveriew
