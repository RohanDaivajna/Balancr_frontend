import React, { useEffect, useState } from 'react'
import { useUserAuth } from '../../hooks/useUserAuth';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { API_PATHS } from '../../utils/apiPaths';
import toast from 'react-hot-toast';
import axiosInstance from '../../utils/axiosInstance';
import ExpenseOverview from '../../components/Expense/ExpenseOverview';
import AddExpenseForm from '../../components/Expense/AddExpenseForm';
import Model from '../../components/Model';
import ExpenseList from '../../components/Expense/ExpenseList';
import DeleteAlert from '../../components/DeleteAlert';

const Expense = () => {
  useUserAuth(); // Ensure user is authenticated
  const [expenseData, setExpenseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    show: false,
    data: null,
  });

  const [openAddExpenseModel, setOpenAddExpenseModel] = useState(false)

  // Fetch all expense data from backend
  const fetchExpenseData = async () => {
    if(loading) return;

    try{
      const response = await axiosInstance.get(
        `${API_PATHS.EXPENSE.GET_ALL_EXPENSE}`
      );

      if(response.data){
        setExpenseData(response.data);
      }
    }catch(error){
      console.log("Something went wrong. Please try again", error);
    }finally{
      setLoading(false);
    }
  };

  // Handle adding a new expense
  const handleAddExpense = async (expense) => {
    const { category, amount, date, icon } = expense;

    if(!category.trim()){
      toast.error("Expense category is required");
      return;
    }
    if(!amount || isNaN(amount)|| Number(amount)<=0 ){
      toast.error("Valid expense amount is required");
      return;
    }

    if(!date){
      toast.error("Expense date is required");
      return;
    }

    try{
      await axiosInstance.post(API_PATHS.EXPENSE.ADD_EXPENSE,{
        category,
        amount,
        date,
        icon,
      });

      setOpenAddExpenseModel(false);
      toast.success("Expense added successfully");
      fetchExpenseData();
    }catch(error){
      console.error("Error adding expense:",
        error.response?.data?.message || error.message
      );
    }
  };

  // Handle deleting an expense
  const deleteExpense = async (id) => {
    try{
      await axiosInstance.delete(API_PATHS.EXPENSE.DELETE_EXPENSE(id));
      setOpenDeleteAlert({ show: false, data: null });
      toast.success("Expense details deleted successfully");
      fetchExpenseData();
    }catch(error){
      console.error("Error deleting expense:",
        error.response?.data?.message || error.message
      );
    }
  };

  // Handle downloading all expense data as Excel
  const handleDownloadExpenseData = async () => {
    try{
      const response = await axiosInstance.get(
        API_PATHS.EXPENSE.DOWNLOAD_EXPENSE,
        { responseType: 'blob' }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'expense_data.xlsx');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    }catch(error) {
      console.error("Error downloading expense data:", error);
      toast.error("Failed to download expense data, Please try again");
    }
  };

  // Fetch expense data on component mount
  useEffect(() => {
    fetchExpenseData();
    return () => {};
  }, []);
  
  return (
   <DashboardLayout activeMenu="Expense">
      <div className='my-5 mx-auto'>
        <div className='grid grid-cols-1 gap-6'>
          <div className=''>
            {/* Expense overview and add button */}
            <ExpenseOverview
              transactions={expenseData}
              onExpenseIncome={()=> setOpenAddExpenseModel(true)}
            />
          </div>

          {/* Expense list with delete and download actions */}
          <ExpenseList
            transactions={expenseData}
            onDelete={(id)=> setOpenDeleteAlert({ show: true, data: id })}
            onDownload={handleDownloadExpenseData}
          />

        </div>

        {/* Modal for adding a new expense */}
        <Model
          isOpen={openAddExpenseModel}
          onClose={() => setOpenAddExpenseModel(false)}
          title="Add Expense"
          >
            <AddExpenseForm onAddExpense={handleAddExpense} />
          </Model>

        {/* Modal for confirming expense deletion */}
        <Model
          isOpen={openDeleteAlert.show}
          onClose={() => setOpenDeleteAlert({ show: false, data: null })}
          title="Delete Expense"
        >
          <DeleteAlert
            content="Are you sure you want to delete this expense details?"
            onDelete={() => deleteExpense(openDeleteAlert.data)}
          />
        </Model>

      </div>
    </DashboardLayout>
  )
}

export default Expense