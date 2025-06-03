// CustomLegend displays a styled legend for chart series
const CustomLegend = ({ payload }) => {
  return (
    // Container for all legend items
    <div className="flex flex-wrap justify-center gap-3 mt-5">
      {payload.map((entry, index) => (
        // Individual legend item with color and label
        <div
          key={`legend-${index}`}
          className="flex items-center gap-2 bg-gray-50 rounded-full px-3 py-1 shadow-sm"
        >
          {/* Color indicator */}
          <div
            className="w-4 h-4 rounded-full shadow"
            style={{ backgroundColor: entry.color }}
          ></div>
          {/* Series label */}
          <span className="text-xs text-gray-700 font-semibold tracking-wide">
            {entry.value}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CustomLegend