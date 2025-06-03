import { useState } from 'react'
import EmojiPickerPopup from '../EmojiPickerPopup';
import Input from '../Inputs/Input';

// AddExpenseForm component for adding a new expense
const AddExpenseForm = ({onAddExpense}) => {

    // Local state for expense form fields
    const [expense, setExpense] = useState({
        category: '',
        amount: '',
        date: '',
        icon: ''
    });

    // Handle input changes for form fields
    const handleChange = (key,value) => {setExpense({...expense, [key]: value})};

    return (
        <div>
            {/* Emoji picker for selecting an icon */}
            <EmojiPickerPopup
                icon={expense.icon}
                onSelect={(selectedIcon)=> handleChange('icon', selectedIcon)}
            />

            {/* Input for expense category */}
            <Input
                value={expense.category}
                onChange={({target})=> handleChange('category', target.value)}
                label="Category"
                placeholder="Rent, Groceries, etc."
                type="text"
            />

            {/* Input for expense amount */}
            <Input
                value={expense.amount}
                onChange={({target})=> handleChange('amount', target.value)}
                label="Amount"
                placeholder=""
                type="number"
            />

            {/* Input for expense date */}
            <Input
                value={expense.date}
                onChange={({target})=> handleChange('date', target.value)}
                label="Date"
                placeholder=""
                type="date"
            />

            {/* Add expense button */}
            <div className='flex justify-end mt-6'>
                <button 
                    type='button'
                    className='add-btn add-btn-fill'
                    onClick={() => onAddExpense(expense)}
                >Add Expense
                </button>
            </div>
        </div>
    )
}

export default AddExpenseForm