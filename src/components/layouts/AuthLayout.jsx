import React from 'react'
import Card2 from "../../assets/Card2.jpg"
import { LuTrendingUpDown } from "react-icons/lu";

const AuthLayout = ({children}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-100 via-white to-emerald-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
     <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl flex overflow-hidden">
        {/* Left: Auth Form */}
        <div className="w-full md:w-1/2 px-10 py-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-violet-700 mb-2 tracking-tight">Balancr</h2>
          <p className="text-gray-500 mb-8 text-sm">Your personal finance companion</p>
          <div className="flex-1 flex flex-col justify-center">
            {children}
          </div>
        </div>
        {/* Right: Illustration & Info */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-tr from-violet-500 to-fuchsia-400 relative flex-col items-center justify-center p-8">
          <div className="absolute inset-0 bg-violet-700 opacity-10 rounded-3xl pointer-events-none" />
          <img
            src={Card2}
            alt="Finance Illustration"
            className="w-64 mb-8 drop-shadow-xl z-10 rou"
          />
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Track Your Income & Expenses"
            value="430,000"
            color="bg-fuchsia-500"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout

const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className={`flex gap-4 items-center bg-white/90 p-4 rounded-xl shadow-lg border border-gray-100 z-10`}>
      <div className={`w-12 h-12 flex items-center justify-center text-2xl text-white ${color} rounded-full shadow-md`}>
        {icon}
      </div>
      <div>
        <h6 className="text-xs text-gray-500 mb-1 font-medium">{label}</h6>
        <span className="text-xl font-semibold text-violet-700">₹{value}</span>
      </div>
    </div>
  );
}