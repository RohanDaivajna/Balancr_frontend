import React from 'react';
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend
} from 'recharts';
import CustomTooltip from './CustomTooltip';
import CustomLegend from './CustomLegend';

const CustomPieCard = ({
  data,
  label,
  totalAmount,
  colors,
  showTextAnchor,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center">
      <ResponsiveContainer width="100%" height={380}>
        <PieChart>
          <Pie
            data={data}
            dataKey="amount"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={130}
            innerRadius={60}
            labelLine={false}
            stroke="#fff"
            strokeWidth={2}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend content={<CustomLegend />} />
          {showTextAnchor && (
            <>
              <foreignObject x="35%" y="40%" width="30%" height="30%">
                <div className="flex flex-col items-center justify-center">
                  <span
                    style={{
                      color: "#7c3aed",
                      fontWeight: 600,
                      fontSize: "14px",
                      background: "rgba(124, 58, 237, 0.06)",
                      borderRadius: "8px",
                      padding: "2px 8px",
                      marginBottom: "2px",
                      display: "inline-block"
                    }}
                  >
                    {label}
                  </span>
                  <span
                    style={{
                      color: "#22223b",
                      fontWeight: 700,
                      fontSize: "28px",
                      letterSpacing: "0.5px"
                    }}
                  >
                    {totalAmount}
                  </span>
                </div>
              </foreignObject>
            </>
          )}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieCard