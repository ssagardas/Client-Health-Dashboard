import { ChevronRight, TrendingDown, AlertTriangle } from "lucide-react";

interface CustomerCardProps {
  name: string;
  healthScore: number;
  trend: "declining";
  totalCustomers: number;
  customerBreakdown: {
    healthy: number;
    warning: number;
    critical: number;
  };
  topRisks: string[];
  onClick?: () => void;
}

function CustomerCard({
  name,
  healthScore,
  trend,
  totalCustomers,
  customerBreakdown,
  topRisks,
  onClick,
}: CustomerCardProps) {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (healthScore / 100) * circumference;

  return (
    <div className="bg-white border border-[#e5e7eb] rounded-[8px] p-6 hover:shadow-md transition-shadow">
      {/* Title Row */}
      <div className="flex items-start justify-between mb-6">
        <h3
          className="text-[16px] font-bold text-[#26273b]"
          style={{ fontFamily: "Nunito Sans, sans-serif" }}
        >
          {name}
        </h3>
        <button
          className="text-[#64748b] hover:text-[#2a4eab] transition-colors"
          onClick={onClick}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Status and Score Row */}
      <div className="flex items-start gap-6 mb-6">
        {/* Status and Customer Section */}
        <div className="flex-1">
          <div className="mb-4">
            <span
              className="inline-block px-2 py-1 bg-[#fee2e2] text-[#ef4444] text-[12px] font-semibold rounded-[4px]"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              Critical
            </span>
          </div>

          <div>
            <p
              className="text-[14px] text-[#64748b] mb-2"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              {totalCustomers} Branches
            </p>
            <div className="flex items-center gap-3">
              {customerBreakdown.healthy > 0 && (
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-[#0D8877]"></div>
                  <span
                    className="text-[14px] font-semibold text-[#26273b]"
                    style={{ fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    {customerBreakdown.healthy}
                  </span>
                </div>
              )}
              {customerBreakdown.warning > 0 && (
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-[#f59e0b]"></div>
                  <span
                    className="text-[14px] font-semibold text-[#26273b]"
                    style={{ fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    {customerBreakdown.warning}
                  </span>
                </div>
              )}
              {customerBreakdown.critical > 0 && (
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-[#ef4444]"></div>
                  <span
                    className="text-[14px] font-semibold text-[#26273b]"
                    style={{ fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    {customerBreakdown.critical}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Score Section */}
        <div className="flex flex-col items-center gap-2">
          <div className="relative">
            <svg className="w-[70px] h-[70px] transform -rotate-90">
              <circle
                cx="35"
                cy="35"
                r={radius}
                stroke="#e5e7eb"
                strokeWidth="6"
                fill="none"
              />
              <circle
                cx="35"
                cy="35"
                r={radius}
                stroke="#ef4444"
                strokeWidth="6"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="text-[20px] font-bold text-[#26273b]"
                style={{ fontFamily: "Nunito Sans, sans-serif" }}
              >
                {healthScore}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <TrendingDown className="w-4 h-4 text-[#ef4444]" />
            <span
              className="text-[14px] text-[#64748b]"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              Declining
            </span>
          </div>
        </div>
      </div>

      {/* Top Risk Row */}
      <div>
        <p
          className="text-[12px] text-[#64748b] mb-2"
          style={{ fontFamily: "Nunito Sans, sans-serif" }}
        >
          Top Risks
        </p>
        <div className="flex gap-2 overflow-x-auto">
          {topRisks.map((risk, index) => (
            <span
              key={index}
              className="inline-block px-3 py-1 bg-[#fee2e2] text-[#ef4444] text-[12px] font-medium rounded-[4px] whitespace-nowrap"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              {risk}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export interface DeterioratingCustomersProps {
  onCompanyClick?: (companyName: string, healthStatus: 'Healthy' | 'Need Attention' | 'At Risk') => void;
  onViewListClick?: () => void;
}

export function DeterioratingCustomers({ onCompanyClick, onViewListClick }: DeterioratingCustomersProps) {
  const customers: CustomerCardProps[] = [
    {
      name: "Supply Chain Epsilon",
      healthScore: 32,
      trend: "declining",
      totalCustomers: 8,
      customerBreakdown: {
        healthy: 1,
        warning: 2,
        critical: 5,
      },
      topRisks: ["High churn risk", "Zero platform adoption", "Contract renewal at risk"],
    },
    {
      name: "Distribution Hub Zeta",
      healthScore: 28,
      trend: "declining",
      totalCustomers: 6,
      customerBreakdown: {
        healthy: 0,
        warning: 2,
        critical: 4,
      },
      topRisks: ["Multiple escalations", "Payment default", "Service complaints"],
    },
  ];

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2
          className="text-[18px] font-bold text-[#26273b]"
          style={{ fontFamily: "Nunito Sans, sans-serif" }}
        >
          Customers at Risk
        </h2>
        {onViewListClick && (
          <button
            onClick={onViewListClick}
            className="px-4 py-2 text-[14px] font-medium bg-[#2a4eab] text-[#ffffff] border border-[#2a4eab] rounded-[5px] hover:bg-[#1e3a8a] transition-colors"
            style={{ fontFamily: "Nunito Sans, sans-serif" }}
          >
            View List
          </button>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4">
        {customers.map((customer, index) => (
          <CustomerCard 
            key={index} 
            {...customer} 
            onClick={() => onCompanyClick?.(customer.name, 'At Risk')}
          />
        ))}
      </div>
    </div>
  );
}