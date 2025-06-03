const CustomLegend = ({ payload }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-5">
      {payload.map((entry, index) => (
        <div
          key={`legend-${index}`}
          className="flex items-center gap-2 bg-gray-50 rounded-full px-3 py-1 shadow-sm"
        >
          <div
            className="w-4 h-4 rounded-full shadow"
            style={{ backgroundColor: entry.color }}
          ></div>
          <span className="text-xs text-gray-700 font-semibold tracking-wide">
            {entry.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CustomLegend