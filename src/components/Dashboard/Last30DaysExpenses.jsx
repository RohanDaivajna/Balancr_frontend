import { useEffect, useState } from 'react'
import { prepareExpensesBarChartdata } from '../../utils/helper';
import CustomBarChart from '../Charts/CustomBarChart';

// Last30DaysExpenses component displays a bar chart of expenses for the last 30 days
const Last30DaysExpenses = ({data}) => {
   
    // Local state for chart data
    const [chartData, setChartData] = useState([]);

    // Update chart data whenever input data changes
    useEffect(() => {
        const result = prepareExpensesBarChartdata(data);
        setChartData(result);
        return () => {};
    }, [data]);


  return (
    <div className='card col-span-1'>
        {/* Header with title */}
        <div className='flex items-center justify-between'>
            <h5 className='text-lg'>Last 30 Days Expenses</h5>
        </div>

        {/* Bar chart showing last 30 days expenses */}
        <CustomBarChart data={chartData}/>
    </div>
  )
}

export default Last30DaysExpenses