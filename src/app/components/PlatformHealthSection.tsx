import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts';
import { TrendingUp } from 'lucide-react';

// Custom tooltip component
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white px-4 py-3 rounded-lg shadow-lg border border-[#e5e7eb]">
        <p className="text-[12px] text-[#94a3b8] mb-1" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
          {payload[0].payload.period}
        </p>
        <p className="text-[16px] font-bold text-[#26273b]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
          Health Score: {payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

interface PlatformHealthSectionProps {
  onDetailsClick: () => void;
}

export function PlatformHealthSection({ onDetailsClick }: PlatformHealthSectionProps) {
  // Data for donut chart (78/100)
  const donutData = [
    { name: 'Health', value: 78 },
    { name: 'Remaining', value: 22 }
  ];

  // Data for line chart
  const lineData = [
    { period: 'W1', value: 61 },
    { period: 'W2', value: 68 },
    { period: 'W3', value: 72 },
    { period: 'W4', value: 75 },
    { period: 'W5', value: 77 },
    { period: 'W6', value: 79 }
  ];

  return (
    <div className="mb-6">
      <div className="grid grid-cols-2 gap-6 mb-2">
        {/* Left: Donut Chart */}
        <div className="bg-white rounded-[8px] border border-[#e5e7eb] p-6 flex flex-col items-center">
          {/* Donut Chart */}
          <div className="relative mb-4" style={{ width: '200px', height: '200px', minWidth: '200px', minHeight: '200px' }}>
            <PieChart width={200} height={200}>
              <Pie
                data={donutData}
                cx={100}
                cy={100}
                innerRadius={70}
                outerRadius={90}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
                stroke="none"
              >
                <Cell key="cell-health" fill="#0D8877" />
                <Cell key="cell-remaining" fill="#e5e7eb" />
              </Pie>
            </PieChart>
            {/* Center text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-[48px] font-bold text-[#0D8877]" style={{ fontFamily: 'Nunito Sans, sans-serif', lineHeight: 1 }}>
                78
              </div>
              <div className="text-[18px] text-[#94a3b8]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                / 100
              </div>
            </div>
          </div>

          {/* Title and description */}
          <h3 className="text-[18px] font-bold text-[#26273b] mb-2" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Overall Platform Health
          </h3>
          <p className="text-[14px] text-[#94a3b8] mb-3 text-center" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Healthy with improvement opportunities
          </p>

          {/* Improvement indicator */}
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#0D8877]" />
            <span className="text-[14px] text-[#0D8877]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Improving over recent periods
            </span>
          </div>
        </div>

        {/* Right: Line Chart */}
        <div className="bg-white rounded-[8px] border border-[#e5e7eb] p-6">
          <h3 className="text-[18px] font-bold text-[#26273b] mb-1" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Platform Health Trend
          </h3>
          <p className="text-[14px] text-[#94a3b8] mb-6" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Aggregated health index over last Six Week
          </p>

          {/* Chart */}
          <div style={{ width: '100%', height: '220px', minHeight: '220px' }}>
            <ResponsiveContainer width="100%" height={220} minWidth={300} minHeight={220}>
              <AreaChart data={lineData} margin={{ top: 10, right: 10, left: -20, bottom: 5 }}>
                <defs>
                  <linearGradient id="platformHealthGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop key="platform-stop-1" offset="0%" stopColor="#0D8877" stopOpacity={0.3} />
                    <stop key="platform-stop-2" offset="100%" stopColor="#0D8877" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid key="grid" strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
                <XAxis 
                  key="xaxis"
                  dataKey="period" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#94a3b8', fontSize: 12, fontFamily: 'Nunito Sans, sans-serif' }}
                />
                <YAxis 
                  key="yaxis"
                  ticks={[10, 30, 50, 70, 90]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#94a3b8', fontSize: 12, fontFamily: 'Nunito Sans, sans-serif' }}
                />
                <Area
                  key="area-health"
                  type="monotone"
                  dataKey="value"
                  stroke="#0D8877"
                  strokeWidth={2}
                  fill="url(#platformHealthGradient)"
                  dot={false}
                  activeDot={{ r: 6, fill: '#0D8877', stroke: '#fff', strokeWidth: 2 }}
                />
                <Tooltip key="tooltip" content={<CustomTooltip />} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Bottom note */}
          <p className="text-[12px] text-[#94a3b8] text-center mt-2" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Week Timely Trend
          </p>
        </div>
      </div>
      
      {/* Details Button */}
      <div className="flex justify-end mt-4">
        <button 
          onClick={onDetailsClick}
          className="px-4 py-2 bg-[#2a4eab] text-[#ffffff] border border-[#2a4eab] rounded-[5px] font-['Nunito_Sans',sans-serif] font-bold text-[14px] hover:bg-[#1e3a8a] transition-colors" 
        >
          Details
        </button>
      </div>
    </div>
  );
}