import React from "react";

interface DashboardCardProps {
  title: string;
  value: string | number;
  unit?: string;
  color?: string; // optional override
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  unit,
  color = "bg-purple-600",
}) => {
  return (
    <div className={`rounded-2xl p-4 shadow-md text-white ${color}`}>
      <div className="text-sm opacity-80">{title}</div>
      <div className="text-3xl font-semibold">
        {value}
        {unit && <span className="text-lg ml-1">{unit}</span>}
      </div>
    </div>
  );
};

export default DashboardCard;
