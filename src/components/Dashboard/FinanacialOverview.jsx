import React from 'react'
import CustomPieCard from '../Charts/CustomPieCard';

const COLORS = ["#875CF5", "#FF6900", "#FA2C37"];

const FinanacialOverview = ({ totalBalance, totalIncome, totalExpense }) => {

    const balanceData =[
        { name: "Total Balance", amount: totalBalance},
        { name: "Total Income", amount: totalIncome},
        { name: "Total Expense", amount: totalExpense},
    ];

  return (
    <div className='card'>
        <div className='flex items-center justify-between'>
            <h5 className='text-lg'>Financial Overview</h5>
        </div>

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
