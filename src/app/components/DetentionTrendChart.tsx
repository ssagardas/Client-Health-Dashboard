import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Maximize2 } from 'lucide-react';
import { ChartModal } from './ChartModal';

const dailyData = [
  { date: 'Dec 15', loadingDetention: 3.5, unloadingDetention: 5.2 },
  { date: 'Dec 16', loadingDetention: 3.2, unloadingDetention: 6.5 },
  { date: 'Dec 17', loadingDetention: 4.1, unloadingDetention: 7.8 },
  { date: 'Dec 18', loadingDetention: 2.8, unloadingDetention: 6.2 },
  { date: 'Dec 19', loadingDetention: 3.3, unloadingDetention: 4.8 },
  { date: 'Dec 20', loadingDetention: 3.7, unloadingDetention: 5.8 },
  { date: 'Dec 21', loadingDetention: 2.5, unloadingDetention: 7.2 }
];

const weeklyData = [
  { date: 'Week 1', loadingDetention: 4.2, unloadingDetention: 6.8 },
  { date: 'Week 2', loadingDetention: 3.8, unloadingDetention: 7.2 },
  { date: 'Week 3', loadingDetention: 3.5, unloadingDetention: 6.5 },
  { date: 'Week 4', loadingDetention: 4.0, unloadingDetention: 7.0 }
];

const monthlyData = [
  { date: 'Sep', loadingDetention: 4.5, unloadingDetention: 7.5 },
  { date: 'Oct', loadingDetention: 3.8, unloadingDetention: 6.8 },
  { date: 'Nov', loadingDetention: 4.2, unloadingDetention: 7.2 },
  { date: 'Dec', loadingDetention: 3.5, unloadingDetention: 6.5 }
];

type TimeRange = 'daily' | 'weekly' | 'monthly';

export function DetentionTrendChart() {
  const [timeRange, setTimeRange] = useState<TimeRange>('daily');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getData = () => {
    switch (timeRange) {
      case 'daily':
        return dailyData;
      case 'weekly':
        return weeklyData;
      case 'monthly':
        return monthlyData;
      default:
        return dailyData;
    }
  };

  return (
    <>
    <section className="mb-8">
      <div className="rounded-[5px] p-6 bg-white shadow-sm border border-gray-200">
        {/* Header inside the box */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg font-semibold font-['Nunito_Sans',sans-serif] text-[#26273b]">
              Detention Trend Analysis
            </h3>
            <p className="text-sm text-gray-500 font-['Nunito_Sans',sans-serif]">
              Loading vs Unloading detention days over time
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex rounded-[3px] border border-[#d1d5db] overflow-hidden">
              <button
                onClick={() => setTimeRange('daily')}
                className={`px-4 py-2 text-sm font-medium transition-all capitalize font-['Nunito_Sans',sans-serif] ${
                  timeRange === 'daily'
                    ? 'bg-[#2a4eab] text-white'
                    : 'bg-white text-[#64748b] hover:bg-gray-50'
                }`}
              >
                daily
              </button>
              <button
                onClick={() => setTimeRange('weekly')}
                className={`px-4 py-2 text-sm font-medium transition-all capitalize font-['Nunito_Sans',sans-serif] border-l border-[#d1d5db] ${
                  timeRange === 'weekly'
                    ? 'bg-[#2a4eab] text-white'
                    : 'bg-white text-[#64748b] hover:bg-gray-50'
                }`}
              >
                weekly
              </button>
              <button
                onClick={() => setTimeRange('monthly')}
                className={`px-4 py-2 text-sm font-medium transition-all capitalize font-['Nunito_Sans',sans-serif] border-l border-[#d1d5db] ${
                  timeRange === 'monthly'
                    ? 'bg-[#2a4eab] text-white'
                    : 'bg-white text-[#64748b] hover:bg-gray-50'
                }`}
              >
                monthly
              </button>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="p-1.5 hover:bg-gray-100 rounded-md transition-colors"
              title="Expand to view all data"
            >
              <Maximize2 className="h-4 w-4 text-gray-400" />
            </button>
          </div>
        </div>
        
        <div style={{ width: '100%', height: '300px', minHeight: '300px' }}>
          <ResponsiveContainer width="100%" height={300} minWidth={300} minHeight={300}>
            <LineChart
              data={getData()}
              margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.3} />
              <XAxis 
                dataKey="date" 
                stroke="#9ca3af" 
                style={{ fontSize: '12px', fontFamily: 'Nunito Sans, sans-serif' }}
              />
              <YAxis 
                stroke="#9ca3af"
                tickFormatter={(value) => `${value}d`}
                style={{ fontSize: '12px', fontFamily: 'Nunito Sans, sans-serif' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontFamily: 'Nunito Sans, sans-serif'
                }}
                formatter={(value: number) => [`${value} days`, '']}
              />
              <Legend 
                wrapperStyle={{ 
                  paddingTop: '20px',
                  fontFamily: 'Nunito Sans, sans-serif'
                }}
                verticalAlign="top"
                formatter={(value) => (
                  <span className="text-sm text-gray-500 capitalize">
                    {value === 'loadingDetention' ? 'Loading Detention' : 'Unloading Detention'}
                  </span>
                )}
              />
              <Line
                type="monotone"
                dataKey="loadingDetention"
                stroke="#f97316"
                strokeWidth={3}
                dot={{ fill: '#f97316', r: 4 }}
                name="loadingDetention"
              />
              <Line
                type="monotone"
                dataKey="unloadingDetention"
                stroke="#2a4eab"
                strokeWidth={3}
                dot={{ fill: '#2a4eab', r: 4 }}
                name="unloadingDetention"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>

    <ChartModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title="Detention Trend Analysis"
      subtitle="Loading vs Unloading detention days over time"
    >
      <div className="mb-6 flex justify-end">
        <div className="flex border border-gray-300 rounded-md overflow-hidden">
          <button
            onClick={() => setTimeRange('daily')}
            className={`px-4 py-2 text-sm font-medium transition-all capitalize font-['Nunito_Sans',sans-serif] ${
              timeRange === 'daily'
                ? 'bg-[#2a4eab] text-white'
                : 'bg-white text-[#2a4eab] hover:bg-gray-50'
            }`}
          >
            daily
          </button>
          <button
            onClick={() => setTimeRange('weekly')}
            className={`px-4 py-2 text-sm font-medium transition-all capitalize font-['Nunito_Sans',sans-serif] border-l border-gray-300 ${
              timeRange === 'weekly'
                ? 'bg-[#2a4eab] text-white'
                : 'bg-white text-[#2a4eab] hover:bg-gray-50'
            }`}
          >
            weekly
          </button>
          <button
            onClick={() => setTimeRange('monthly')}
            className={`px-4 py-2 text-sm font-medium transition-all capitalize font-['Nunito_Sans',sans-serif] border-l border-gray-300 ${
              timeRange === 'monthly'
                ? 'bg-[#2a4eab] text-white'
                : 'bg-white text-[#2a4eab] hover:bg-gray-50'
            }`}
          >
            monthly
          </button>
        </div>
      </div>
      <div style={{ width: '100%', height: '600px', minHeight: '600px' }}>
        <ResponsiveContainer width="100%" height={600} minHeight={600} minWidth={300}>
          <LineChart
            data={getData()}
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.3} />
            <XAxis 
              dataKey="date" 
              stroke="#9ca3af" 
              style={{ fontSize: '12px', fontFamily: 'Nunito Sans, sans-serif' }}
            />
            <YAxis 
              stroke="#9ca3af"
              tickFormatter={(value) => `${value}d`}
              style={{ fontSize: '12px', fontFamily: 'Nunito Sans, sans-serif' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontFamily: 'Nunito Sans, sans-serif'
              }}
              formatter={(value: number) => [`${value} days`, '']}
            />
            <Legend 
              wrapperStyle={{ 
                paddingTop: '20px',
                fontFamily: 'Nunito Sans, sans-serif'
              }}
              verticalAlign="top"
              formatter={(value) => (
                <span className="text-sm text-gray-500 capitalize">
                  {value === 'loadingDetention' ? 'Loading Detention' : 'Unloading Detention'}
                </span>
              )}
            />
            <Line
              type="monotone"
              dataKey="loadingDetention"
              stroke="#f97316"
              strokeWidth={3}
              dot={{ fill: '#f97316', r: 4 }}
              name="loadingDetention"
            />
            <Line
              type="monotone"
              dataKey="unloadingDetention"
              stroke="#2a4eab"
              strokeWidth={3}
              dot={{ fill: '#2a4eab', r: 4 }}
              name="unloadingDetention"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </ChartModal>
    </>
  );
}