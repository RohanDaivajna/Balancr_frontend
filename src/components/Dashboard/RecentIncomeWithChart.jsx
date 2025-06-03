import { useEffect, useState } from 'react'
import CustomPieCard from '../Charts/CustomPieCard';

// Colors for the pie chart segments
const COLORS = ['#875CF5', '#FA2C37', '#FF6900', '#4f39f6'];

// RecentIncomeWithChart component displays a pie chart of recent income sources
const RecentIncomeWithChart = ({data, totalIncome}) => {

  // Local state for chart data
  const [chartData, setChartData] = useState([]);

  // Prepare chart data from income transactions
  const prepareChartData = () => {
    const dataArr = data?.map((item)=> ({
      name: item?.source,
      amount: item?.amount,
    }));
    setChartData(dataArr);
  };

  // Update chart data whenever input data changes
  useEffect(() => {
    prepareChartData();
    return () => {};
  }, [data]);

  return (
    <div className='card'>
      {/* Header with title */}
      <div className='flex items-center justify-between'>
        <h5 className='text-lg'>Last 60 Days Income</h5>
      </div>

      {/* Pie chart showing recent income distribution */}
      <CustomPieCard
        data={chartData}
        label="Total Income"
        totalAmount={`$${totalIncome}`}
        showTextAnchor
        colors={COLORS}
      />
    </div>
  )
}

export default RecentIncomeWithChart