import  { useState } from 'react'
import Input from '../Inputs/Input';
import EmojiPickerPopup from '../EmojiPickerPopup';

// AddIncomeForm component for adding a new income entry
const AddIncomeForm = ({onAddIncome}) => {

  // Local state for income form fields
  const [income, setIncome] = useState({
    source:"",
    amount:"",
    date:"",
    icon:"",
  });

  // Handle input changes for form fields
  const handleChange = (key, value) => setIncome({ ...income, [key]: value});

  return (
    <div>
      {/* Emoji picker for selecting an icon */}
      <EmojiPickerPopup
        icon={income.icon}
        onSelect={(selectedIcon)=> handleChange("icon", selectedIcon)}
      />
      {/* Input for income source */}
      <Input 
        value={income.source}
        onChange={({target})=> handleChange("source",target.value)}
        label="Income Source"
        placeholder="Freelance, salarym etc"
        type="text"
      />
      {/* Input for income amount */}
      <Input 
        value={income.amount}
        onChange={({target})=> handleChange("amount",target.value)}
        label="Amount"
        placeholder=""
        type="number"
      />
      {/* Input for income date */}
      <Input 
        value={income.date}
        onChange={({target})=> handleChange("date",target.value)}
        label="Date"
        placeholder=""
        type="date"
      />

      {/* Add income button */}
      <div className='flex justify-end mt-6'>
        <button
          type='button'
          className='add-btn add-btn-fill'
          onClick={()=>onAddIncome(income)}
        >
          Add Income
        </button>
      </div>

    </div>
  )
}

export default AddIncomeForm