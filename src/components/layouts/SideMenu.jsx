import React, { useContext } from 'react'
import { SIDE_MENU_DATA } from "../../utils/data";
import { UserContext } from '../../context/userContext';
import { useNavigate } from "react-router-dom"
import CharAvatar from '../Cards/CharAvatar';
import { BASE_URL } from "../../utils/apiPaths"; // Add this import


const SideMenu = ({ activeMenu }) => {

    const { user, clearUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleClick = (route) => {
        if (route === "logout") {
            handlelogout();
            return;
        }
        navigate(route);
    };

    const handlelogout = () => {
        localStorage.clear();
        clearUser();
        navigate("/login");
    };
     const getProfileImageUrl = () => {
        if (!user?.profileImageUrl) return "";
        // If already absolute (starts with http), return as is
        if (user.profileImageUrl.startsWith("http")) return user.profileImageUrl;
        // Otherwise, prepend BASE_URL
        return `${BASE_URL}${user.profileImageUrl}`;
    };
    
    return (
        <div className='w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200/50 sticky top-[61px] z-20 shadow-md flex flex-col'>
            <div className='flex flex-col items-center justify-center gap-3 mt-6 mb-6'>
                {getProfileImageUrl() ? (
                    <img
                        src={getProfileImageUrl()}
                        alt='Profile Image'
                        className='w-20 h-20 bg-slate-400 rounded-full shadow'
                    />
                ) : (
                    <CharAvatar
                        fullName={user?.fullName}
                        width="w-20"
                        height="h-20"
                        style="text-xl"
                    />
                )}
                <h5 className='text-gray-950 font-semibold leading-6 text-base'>
                    {user?.fullName || ""}
                </h5>
            </div>
            <div className="border-b border-gray-200 mb-4"></div>
            <div className="flex-1 flex flex-col px-2">
                {SIDE_MENU_DATA.map((item, index) => (
                    <button
                        key={`menu_${index}`}
                        className={`w-full flex items-center gap-4 text-[15px] py-3 px-5 rounded-xl mb-2 transition-all duration-150
                            ${activeMenu === item.label
                                ? "bg-primary text-white shadow-md"
                                : "text-gray-700 hover:bg-purple-50 hover:text-primary"
                            }`}
                        onClick={() => handleClick(item.path)}
                    >
                        <item.icon className={`text-xl ${activeMenu === item.label ? "text-white" : "text-primary"}`} />
                        {item.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default SideMenu