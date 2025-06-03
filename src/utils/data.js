import {
    LuHandCoins,
    LuWalletMinimal,
    LuLogOut,
} from "react-icons/lu";
import { LuLayoutDashboard } from "react-icons/lu";

// Sidebar menu data for navigation
export const SIDE_MENU_DATA = [
    {
        id:"01",
        label:"Dashboard",
        icon:LuLayoutDashboard, // Dashboard icon
        path:"/dashboard",
    },
    {
        id:"02",
        label:"Income",
        icon:LuWalletMinimal, // Income icon
        path:"/income",
    },
    {
        id:"03",
        label:"Expense",
        icon:LuHandCoins, // Expense icon
        path:"/expense",
    },
    {
        id:"04",
        label:"Logout",
        icon:LuLogOut, // Logout icon
        path:"logout",
    },
];