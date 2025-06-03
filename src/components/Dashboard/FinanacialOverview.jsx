import CustomPieCard from '../Charts/CustomPieCard';

// Colors for the pie chart segments
const COLORS = ["#875CF5", "#FF6900", "#FA2C37"];

// FinanacialOverview component displays a pie chart summary of balance, income, and expense
const FinanacialOverview = ({ totalBalance, totalIncome, totalExpense }) => {

    // Prepare data for the pie chart
    const balanceData =[
        { name: "Total Balance", amount: totalBalance},
        { name: "Total Income", amount: totalIncome},
        { name: "Total Expense", amount: totalExpense},
    ];

  return (
    <div className='card'>
        {/* Header with title */}
        <div className='flex items-center justify-between'>
            <h5 className='text-lg'>Financial Overview</h5>
        </div>

        {/* Pie chart showing balance, income, and expense */}
        <CustomPieCard
            data={balanceData}
            label="Total balance"
            totalAmount={`₹${totalBalance}`}
            colors={COLORS}
            showTextAnchor
        />      
    </div>
  )
}

export default FinanacialOverview