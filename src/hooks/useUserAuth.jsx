import { useContext, useEffect } from "react"
import { UserContext } from "../context/userContext"
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";

// Custom hook to ensure user authentication and fetch user info if not present
export const useUserAuth = () => {
    const {user, updateUser, clearUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(()=>{
        // If user is already present in context, do nothing
        if(user) return;

        let isMounted = true;

        // Fetch user info from backend
        const fetchUserInfo = async () => {
            try{
                const response = await axiosInstance.get(API_PATHS.AUTH.GET_USER_INFO);
                if(isMounted && response.data){
                    updateUser(response.data); // Update user context with fetched data
                }
            }catch(error){
                console.error("Failed to fetch user info:", error);
                if(isMounted){
                    clearUser(); // Clear user context on error
                    navigate("/login"); // Redirect to login if not authenticated
                }
           }
        };
        fetchUserInfo();

        // Cleanup to avoid state updates on unmounted component
        return ()=> {
            isMounted = false;
        };
    },[updateUser, clearUser, navigate]);
    return { user, updateUser, clearUser };
};