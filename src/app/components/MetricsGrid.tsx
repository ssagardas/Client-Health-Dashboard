import { useState } from 'react';

interface MetricsGridProps {
  onDetailsClick: () => void;
  onCompanyClick?: (companyName: string, healthStatus: 'Healthy' | 'Need Attention' | 'At Risk') => void;
}

export function MetricsGrid({ onDetailsClick, onCompanyClick }: MetricsGridProps) {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  const healthDistributionMetrics = [
    {
      value: "300",
      label: "Total Customers",
      color: "#7183FF",
      tooltip: "Total number of customers being monitored"
    },
    {
      value: "200",
      label: "Healthy",
      color: "#0D8877",
      tooltip: "Customers with good health metrics"
    },
    {
      value: "50",
      label: "Need Attention",
      color: "#f59e0b",
      tooltip: "Customers requiring attention"
    },
    {
      value: "50",
      label: "At Risk",
      color: "#ef4444",
      tooltip: "Customers showing declining health"
    },
  ];

  const needAttentionMetrics = [
    {
      value: "35",
      label: "Improving",
      color: "#0D8877",
      tooltip: "Customers showing improvement trends"
    },
    {
      value: "15",
      label: "Deterioration",
      color: "#ef4444",
      tooltip: "Customers showing deteriorating trends"
    },
  ];

  const atRiskMetrics = [
    {
      value: "35",
      label: "Improving",
      color: "#0D8877",
      tooltip: "At risk customers showing improvement"
    },
    {
      value: "15",
      label: "Deterioration",
      color: "#ef4444",
      tooltip: "At risk customers deteriorating further"
    },
  ];

  const renderMetric = (metric: any, sectionKey: string, index: number) => {
    const key = `${sectionKey}-${index}`;
    return (
      <div
        key={key}
        className="bg-white rounded-[5px] p-4 shadow-sm relative text-center h-[110px] flex flex-col justify-center"
        style={{
          borderTop: `1px solid ${metric.color}`,
          borderLeft: `1px solid ${metric.color}`,
          borderBottom: `4px solid ${metric.color}`,
          borderRight: `1px solid ${metric.color}`,
          width: '220px',
        }}
        onMouseEnter={() => setHoveredIndex(key)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {/* Info icon with tooltip */}
        <div className="absolute top-3 right-3 group">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="cursor-help">
            <circle cx="8" cy="8" r="7" stroke="#94a3b8" strokeWidth="1.5" fill="none"/>
            <path d="M8 11V8" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="8" cy="5.5" r="0.5" fill="#94a3b8"/>
          </svg>
          
          {/* Tooltip */}
          {hoveredIndex === key && (
            <div className="absolute top-6 right-0 w-48 bg-[#1e293b] text-white text-xs rounded-md p-2 shadow-lg z-50"
              style={{ fontFamily: 'Nunito Sans, sans-serif' }}
            >
              {metric.tooltip}
              <div className="absolute -top-1 right-2 w-2 h-2 bg-[#1e293b] transform rotate-45"></div>
            </div>
          )}
        </div>

        {/* Main value */}
        <div className="font-bold text-[18px] leading-[24px] text-[#26273b] mb-1" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
          {metric.value}
        </div>

        {/* Label */}
        <div className="font-normal text-[14px] leading-[20px] text-[#64748b]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
          {metric.label}
        </div>
      </div>
    );
  };

  return (
    <div className="mb-[40px]">
      {/* Headings Row */}
      <div className="grid grid-cols-6 gap-4 mb-4">
        <div className="col-span-4 flex items-center gap-2">
          <h2 className="text-[18px] font-bold text-[#26273b]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Health Distribution
          </h2>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="cursor-help">
            <circle cx="8" cy="8" r="7" stroke="#94a3b8" strokeWidth="1.5" fill="none"/>
            <path d="M8 11V8" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="8" cy="5.5" r="0.5" fill="#94a3b8"/>
          </svg>
        </div>
        
        <div className="col-span-2 flex items-center gap-2">
          <h2 className="text-[18px] font-bold text-[#26273b]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Need Attention
          </h2>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="cursor-help">
            <circle cx="8" cy="8" r="7" stroke="#94a3b8" strokeWidth="1.5" fill="none"/>
            <path d="M8 11V8" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="8" cy="5.5" r="0.5" fill="#94a3b8"/>
          </svg>
        </div>
      </div>
      
      {/* Widgets Row */}
      <div className="mb-6">
        <div className="flex gap-4">
          {/* Health Distribution widgets */}
          {healthDistributionMetrics.map((metric, index) => renderMetric(metric, 'health', index))}
          
          {/* Need Attention widgets */}
          {needAttentionMetrics.map((metric, index) => renderMetric(metric, 'need-attention', index))}
        </div>
      </div>

      {/* At Risk Section */}
      <div>
        <div className="mb-4 flex items-center gap-2">
          <h2 className="text-[18px] font-bold text-[#26273b]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            At Risk
          </h2>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="cursor-help">
            <circle cx="8" cy="8" r="7" stroke="#94a3b8" strokeWidth="1.5" fill="none"/>
            <path d="M8 11V8" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="8" cy="5.5" r="0.5" fill="#94a3b8"/>
          </svg>
        </div>
        
        <div className="flex gap-4">
          {atRiskMetrics.map((metric, index) => renderMetric(metric, 'at-risk', index))}
        </div>
      </div>
    </div>
  );
}