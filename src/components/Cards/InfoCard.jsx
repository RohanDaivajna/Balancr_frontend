
const InfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-5 bg-white p-5 rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 group cursor-pointer hover:shadow-2xl hover:scale-105 hover:-translate-y-1">
      <div
        className={`w-14 h-14 flex items-center justify-center rounded-full drop-shadow-xl 
        ${color} bg-gradient-to-br from-green-400 via-green-500 to-emerald-600 
        group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-green-300/40 transition-all duration-300`}
      >
        <span className="text-white text-2xl">{icon}</span>
      </div>
      <div className="flex flex-col justify-center">
        <h6 className="text-xs text-gray-400 font-medium mb-1 tracking-wide uppercase">{label}</h6>
        <span className="text-xl font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">{value}</span>
      </div>
    </div>
  )
}

export default InfoCard