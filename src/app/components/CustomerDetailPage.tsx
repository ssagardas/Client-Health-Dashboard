import { Home, ChevronRight, Minus, TrendingUp, TrendingDown, Package, CircleCheck } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import { ProductAdoptionPage } from './ProductAdoptionPage';
import { DonutChart } from './DonutChart';

interface CustomerDetailPageProps {
  customerName: string;
  serviceProviderName: string;
  healthStatus: 'Healthy' | 'Attention' | 'Critical';
  healthScore: number;
  trend: 'improving' | 'stable' | 'declining';
  onBack: () => void;
  onHome?: () => void;
}

export function CustomerDetailPage({
  customerName,
  serviceProviderName,
  healthStatus,
  healthScore,
  trend,
  onBack,
  onHome,
}: CustomerDetailPageProps) {
  // Chart data based on health score
  const chartData = [
    { period: 'W1', value: healthScore - 10 },
    { period: 'W2', value: healthScore - 5 },
    { period: 'W3', value: healthScore - 3 },
    { period: 'W4', value: healthScore - 1 },
    { period: 'W5', value: healthScore },
    { period: 'W6', value: healthScore + 2 }
  ];

  const getStatusColor = () => {
    if (healthStatus === 'Healthy') return '#10b981';
    if (healthStatus === 'Attention') return '#f59e0b';
    return '#ef4444';
  };

  const getStatusBgColor = () => {
    if (healthStatus === 'Healthy') return '#d1fae5';
    if (healthStatus === 'Attention') return '#fef3c7';
    return '#fee2e2';
  };

  const getTrendIcon = () => {
    if (trend === 'improving') {
      return <TrendingUp className="w-5 h-5 text-[#10b981]" />;
    } else if (trend === 'declining') {
      return <TrendingDown className="w-5 h-5 text-[#ef4444]" />;
    }
    return <Minus className="w-5 h-5 text-[#64748b]" />;
  };

  const getTrendText = () => {
    if (trend === 'improving') return 'Improving';
    if (trend === 'stable') return 'Stable';
    return 'Declining';
  };

  // Module data based on health status
  const getModules = () => {
    if (healthStatus === 'Healthy') {
      return [
        { name: 'Spot', status: 'Mature', description: 'Consistent high utilization', statusColor: '#10b981', statusBg: '#d1fae5' },
        { name: 'Track', status: 'Mature', description: 'Real-time visibility enabled', statusColor: '#10b981', statusBg: '#d1fae5' },
        { name: 'ePOD', status: 'Growing', description: 'Documentation improving', statusColor: '#f59e0b', statusBg: '#fef3c7' },
      ];
    } else if (healthStatus === 'Attention') {
      return [
        { name: 'Spot', status: 'Mature', description: 'Stable usage', statusColor: '#10b981', statusBg: '#d1fae5' },
        { name: 'Track', status: 'Growing', description: 'Adoption in progress', statusColor: '#f59e0b', statusBg: '#fef3c7' },
        { name: 'ePOD', status: 'Low', description: 'Needs improvement', statusColor: '#ef4444', statusBg: '#fee2e2' },
      ];
    } else {
      return [
        { name: 'Spot', status: 'Low', description: 'Declining usage', statusColor: '#ef4444', statusBg: '#fee2e2' },
        { name: 'Track', status: 'Not Active', description: 'No recent activity', statusColor: '#64748b', statusBg: '#f1f5f9' },
        { name: 'ePOD', status: 'Not Active', description: 'Not in use', statusColor: '#64748b', statusBg: '#f1f5f9' },
      ];
    }
  };

  const modules = getModules();

  // Get action items based on status
  const getActionSection = () => {
    if (healthStatus === 'Healthy') {
      return (
        <div className="bg-white rounded-[8px] border border-[#e5e7eb] p-6 shadow-sm text-center">
          <div className="w-12 h-12 rounded-full bg-[#d1fae5] flex items-center justify-center mx-auto mb-3">
            <CircleCheck className="w-6 h-6 text-[#10b981]" />
          </div>
          <h4 className="font-medium text-[#26273b] text-[16px]">
            No Actions Required
          </h4>
          <p className="text-sm text-[#64748b] mt-1">
            {customerName} is performing well across all dimensions
          </p>
        </div>
      );
    } else if (healthStatus === 'Attention') {
      return (
        <div className="bg-white rounded-[8px] border border-[#e5e7eb] p-6 shadow-sm">
          <h4 className="font-semibold text-[#26273b] mb-4 text-[16px]">
            Recommended Actions
          </h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-[#fef3c7] rounded-[5px]">
              <div className="w-5 h-5 rounded-full bg-[#f59e0b] text-white flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                1
              </div>
              <p className="text-sm text-[#26273b]">
                Schedule training session for ePOD module
              </p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-[#fef3c7] rounded-[5px]">
              <div className="w-5 h-5 rounded-full bg-[#f59e0b] text-white flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                2
              </div>
              <p className="text-sm text-[#26273b]">
                Review usage patterns with customer success team
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="bg-white rounded-[8px] border border-[#e5e7eb] p-6 shadow-sm">
          <h4 className="font-semibold text-[#26273b] mb-4 text-[16px]">
            Urgent Actions Required
          </h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-[#fee2e2] rounded-[5px]">
              <div className="w-5 h-5 rounded-full bg-[#ef4444] text-white flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                1
              </div>
              <p className="text-sm text-[#26273b]">
                Immediate outreach to understand blockers
              </p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-[#fee2e2] rounded-[5px]">
              <div className="w-5 h-5 rounded-full bg-[#ef4444] text-white flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                2
              </div>
              <p className="text-sm text-[#26273b]">
                Escalate to senior customer success manager
              </p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-[#fee2e2] rounded-[5px]">
              <div className="w-5 h-5 rounded-full bg-[#ef4444] text-white flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                3
              </div>
              <p className="text-sm text-[#26273b]">
                Review contract status and renewal timeline
              </p>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fafc]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
      <div className="max-w-[1400px] mx-auto px-6 py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-6">
          <button onClick={onHome} className="text-[#2a4eab] hover:text-[#26273b] transition-colors">
            Home
          </button>
          <span className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-[#64748b]" />
            <button onClick={onBack} className="text-[#2a4eab] hover:text-[#26273b] transition-colors">
              {serviceProviderName}
            </button>
          </span>
          <span className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-[#64748b]" />
            <span className="text-[#26273b] font-semibold">{customerName}</span>
          </span>
        </nav>

        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <h1 className="text-[18px] font-bold text-[#26273b]">
                {customerName}
              </h1>
              <p className="text-[#64748b] mt-1 text-[14px]">
                Customer under {serviceProviderName}
              </p>
              <div className="flex items-center gap-4 mt-4">
                <span
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[5px] text-sm font-medium"
                  style={{
                    backgroundColor: getStatusBgColor(),
                    color: getStatusColor(),
                    fontFamily: 'Nunito Sans, sans-serif'
                  }}
                >
                  <span>{healthStatus === 'Healthy' ? '🟢' : healthStatus === 'Attention' ? '🟠' : '🔴'}</span>
                  {healthStatus === 'Attention' ? 'Needs Attention' : healthStatus}
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-[#64748b]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  {getTrendIcon()}
                  {getTrendText()}
                </span>
              </div>
            </div>
            <div className="text-left md:text-right flex items-center gap-3">
              <DonutChart score={healthScore} size={70} strokeWidth={7} />
              <div className="flex flex-col gap-1">
                <span className="text-[24px] font-bold text-[#26273b]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  {healthScore}
                </span>
                <div className="inline-flex items-center gap-2">
                  {getTrendIcon()}
                  <span className="text-[14px] text-[#64748b]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                    {getTrendText()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - 2/3 width */}
          <div className="lg:col-span-2 space-y-8">
            {/* Health Journey Chart */}
            <div className="bg-white rounded-[8px] border border-[#e5e7eb] p-6 shadow-sm">
              <div className="mb-4">
                <h3 className="text-[18px] font-semibold text-[#26273b]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  Customer Health Journey
                </h3>
                <p className="text-sm text-[#64748b] mt-1" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  Health trajectory over recent periods
                </p>
              </div>
              <div style={{ width: '100%', height: '192px', minHeight: '192px' }}>
                <ResponsiveContainer width="100%" height={192} minHeight={192} minWidth={300}>
                  <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 5 }}>
                    <defs>
                      <linearGradient id="customerHealthGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop key="customer-stop-1" offset="5%" stopColor={getStatusColor()} stopOpacity={0.3} />
                        <stop key="customer-stop-2" offset="95%" stopColor={getStatusColor()} stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid key="grid" strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                    <XAxis 
                      key="xaxis"
                      dataKey="period" 
                      tick={{ fill: '#64748b', fontSize: 12 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis 
                      key="yaxis"
                      tick={{ fill: '#64748b', fontSize: 12 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Area 
                      key="area-health"
                      type="monotone" 
                      dataKey="value" 
                      stroke={getStatusColor()} 
                      strokeWidth={2}
                      fill="url(#customerHealthGradient)" 
                      fillOpacity={0.6}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 pt-4 border-t border-[#e5e7eb]">
                <p className="text-xs text-[#64748b] mb-2" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  Key Milestones
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 rounded-md bg-[#f1f5f9] text-[#26273b]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                    {healthStatus === 'Healthy' ? 'P6: Operational stability achieved' : 
                     healthStatus === 'Attention' ? 'P5: Adoption challenges identified' :
                     'P4: Critical engagement drop'}
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#64748b] mt-4 text-center" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                Week Timely Trend
              </p>
            </div>

            {/* Module Adoption Status */}
            <section>
              <div className="mb-6">
                <h2 className="text-[18px] font-semibold text-[#26273b]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  Module Adoption Status
                </h2>
                <p className="text-sm text-[#64748b] mt-1" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  Platform feature utilization by this customer
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {modules.map((module, index) => (
                  <div key={index} className="bg-white rounded-[8px] border border-[#e5e7eb] p-5 shadow-sm">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-[#26273b] text-[16px]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                        {module.name}
                      </h4>
                      <span
                        className="px-2.5 py-1 rounded-[5px] text-xs font-medium"
                        style={{
                          backgroundColor: module.statusBg,
                          color: module.statusColor,
                          fontFamily: 'Nunito Sans, sans-serif'
                        }}
                      >
                        {module.status}
                      </span>
                    </div>
                    <p className="text-sm text-[#64748b]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                      {module.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - 1/3 width */}
          <div className="space-y-6">
            {/* Action Section */}
            {getActionSection()}
          </div>
        </div>

        {/* Adoption Funnel */}
        <section className="py-6">
          <div className="bg-white rounded-[8px] border border-[#e5e7eb] p-6 shadow-sm">
            <h3 className="text-[18px] font-semibold text-[#26273b] mb-2" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Adoption Funnel
            </h3>
            <p className="text-[14px] text-[#64748b] mb-8" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Relative progression through adoption stages
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div 
                  className="h-12 rounded-lg bg-gradient-to-r from-[#2a4eab] to-[#5b6cf6] flex items-center justify-end pr-4 transition-all"
                  style={{ width: '100%' }}
                >
                  <span className="text-[14px] font-medium text-white whitespace-nowrap" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                    Planning
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div 
                  className="h-12 rounded-lg bg-gradient-to-r from-[#2a4eab] to-[#5b6cf6] flex items-center justify-end pr-4 transition-all"
                  style={{ width: '85%' }}
                >
                  <span className="text-[14px] font-medium text-white whitespace-nowrap" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                    Execution
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div 
                  className="h-12 rounded-lg bg-gradient-to-r from-[#2a4eab] to-[#5b6cf6] flex items-center justify-end pr-4 transition-all"
                  style={{ width: '72%' }}
                >
                  <span className="text-[14px] font-medium text-white whitespace-nowrap" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                    Visibility
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div 
                  className="h-12 rounded-lg bg-gradient-to-r from-[#2a4eab] to-[#5b6cf6] flex items-center justify-end pr-4 transition-all"
                  style={{ width: '65%' }}
                >
                  <span className="text-[14px] font-medium text-white whitespace-nowrap" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                    Documentation
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div 
                  className="h-12 rounded-lg bg-gradient-to-r from-[#2a4eab] to-[#5b6cf6] flex items-center justify-end pr-4 transition-all"
                  style={{ width: '58%' }}
                >
                  <span className="text-[14px] font-medium text-white whitespace-nowrap" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                    Settlement
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}