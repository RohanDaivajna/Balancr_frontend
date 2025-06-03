import moment from "moment";

/**
 * Validates if the given email is in a correct format.
 */
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

/**
 * Returns the initials (up to 2 letters) from a name string.
 */
export const getInitials = (name) => {
  if(!name) return "";

  const words = name.split(" ");
  let initials = "";

  for (let i=0; i< Math.min(words.length,2); i++){
    initials += words[i][0];
  }
  return initials.toUpperCase();
}

/**
 * Adds thousands separator (comma) to a number.
 */
export const addThousandsSeparator = (num) => {
  if(num == null || isNaN(num)) return "";

  const [integerPart, fractionalpart] = num.toString().split(".");
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  return fractionalpart 
  ? `${formattedInteger}.${fractionalpart}` 
  : formattedInteger;
  
};

/**
 * Prepares data for expenses bar chart (category and amount).
 */
export const prepareExpensesBarChartdata = (data = []) =>{
    const chartData = data.map((item)=>({
      category: item?.category,
      amount: item?.amount,
    }));

    return chartData;
}

/**
 * Prepares data for income bar chart, sorted by date.
 */
export const prepareIncomeBarChartData = (data = []) => {
  const sortedData = [...data].sort((a,b)=> new Date(a.date)- new Date(b.date));
  
  const chartData = sortedData.map((item)=>({
    month: moment(item?.date).format('Do MMM'),
    amount: item?.amount,
    source: item?.source,
  }));
  return chartData;
}

/**
 * Prepares data for expense line chart, sorted by date.
 */
export const prepareExpenseLineChartData = (data = []) => {
  const sortedData = [...data].sort((a,b)=> new Date(a.date)- new Date(b.date));
  
  const chartData = sortedData.map((item)=>({
    month: moment(item?.date).format('Do MMM'),
    amount: item?.amount,
    category: item?.category,
  }));
  
  return chartData;
}