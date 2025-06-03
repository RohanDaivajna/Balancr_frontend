import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import IncomeOveriew from '../../components/Income/IncomeOveriew'
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import Model from '../../components/Model';
import AddIncomeForm from '../../components/Income/AddIncomeForm';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useUserAuth } from '../../hooks/useUserAuth';
import IncomeList from '../../components/Income/IncomeList';
import DeleteAlert from '../../components/DeleteAlert';

const Income = () => {
  useUserAuth(); // Ensure user is authenticated
  const [incomeData, setIncomeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    show: false,
    data: null,
  });

  const [openAddIncomeModel, setOpenAddIncomeModel] = useState(false)

  // Fetch all income data from backend
   const fetchIncomeData = async () => {
      if(loading) return;

      try{
        const response = await axiosInstance.get(
          `${API_PATHS.INCOME.GET_ALL_INCOME}`
        );

        if(response.data){
          setIncomeData(response.data);
        }
      }catch(error){
        console.log("Something went wrong. Please try again", error);
      }finally{
        setLoading(false);
      }
   };

   // Handle adding a new income
   const handleAddIncome = async (income) => {
    const { source, amount, date, icon } = income;

    if(!source.trim()){
      toast.error("Income source is required");
      return;
    }
    if(!amount || isNaN(amount)|| Number(amount)<=0 ){
      toast.error("Valid income amount is required");
      return;
    }

    if(!date){
      toast.error("Income date is required");
      return;
    }

    try{
      await axiosInstance.post(API_PATHS.INCOME.ADD_INCOME,{
        source,
        amount,
        date,
        icon,
      });

      setOpenAddIncomeModel(false);
      toast.success("Income added successfully");
      fetchIncomeData();
    }catch(error){
      console.error("Error adding income:",
        error.response?.data?.message || error.message
      );
    }
   };

   // Handle deleting an income
   const deleteIncome = async (id) => {
    try{
      await axiosInstance.delete(API_PATHS.INCOME.DELETE_INCOME(id));
      setOpenDeleteAlert({ show: false, data: null });
      toast.success("Income details deleted successfully");
      fetchIncomeData();
    }catch(error){
      console.error("Error deleting income:",
        error.response?.data?.message || error.message
      );
    }
   };

  // Handle downloading all income data as Excel
  const handleDownloadIncomeData = async () => {
    try{
      const response = await axiosInstance.get(
        API_PATHS.INCOME.DOWNLOAD_INCOME,
        { responseType: 'blob' }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'income_data.xlsx');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    }catch(error) {
      console.error("Error downloading income data:", error);
      toast.error("Failed to download income data, Please try again");
    }
  };

  // Fetch income data on component mount
  useEffect(() => {
    fetchIncomeData();
    return () => {};
  }, [])
  

  return (
    <DashboardLayout activeMenu="Income">
      <div className='my-5 mx-auto'>
        <div className='grid grid-cols-1 gap-6'>
          <div className=''>
            {/* Income overview and add button */}
            <IncomeOveriew
              transactions={incomeData}
              onAddIncome={()=> setOpenAddIncomeModel(true)}
            />
          </div>

        {/* Income list with delete and download actions */}
        <IncomeList
          transactions={incomeData}
          onDelete={(id) => setOpenDeleteAlert({ show: true, data: id })}
          onDownload={handleDownloadIncomeData}
        />

        </div>

        {/* Modal for adding a new income */}
        <Model
          isOpen={openAddIncomeModel}
          onClose={()=> setOpenAddIncomeModel(false)}
          title="Add Income"
        >
         <AddIncomeForm onAddIncome={handleAddIncome} />
        </Model>

        {/* Modal for confirming income deletion */}
        <Model
          isOpen={openDeleteAlert.show}
          onClose={() => setOpenDeleteAlert({ show: false, data: null })}
          title="Delete Income"
        >
          <DeleteAlert
            content="Are you sure you want to delete this income details?"
            onDelete={() => deleteIncome(openDeleteAlert.data)}
          />
        </Model>
      </div>
    </DashboardLayout>
  )
}

export default Income