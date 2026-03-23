import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import { ChartColumn, Info, MapPin, Building2, Truck, Maximize2, ArrowUpDown, ArrowDownUp } from 'lucide-react';
import { ChartModal } from './ChartModal';

const loadingPointData = [
  { name: 'Mumbai Warehouse', detention: 6.1, trips: 48, cost: 45000, color: '#f97316' },
  { name: 'Delhi NCR Hub', detention: 5.4, trips: 52, cost: 38000, color: '#2a4eab' },
  { name: 'Kolkata Terminal', detention: 4.9, trips: 45, cost: 32000, color: '#f59e0b' },
  { name: 'Pune Hub', detention: 4.5, trips: 38, cost: 28000, color: '#8b5cf6' },
  { name: 'Bangalore Central', detention: 4.2, trips: 35, cost: 25000, color: '#ec4899' }
];

const unloadingPointData = [
  { name: 'Chennai Port', detention: 7.2, trips: 55, cost: 52000, color: '#f97316' },
  { name: 'Hyderabad DC', detention: 6.5, trips: 48, cost: 46000, color: '#2a4eab' },
  { name: 'Ahmedabad Hub', detention: 5.8, trips: 42, cost: 40000, color: '#f59e0b' },
  { name: 'Jaipur Terminal', detention: 5.1, trips: 36, cost: 34000, color: '#8b5cf6' },
  { name: 'Lucknow Center', detention: 4.6, trips: 32, cost: 30000, color: '#ec4899' }
];

const carrierData = [
  { name: 'Blue Dart Express', detention: 6.8, trips: 62, cost: 48000, color: '#f97316' },
  { name: 'VRL Logistics', detention: 6.2, trips: 58, cost: 44000, color: '#2a4eab' },
  { name: 'TCI Freight', detention: 5.5, trips: 51, cost: 38000, color: '#f59e0b' },
  { name: 'Gati Limited', detention: 5.0, trips: 45, cost: 35000, color: '#8b5cf6' },
  { name: 'DTDC Cargo', detention: 4.4, trips: 40, cost: 30000, color: '#ec4899' }
];

type ViewType = 'loadingPoint' | 'unloadingPoint' | 'carrier';
type SortType = 'detention' | 'cost' | 'name';

export function DetentionAnalysisChart() {
  const [viewType, setViewType] = useState<ViewType>('loadingPoint');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDataLabels, setShowDataLabels] = useState(false);
  const [sortBy, setSortBy] = useState<SortType>('detention');
  const [showSortMenu, setShowSortMenu] = useState(false);

  const getData = () => {
    switch (viewType) {
      case 'loadingPoint':
        return loadingPointData;
      case 'unloadingPoint':
        return unloadingPointData;
      case 'carrier':
        return carrierData;
      default:
        return loadingPointData;
    }
  };

  const currentData = getData().sort((a, b) => {
    if (sortBy === 'detention') {
      return b.detention - a.detention;
    } else if (sortBy === 'cost') {
      return b.cost - a.cost;
    } else {
      return a.name.localeCompare(b.name);
    }
  });
  const totalTrips = currentData.reduce((sum, item) => sum + item.trips, 0);
  const avgDetention = (currentData.reduce((sum, item) => sum + item.detention, 0) / currentData.length).toFixed(1);

  return (
    <>
    <section className="mb-8">
      <div className="rounded-[5px] border border-gray-200 bg-white shadow-sm">
        <div className="px-6 pt-6 pb-4">
          {/* Header inside the box */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-6">
            <div>
              <h3 className="text-lg font-semibold font-['Nunito_Sans',sans-serif] text-[#26273b]">
                Detention Analysis
              </h3>
              <p className="text-sm text-gray-500 font-['Nunito_Sans',sans-serif]">
                Top locations and carriers by detention days
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex rounded-[3px] border border-[#d1d5db] overflow-hidden">
                <button
                  onClick={() => setViewType('loadingPoint')}
                  className={`px-4 py-2 text-sm font-medium transition-all capitalize font-['Nunito_Sans',sans-serif] ${
                    viewType === 'loadingPoint'
                      ? 'bg-[#2a4eab] text-white'
                      : 'bg-white text-[#64748b] hover:bg-gray-50'
                  }`}
                >
                  loading
                </button>
                <button
                  onClick={() => setViewType('unloadingPoint')}
                  className={`px-4 py-2 text-sm font-medium transition-all capitalize font-['Nunito_Sans',sans-serif] border-l border-[#d1d5db] ${
                    viewType === 'unloadingPoint'
                      ? 'bg-[#2a4eab] text-white'
                      : 'bg-white text-[#64748b] hover:bg-gray-50'
                  }`}
                >
                  unloading
                </button>
                <button
                  onClick={() => setViewType('carrier')}
                  className={`px-4 py-2 text-sm font-medium transition-all capitalize font-['Nunito_Sans',sans-serif] border-l border-[#d1d5db] ${
                    viewType === 'carrier'
                      ? 'bg-[#2a4eab] text-white'
                      : 'bg-white text-[#64748b] hover:bg-gray-50'
                  }`}
                >
                  carrier
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
          
          <div className="mb-4 flex items-center justify-center gap-6 text-xs text-gray-500 font-['Nunito_Sans',sans-serif]">
            <span>Showing Top 5 of 8</span>
            <span>
              Total Trips: <span className="font-mono text-[#26273b]">{totalTrips}</span>
            </span>
            <span>
              Avg Detention: <span className="font-mono text-orange-500">{avgDetention} days</span>
            </span>
          </div>
          <div style={{ width: '100%', height: '280px', minHeight: '280px' }} className="mt-4">
            <ResponsiveContainer width="100%" height={280} minWidth={300} minHeight={280}>
              <BarChart
                data={currentData}
                margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.3} />
                <XAxis
                  dataKey="name"
                  angle={-45}
                  textAnchor="end"
                  height={70}
                  tick={{ fill: '#9ca3af', fontSize: 10 }}
                  style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                />
                <YAxis
                  tick={{ fill: '#9ca3af', fontSize: 11 }}
                  label={{
                    value: 'Detention Days',
                    angle: -90,
                    position: 'insideLeft',
                    offset: 5,
                    style: { fill: '#9ca3af', fontSize: 11, fontFamily: 'Nunito Sans, sans-serif' }
                  }}
                  style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    fontFamily: 'Nunito Sans, sans-serif'
                  }}
                  formatter={(value: number, name: string, props: any) => {
                    const cost = props.payload.cost;
                    return [
                      <>
                        <div>{value} days</div>
                        <div>₹{cost.toLocaleString()}</div>
                      </>,
                      'Detention'
                    ];
                  }}
                />
                <Bar
                  dataKey="detention"
                  fill="#2a4eab"
                  radius={[4, 4, 0, 0]}
                  shape={(props: any) => {
                    const { x, y, width, height, payload } = props;
                    return (
                      <rect
                        x={x}
                        y={y}
                        width={width}
                        height={height}
                        fill={payload.color}
                        rx={4}
                        ry={4}
                      />
                    );
                  }}
                >
                  {showDataLabels && <LabelList dataKey="detention" position="top" fill="#2a4eab" />}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>

    <ChartModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title="Detention Analysis"
      subtitle="Top locations and carriers by detention days"
      headerControls={
        <div className="flex items-center gap-4 mr-4">
          {/* Data Labels Toggle Switch */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setShowDataLabels(!showDataLabels)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#2a4eab] focus:ring-offset-2 ${
                showDataLabels ? 'bg-[#2a4eab]' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                  showDataLabels ? 'translate-x-5' : 'translate-x-0.5'
                }`}
              />
            </button>
            <span className="font-['Nunito_Sans',sans-serif] text-[16px] font-medium text-[#4a5568]">
              Data Labels
            </span>
          </div>

          {/* Sorting Icon */}
          <div className="relative">
            <button
              onClick={() => setShowSortMenu(!showSortMenu)}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#2a4eab]"
              title="Sort"
            >
              <ArrowDownUp className="h-5 w-5 text-[#4a5568]" />
            </button>
            {showSortMenu && (
              <div className="absolute left-0 top-full z-10 mt-1 min-w-[180px] rounded-[5px] border border-gray-200 bg-white shadow-lg">
                <button
                  onClick={() => {
                    setSortBy('detention');
                    setShowSortMenu(false);
                  }}
                  className={`block w-full px-4 py-2.5 text-left font-['Nunito_Sans',sans-serif] text-[14px] text-[#26273b] hover:bg-gray-50 first:rounded-t-[5px] last:rounded-b-[5px] ${
                    sortBy === 'detention' ? 'bg-gray-50 font-semibold' : ''
                  }`}
                >
                  Detention Days
                </button>
                <button
                  onClick={() => {
                    setSortBy('cost');
                    setShowSortMenu(false);
                  }}
                  className={`block w-full px-4 py-2.5 text-left font-['Nunito_Sans',sans-serif] text-[14px] text-[#26273b] hover:bg-gray-50 ${
                    sortBy === 'cost' ? 'bg-gray-50 font-semibold' : ''
                  }`}
                >
                  Detention Cost
                </button>
                <button
                  onClick={() => {
                    setSortBy('name');
                    setShowSortMenu(false);
                  }}
                  className={`block w-full px-4 py-2.5 text-left font-['Nunito_Sans',sans-serif] text-[14px] text-[#26273b] hover:bg-gray-50 last:rounded-b-[5px] ${
                    sortBy === 'name' ? 'bg-gray-50 font-semibold' : ''
                  }`}
                >
                  Name
                </button>
              </div>
            )}
          </div>
        </div>
      }
    >
      <div className="mb-6 flex justify-end items-center">
        {/* Right side - View Type Buttons */}
        <div className="flex border border-gray-300 rounded-md overflow-hidden">
          <button
            onClick={() => setViewType('loadingPoint')}
            className={`px-4 py-2 text-sm font-medium transition-all capitalize font-['Nunito_Sans',sans-serif] ${
              viewType === 'loadingPoint'
                ? 'bg-[#2a4eab] text-white'
                : 'bg-white text-[#2a4eab] hover:bg-gray-50'
            }`}
          >
            loading
          </button>
          <button
            onClick={() => setViewType('unloadingPoint')}
            className={`px-4 py-2 text-sm font-medium transition-all capitalize border-l border-gray-300 font-['Nunito_Sans',sans-serif] ${
              viewType === 'unloadingPoint'
                ? 'bg-[#2a4eab] text-white'
                : 'bg-white text-[#2a4eab] hover:bg-gray-50'
            }`}
          >
            unloading
          </button>
          <button
            onClick={() => setViewType('carrier')}
            className={`px-4 py-2 text-sm font-medium transition-all capitalize border-l border-gray-300 font-['Nunito_Sans',sans-serif] ${
              viewType === 'carrier'
                ? 'bg-[#2a4eab] text-white'
                : 'bg-white text-[#2a4eab] hover:bg-gray-50'
            }`}
          >
            carrier
          </button>
        </div>
      </div>
      <div style={{ width: '100%', height: '600px', minHeight: '600px' }}>
        <ResponsiveContainer width="100%" height={600} minHeight={600} minWidth={300}>
          <BarChart
            data={currentData}
            margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.3} />
            <XAxis
              dataKey="name"
              angle={-45}
              textAnchor="end"
              height={70}
              tick={{ fill: '#9ca3af', fontSize: 10 }}
              style={{ fontFamily: 'Nunito Sans, sans-serif' }}
            />
            <YAxis
              tick={{ fill: '#9ca3af', fontSize: 11 }}
              label={{
                value: 'Detention Days',
                angle: -90,
                position: 'insideLeft',
                offset: 5,
                style: { fill: '#9ca3af', fontSize: 11, fontFamily: 'Nunito Sans, sans-serif' }
              }}
              style={{ fontFamily: 'Nunito Sans, sans-serif' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontFamily: 'Nunito Sans, sans-serif'
              }}
              formatter={(value: number, name: string, props: any) => {
                const cost = props.payload.cost;
                return [
                  <>
                    <div>{value} days</div>
                    <div>₹{cost.toLocaleString()}</div>
                  </>,
                  'Detention'
                ];
              }}
            />
            <Bar
              dataKey="detention"
              fill="#2a4eab"
              radius={[4, 4, 0, 0]}
              shape={(props: any) => {
                const { x, y, width, height, payload } = props;
                return (
                  <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    fill={payload.color}
                    rx={4}
                    ry={4}
                  />
                );
              }}
            >
              {showDataLabels && <LabelList dataKey="detention" position="top" fill="#2a4eab" />}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-3 flex items-center justify-center gap-6 text-xs text-gray-500 font-['Nunito_Sans',sans-serif]">
          <span>Showing Top 5 of 8</span>
          <span>
            Total Trips: <span className="font-mono text-[#26273b]">{totalTrips}</span>
          </span>
          <span>
            Avg Detention: <span className="font-mono text-orange-500">{avgDetention} days</span>
          </span>
        </div>
      </div>
    </ChartModal>
    </>
  );
}