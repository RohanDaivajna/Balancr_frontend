// DeleteAlert component for confirming delete actions
const DeleteAlert = ({ content, onDelete }) => {
  return (
    <div>
      {/* Confirmation message */}
      <p className='text-sm'>{content}</p>
      <div className='flex justify-end mt-6'>
        {/* Delete button */}
        <button 
            type="button"
            className='add-btn add-btn-fill'
            onClick={onDelete}
        >
            Delete
        </button>
      </div>
    </div>
  )
}

export default DeleteAlert