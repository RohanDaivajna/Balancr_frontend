import React, { useState, useContext } from 'react'
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"
import SideMenu from './SideMenu'
import { UserContext } from '../../context/userContext'

const Navbar = ({ activeMenu }) => {
    const [openSideMenu, setOpenSideMenu] = useState(false)
    const { user } = useContext(UserContext)

    return (
        <div className='flex items-center gap-5 bg-white border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-7 sticky top-0 z-30 shadow-sm rounded-b-2xl'>
            <button
                className='block lg:hidden text-black'
                onClick={() => setOpenSideMenu(!openSideMenu)}
            >
                {openSideMenu ? (
                    <HiOutlineX className='text-2xl' />
                ) : (
                    <HiOutlineMenu className='text-2xl' />
                )}
            </button>

            <h2 className='text-lg font-bold text-primary tracking-wide mr-4'>Balancr</h2>

            <span className="hidden md:inline text-gray-600 text-base font-medium ml-2">
                {user?.fullName ? `Welcome, ${user.fullName.split(' ')[0]}!` : "Welcome!"}
            </span>

            
            <div className="flex-1" />

          

            {openSideMenu && (
                <div
                    className='fixed inset-0 z-40 bg-black/20'
                    onClick={() => setOpenSideMenu(false)}
                >
                    <div
                        className='fixed top-[61px] left-0 bg-white shadow-lg h-[calc(100vh-61px)]'
                        onClick={e => e.stopPropagation()}
                    >
                        <SideMenu activeMenu={activeMenu} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar