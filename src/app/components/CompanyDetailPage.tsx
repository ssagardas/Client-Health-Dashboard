import { useState } from 'react';
import { Home, ChevronRight, Users, TrendingUp, Building2, TriangleAlert, Minus, CircleAlert, Search } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ReferenceLine } from 'recharts';
import { DonutChart } from './DonutChart';

interface CompanyDetailPageProps {
  companyName: string;
  healthStatus: 'Healthy' | 'Need Attention' | 'At Risk';
  onBack: () => void;
  onCustomerClick?: (customerName: string, customerStatus: 'Healthy' | 'Attention' | 'Critical', customerScore: number, customerTrend: 'improving' | 'stable' | 'declining') => void;
}

export function CompanyDetailPage({ companyName, healthStatus, onBack, onCustomerClick }: CompanyDetailPageProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'healthy' | 'attention' | 'critical'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Generate health score based on status
  const getHealthScore = () => {
    switch (healthStatus) {
      case 'Healthy': return 84;
      case 'Need Attention': return 62;
      case 'At Risk': return 38;
      default: return 70;
    }
  };

  const healthScore = getHealthScore();

  // Generate stats based on health status
  const getStats = () => {
    if (healthStatus === 'Healthy') {
      return {
        total: 15,
        healthy: 12,
        attention: 3,
        critical: 0
      };
    } else if (healthStatus === 'Need Attention') {
      return {
        total: 15,
        healthy: 8,
        attention: 5,
        critical: 2
      };
    } else {
      return {
        total: 15,
        healthy: 3,
        attention: 5,
        critical: 7
      };
    }
  };

  const stats = getStats();

  // Chart data
  const chartData = [
    { period: 'W1', value: healthScore - 10 },
    { period: 'W2', value: healthScore - 5 },
    { period: 'W3', value: healthScore - 3 },
    { period: 'W4', value: healthScore - 1 },
    { period: 'W5', value: healthScore },
    { period: 'W6', value: healthScore + 2 }
  ];

  // Customer cards data
  const getCustomerCards = () => {
    const healthyCustomers = [
      { name: 'Enterprise Corp A', score: 91, trend: 'stable', status: 'Healthy' },
      { name: 'Manufacturing Co B', score: 78, trend: 'improving', status: 'Healthy' },
      { name: 'Tech Solutions D', score: 85, trend: 'stable', status: 'Healthy' },
      { name: 'Retail Group E', score: 88, trend: 'improving', status: 'Healthy' },
    ];

    const attentionCustomers = [
      { 
        name: 'Retail Group C', 
        score: 62, 
        trend: 'stable', 
        status: 'Attention',
        reasons: ['Low adoption of ePOD module', 'Inconsistent usage by operations team']
      },
      { 
        name: 'Distribution Hub F', 
        score: 58, 
        trend: 'declining', 
        status: 'Attention',
        reasons: ['Declining login frequency', 'Poor data quality scores']
      }
    ];

    const criticalCustomers = [
      { 
        name: 'Warehouse Ops G', 
        score: 34, 
        trend: 'declining', 
        status: 'Critical',
        reasons: ['No activity in last 30 days', 'Multiple support tickets unresolved']
      }
    ];

    switch (activeTab) {
      case 'healthy':
        return healthyCustomers;
      case 'attention':
        return attentionCustomers;
      case 'critical':
        return criticalCustomers;
      default:
        return [...healthyCustomers, ...attentionCustomers, ...criticalCustomers];
    }
  };

  const customers = getCustomerCards();

  // Filter customers based on search query
  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Healthy': return '#0D8877';
      case 'Attention': return '#f59e0b';
      case 'Critical': return '#ef4444';
      default: return '#64748b';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 75) return '#0D8877';
    if (score >= 60) return '#f59e0b';
    return '#ef4444';
  };

  return (
    <div className="min-h-screen bg-[#f9fafc]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
      <div className="max-w-[1400px] mx-auto px-6 py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-6">
          <button onClick={onBack} className="text-[#2a4eab] hover:text-[#26273b] transition-colors">
            Home
          </button>
          <span className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-[#64748b]" />
            <span className="text-[#26273b] font-semibold">{companyName}</span>
          </span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-[18px] font-bold text-[#26273b]">{companyName}</h1>
            </div>
            <div className="flex items-center gap-3">
              <DonutChart score={healthScore} size={70} strokeWidth={7} />
              <div className="flex flex-col gap-1">
                <span className="text-[24px] font-bold text-[#26273b]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  {healthScore}
                </span>
                <span className="text-[14px] text-[#64748b]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  {healthStatus}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div 
            onClick={() => setActiveTab('all')}
            className="bg-white rounded-[5px] p-4 shadow-sm relative text-center h-[110px] flex flex-col justify-center cursor-pointer hover:shadow-md hover:border-opacity-80 transition-all"
            style={{
              borderTop: `1px solid #7183FF`,
              borderLeft: `1px solid #7183FF`,
              borderBottom: `4px solid #7183FF`,
              borderRight: `1px solid #7183FF`,
            }}
          >
            {/* Info icon */}
            <div className="absolute top-3 right-3">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="cursor-help">
                <circle cx="8" cy="8" r="7" stroke="#94a3b8" strokeWidth="1.5" fill="none"/>
                <path d="M8 11V8" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="8" cy="5.5" r="0.5" fill="#94a3b8"/>
              </svg>
            </div>

            {/* Main value */}
            <div className="font-bold text-[18px] leading-[24px] text-[#26273b] mb-1" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              {stats.total}
            </div>

            {/* Label */}
            <div className="font-normal text-[14px] leading-[20px] text-[#64748b] mb-2" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Total Branches
            </div>
          </div>

          <div 
            onClick={() => setActiveTab('healthy')}
            className="bg-white rounded-[5px] p-4 shadow-sm relative text-center h-[110px] flex flex-col justify-center cursor-pointer hover:shadow-md hover:border-opacity-80 transition-all"
            style={{
              borderTop: `1px solid #0D8877`,
              borderLeft: `1px solid #0D8877`,
              borderBottom: `4px solid #0D8877`,
              borderRight: `1px solid #0D8877`,
            }}
          >
            {/* Info icon */}
            <div className="absolute top-3 right-3">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="cursor-help">
                <circle cx="8" cy="8" r="7" stroke="#94a3b8" strokeWidth="1.5" fill="none"/>
                <path d="M8 11V8" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="8" cy="5.5" r="0.5" fill="#94a3b8"/>
              </svg>
            </div>

            {/* Main value */}
            <div className="font-bold text-[18px] leading-[24px] text-[#0D8877] mb-1" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              {stats.healthy}
            </div>

            {/* Label */}
            <div className="font-normal text-[14px] leading-[20px] text-[#64748b] mb-2" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Healthy
            </div>
          </div>

          <div 
            onClick={() => setActiveTab('attention')}
            className="bg-white rounded-[5px] p-4 shadow-sm relative text-center h-[110px] flex flex-col justify-center cursor-pointer hover:shadow-md hover:border-opacity-80 transition-all"
            style={{
              borderTop: `1px solid #f59e0b`,
              borderLeft: `1px solid #f59e0b`,
              borderBottom: `4px solid #f59e0b`,
              borderRight: `1px solid #f59e0b`,
            }}
          >
            {/* Info icon */}
            <div className="absolute top-3 right-3">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="cursor-help">
                <circle cx="8" cy="8" r="7" stroke="#94a3b8" strokeWidth="1.5" fill="none"/>
                <path d="M8 11V8" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="8" cy="5.5" r="0.5" fill="#94a3b8"/>
              </svg>
            </div>

            {/* Main value */}
            <div className="font-bold text-[18px] leading-[24px] text-[#f59e0b] mb-1" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              {stats.attention}
            </div>

            {/* Label */}
            <div className="font-normal text-[14px] leading-[20px] text-[#64748b] mb-2" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Needs Attention
            </div>
          </div>

          <div 
            onClick={() => setActiveTab('critical')}
            className="bg-white rounded-[5px] p-4 shadow-sm relative text-center h-[110px] flex flex-col justify-center cursor-pointer hover:shadow-md hover:border-opacity-80 transition-all"
            style={{
              borderTop: `1px solid #ef4444`,
              borderLeft: `1px solid #ef4444`,
              borderBottom: `4px solid #ef4444`,
              borderRight: `1px solid #ef4444`,
            }}
          >
            {/* Info icon */}
            <div className="absolute top-3 right-3">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="cursor-help">
                <circle cx="8" cy="8" r="7" stroke="#94a3b8" strokeWidth="1.5" fill="none"/>
                <path d="M8 11V8" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="8" cy="5.5" r="0.5" fill="#94a3b8"/>
              </svg>
            </div>

            {/* Main value */}
            <div className="font-bold text-[18px] leading-[24px] text-[#ef4444] mb-1" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              {stats.critical}
            </div>

            {/* Label */}
            <div className="font-normal text-[14px] leading-[20px] text-[#64748b] mb-2" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Critical
            </div>
          </div>
        </div>

        {/* Health Trend Chart */}
        <section className="mb-8">
          <div className="bg-white rounded-[8px] border border-[#e5e7eb] p-6 shadow-sm">
            <div className="mb-4">
              <h3 className="text-[18px] font-semibold text-[#26273b]">SP Health Trend</h3>
              <p className="text-sm text-[#64748b] mt-1">Aggregated health performance over recent periods</p>
            </div>
            <div style={{ width: '100%', height: '192px', minHeight: '192px' }}>
              <ResponsiveContainer width="100%" height={192} minHeight={192} minWidth={300}>
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 5 }}>
                  <defs>
                    <linearGradient id="companyHealthGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop key="company-stop-1" offset="5%" stopColor="#0D8877" stopOpacity={0.3} />
                      <stop key="company-stop-2" offset="95%" stopColor="#0D8877" stopOpacity={0} />
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
                  <ReferenceLine key="threshold-line" y={70} stroke="#0D8877" strokeDasharray="3 3" strokeOpacity={0.5} />
                  <Area 
                    key="area-health"
                    type="monotone" 
                    dataKey="value" 
                    stroke="#0D8877" 
                    strokeWidth={2}
                    fill="url(#companyHealthGradient)" 
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-[#64748b] mt-4 text-center">Week Timely Trend</p>
          </div>
        </section>

        {/* Customer Health Overview */}
        <section className="mb-8">
          <div className="mb-6">
            <h2 className="text-[18px] font-semibold text-[#26273b]">Customer Health Overview</h2>
            <p className="text-sm text-[#64748b] mt-1">Individual customer performance within this SP</p>
          </div>

          {/* Tabs */}
          <div className="flex items-center justify-between border-b border-[#e5e7eb] mb-6">
            <div className="flex items-center gap-8">
              <button
                onClick={() => setActiveTab('all')}
                className={`pb-3 text-[14px] font-medium transition-all relative ${
                  activeTab === 'all'
                    ? 'text-[#2a4eab]'
                    : 'text-[#64748b] hover:text-[#26273b]'
                }`}
                style={{ fontFamily: 'Nunito Sans, sans-serif' }}
              >
                All ({stats.total})
                {activeTab === 'all' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2a4eab]"></span>
                )}
              </button>
              <button
                onClick={() => setActiveTab('healthy')}
                className={`pb-3 text-[14px] font-medium transition-all relative ${
                  activeTab === 'healthy'
                    ? 'text-[#2a4eab]'
                    : 'text-[#64748b] hover:text-[#26273b]'
                }`}
                style={{ fontFamily: 'Nunito Sans, sans-serif' }}
              >
                Healthy ({stats.healthy})
                {activeTab === 'healthy' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2a4eab]"></span>
                )}
              </button>
              <button
                onClick={() => setActiveTab('attention')}
                className={`pb-3 text-[14px] font-medium transition-all relative ${
                  activeTab === 'attention'
                    ? 'text-[#2a4eab]'
                    : 'text-[#64748b] hover:text-[#26273b]'
                }`}
                style={{ fontFamily: 'Nunito Sans, sans-serif' }}
              >
                Attention ({stats.attention})
                {activeTab === 'attention' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2a4eab]"></span>
                )}
              </button>
              <button
                onClick={() => setActiveTab('critical')}
                className={`pb-3 text-[14px] font-medium transition-all relative ${
                  activeTab === 'critical'
                    ? 'text-[#2a4eab]'
                    : 'text-[#64748b] hover:text-[#26273b]'
                }`}
                style={{ fontFamily: 'Nunito Sans, sans-serif' }}
              >
                Critical ({stats.critical})
                {activeTab === 'critical' && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2a4eab]"></span>
                )}
              </button>
            </div>

            {/* Search Filter */}
            <div className="relative mb-3">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Branch"
                className="w-[200px] h-[36px] pl-4 pr-10 py-2 border border-[#e5e7eb] rounded-[5px] text-[14px] text-[#26273b] placeholder:text-[#999] focus:outline-none focus:border-[#2a4eab] transition-colors"
                style={{ fontFamily: 'Nunito Sans, sans-serif' }}
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7fee] pointer-events-none" />
            </div>
          </div>

          {/* Customer Cards */}
          <div className="grid md:grid-cols-2 gap-4">
            {filteredCustomers.map((customer, index) => (
              <div
                key={index}
                className="bg-white rounded-[8px] border border-[#e5e7eb] p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                onClick={() => onCustomerClick && onCustomerClick(customer.name, customer.status, customer.score, customer.trend)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#26273b] group-hover:text-[#2a4eab] transition-colors text-[16px]">
                      {customer.name}
                    </h4>
                    <div className="flex items-center gap-3 mt-2">
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[5px] text-xs font-medium"
                        style={{
                          backgroundColor: customer.status === 'Healthy' ? '#d1fae5' : customer.status === 'Attention' ? '#fef3c7' : '#fee2e2',
                          color: getStatusColor(customer.status)
                        }}
                      >
                        <span>{customer.status === 'Healthy' ? '🟢' : customer.status === 'Attention' ? '🟠' : '🔴'}</span>
                        {customer.status === 'Attention' ? 'Needs Attention' : customer.status}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-[#64748b]">
                        {customer.trend === 'improving' ? (
                          <TrendingUp className="w-4 h-4 text-[#0D8877]" />
                        ) : customer.trend === 'declining' ? (
                          <TrendingUp className="w-4 h-4 text-[#ef4444] rotate-180" />
                        ) : (
                          <Minus className="w-4 h-4 text-[#64748b]" />
                        )}
                        {customer.trend.charAt(0).toUpperCase() + customer.trend.slice(1)}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <DonutChart score={customer.score} size={50} strokeWidth={5} />
                    <span className="text-[10px] text-[#64748b]">Score</span>
                  </div>
                </div>

                {/* Reasons section for Attention/Critical customers */}
                {customer.reasons && (
                  <div className="mt-4 pt-4 border-t border-[#e5e7eb]">
                    <div className="flex items-center gap-1.5 mb-2">
                      <CircleAlert className="w-4 h-4 text-[#f59e0b]" />
                      <p className="text-xs font-medium text-[#64748b]">
                        Why This Customer {customer.status === 'Critical' ? 'Is Critical' : 'Needs Attention'}
                      </p>
                    </div>
                    <ul className="space-y-1.5">
                      {customer.reasons.map((reason, i) => (
                        <li key={i} className="text-sm text-[#26273b] flex items-start gap-2">
                          <span className="mt-1" style={{ color: getStatusColor(customer.status) }}>•</span>
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex items-center justify-end mt-4">
                  <button className="px-4 py-2 bg-[#2a4eab] text-[#ffffff] border border-[#2a4eab] rounded-[5px] text-[14px] font-medium hover:bg-[#1e3a8a] transition-colors" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Module Adoption Maturity Section */}
        <section className="pt-1 pb-6">
        <div className="mb-6">
          <h2 className="text-[18px] font-semibold text-[#26273b]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Module Adoption Maturity
          </h2>
          <p className="text-[14px] text-[#64748b] mt-1" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Stage of adoption by product module
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {/* Spot Marketplace */}
          <div className="bg-white rounded-[8px] border border-[#e5e7eb] p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <h4 className="font-semibold text-[#26273b] text-[14px]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  Spot Marketplace
                </h4>
                <span className="text-[12px] font-medium px-2 py-0.5 rounded-[5px] bg-[#e0e7ff] text-[#2a4eab]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  Mature
                </span>
              </div>
              <p className="text-[14px] text-[#64748b] truncate" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                Fully integrated with automated workflows
              </p>
            </div>
          </div>

          {/* Indent Management */}
          <div className="bg-white rounded-[8px] border border-[#e5e7eb] p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <h4 className="font-semibold text-[#26273b] text-[14px]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  Indent Management
                </h4>
                <span className="text-[12px] font-medium px-2 py-0.5 rounded-[5px] bg-[#d1fae5] text-[#0D8877]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  Growing
                </span>
              </div>
              <p className="text-[14px] text-[#64748b] truncate" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                Expanding usage across additional lanes
              </p>
            </div>
          </div>

          {/* Real-time Tracking */}
          <div className="bg-white rounded-[8px] border border-[#e5e7eb] p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <h4 className="font-semibold text-[#26273b] text-[14px]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  Real-time Tracking
                </h4>
                <span className="text-[12px] font-medium px-2 py-0.5 rounded-[5px] bg-[#fef3c7] text-[#f59e0b]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  Beginner
                </span>
              </div>
              <p className="text-[14px] text-[#64748b] truncate" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                Initial deployment with growth potential
              </p>
            </div>
          </div>

          {/* ePOD Documentation */}
          <div className="bg-white rounded-[8px] border border-[#e5e7eb] p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <h4 className="font-semibold text-[#26273b] text-[14px]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  ePOD Documentation
                </h4>
                <span className="text-[12px] font-medium px-2 py-0.5 rounded-[5px] bg-[#e0e7ff] text-[#2a4eab]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  Mature
                </span>
              </div>
              <p className="text-[14px] text-[#64748b] truncate" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                Comprehensive digital documentation
              </p>
            </div>
          </div>

          {/* Inplant Operations */}
          <div className="bg-white rounded-[8px] border border-[#e5e7eb] p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <h4 className="font-semibold text-[#26273b] text-[14px]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  Inplant Operations
                </h4>
                <span className="text-[12px] font-medium px-2 py-0.5 rounded-[5px] bg-[#d1fae5] text-[#0D8877]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  Growing
                </span>
              </div>
              <p className="text-[14px] text-[#64748b] truncate" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                Scaling across facilities
              </p>
            </div>
          </div>

          {/* Freight Accounting */}
          <div className="bg-white rounded-[8px] border border-[#e5e7eb] p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <h4 className="font-semibold text-[#26273b] text-[14px]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  Freight Accounting
                </h4>
                <span className="text-[12px] font-medium px-2 py-0.5 rounded-[5px] bg-[#fef3c7] text-[#f59e0b]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  Beginner
                </span>
              </div>
              <p className="text-[14px] text-[#64748b] truncate" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                Onboarding with core features
              </p>
            </div>
          </div>
        </div>
      </section>

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
                    Indent
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div 
                  className="h-12 rounded-lg bg-gradient-to-r from-[#2a4eab] to-[#5b6cf6] flex items-center justify-end pr-4 transition-all"
                  style={{ width: '85%' }}
                >
                  <span className="text-[14px] font-medium text-white whitespace-nowrap" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                    Loading
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div 
                  className="h-12 rounded-lg bg-gradient-to-r from-[#2a4eab] to-[#5b6cf6] flex items-center justify-end pr-4 transition-all"
                  style={{ width: '72%' }}
                >
                  <span className="text-[14px] font-medium text-white whitespace-nowrap" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                    In Transit
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div 
                  className="h-12 rounded-lg bg-gradient-to-r from-[#2a4eab] to-[#5b6cf6] flex items-center justify-end pr-4 transition-all"
                  style={{ width: '65%' }}
                >
                  <span className="text-[14px] font-medium text-white whitespace-nowrap" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                    Unloading
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div 
                  className="h-12 rounded-lg bg-gradient-to-r from-[#2a4eab] to-[#5b6cf6] flex items-center justify-end pr-4 transition-all"
                  style={{ width: '58%' }}
                >
                  <span className="text-[14px] font-medium text-white whitespace-nowrap" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                    POD Pending
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div 
                  className="h-12 rounded-lg bg-gradient-to-r from-[#2a4eab] to-[#5b6cf6] flex items-center justify-end pr-4 transition-all"
                  style={{ width: '50%' }}
                >
                  <span className="text-[14px] font-medium text-white whitespace-nowrap" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                    Closed
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