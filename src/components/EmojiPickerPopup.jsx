import React, { useState } from 'react'
import { LuImage, LuX } from 'react-icons/lu';
import EmojiPicker from 'emoji-picker-react';

// EmojiPickerPopup allows user to pick or change an emoji/icon
const EmojiPickerPopup = ({icon, onSelect}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex flex-col md:flew-row items-start gap-5 mb-6'>
        {/* Icon display and trigger to open emoji picker */}
        <div
            className='flex items-center gap-2 cursor-pointer'
            onClick={()=> setIsOpen(true)}
        >
            <div className='w-12 h-12 flex items-center justify-center text-2xl bg-purple-50 text-primary rounded-lg'>
                {icon ?(
                    <img src={icon} alt="icon" className='w-12 h-12'/>
                ):(
                    <LuImage/>
                )}
            </div>

            <p className=''>{icon? "Change icon":"Pick an icon"}</p>
        </div>

        {/* Emoji picker popup */}
        {isOpen && (
            <div className='relative'>
                {/* Close button for emoji picker */}
                <button
                    className='w-7 h-7 flex items-center justify-center bg-white border border-gray-200 rounded-full -top-2 -right-2 z-10 cursor-pointer'
                    onClick={()=> setIsOpen(false)}
                >
                    <LuX/>
                </button>

                {/* Emoji picker component */}
                <EmojiPicker
                    open={isOpen}
                    onEmojiClick={(emoji) => onSelect(emoji?.imageUrl || "")}
                />
            </div>
        )}
    </div>
  )
}

export default EmojiPickerPopup