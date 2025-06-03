import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import { useUserAuth } from '../../hooks/useUserAuth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import InfoCard from '../../components/Cards/InfoCard';
import { IoMdCard, IoMdDocument } from 'react-icons/io';
import { LuHandCoins, LuWalletMinimal } from 'react-icons/lu';
import { addThousandsSeparator } from '../../utils/helper';
import RecentTransactions from '../../components/Dashboard/RecentTransactions';
import FinanacialOverview from '../../components/Dashboard/FinanacialOverview';
import ExpenseTransactions from '../../components/Dashboard/ExpenseTransactions';
import Last30DaysExpenses from '../../components/Dashboard/Last30DaysExpenses';
import RecentIncomeWithChart from '../../components/Dashboard/RecentIncomeWithChart';
import RecentIncome from '../../components/Dashboard/RecentIncome';

const Home = () => {
  useUserAuth(); // Ensure user is authenticated

  const navigate = useNavigate();

  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch dashboard data from backend
  const fetchDashboardData = async () => {
    if(loading) return;
    setLoading(true);

    try{
      const response = await axiosInstance.get(`${API_PATHS.DASHBOARD.GET_DATA}`);
      if(response.data){
        setDashboardData(response.data);
      }
    }catch(error){
      console.error("Something went wrong. Please try agian later",error);
    }finally{
      setLoading(false);
    }
  };

  // Fetch dashboard data on component mount
  useEffect(() => {
    fetchDashboardData();
    return () => {
    }
  }, [])
  
  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className='my-5 mx-auto'>
        {/* Info cards for balance, income, and expense */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <InfoCard
            icon={<IoMdCard/>}
            label="Total Balance"
            value={addThousandsSeparator(dashboardData?.totalBalance || 0)}
            color = "bg-primary"
          />
          <InfoCard
            icon={<LuWalletMinimal/>}
            label="Total Income"
            value={addThousandsSeparator(dashboardData?.totalIncome || 0)}
            color = "bg-orange-500"
          />
          <InfoCard
            icon={<LuHandCoins/>}
            label="Total Expense"
            value={addThousandsSeparator(dashboardData?.totalExpense || 0)}
            color = "bg-red-500"
          />
        </div>

        {/* Dashboard widgets and charts */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
          {/* Recent transactions list */}
          <RecentTransactions
            transactions={dashboardData?. recentTransactions}
            onSeeMore={() => navigate("/expense")}
          />
        
          {/* Financial overview summary */}
          <FinanacialOverview
            totalBalance={dashboardData?.totalBalance || 0}
            totalIncome={dashboardData?.totalIncome || 0}
            totalExpense={dashboardData?.totalExpense || 0}
          />

          {/* Expense transactions for last 30 days */}
          <ExpenseTransactions
            transactions={dashboardData?.last30DaysExpenses?.transactions || []}
            onSeeMore={() => navigate("/expense")}
            />

          {/* Bar chart for last 30 days expenses */}
          <Last30DaysExpenses
            data={dashboardData?.last30DaysExpenses?.transactions || []}
            />

            {/* Recent income with chart (last 60 days, top 4) */}
            <RecentIncomeWithChart
                data={dashboardData?.last60DaysIncome?.transactions?.slice(0,4) || []}
                totalIncome={dashboardData?.totalIncome || 0}
            />

            {/* Recent income list (last 60 days) */}
            <RecentIncome
              transactions={dashboardData?.last60DaysIncome?.transactions || []}
              onSeeMore={()=> navigate("/income")}
            />
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Home