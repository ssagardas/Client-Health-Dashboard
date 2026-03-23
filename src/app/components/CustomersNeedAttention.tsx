import { ChevronRight, TrendingUp, TrendingDown, Minus } from "lucide-react";

interface CustomerCardProps {
  name: string;
  healthScore: number;
  trend: "improving" | "stable" | "declining";
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

  const getTrendIcon = () => {
    if (trend === "improving") {
      return <TrendingUp className="w-4 h-4 text-[#0D8877]" />;
    } else if (trend === "declining") {
      return <TrendingDown className="w-4 h-4 text-[#ef4444]" />;
    }
    return <Minus className="w-4 h-4 text-[#64748b]" />;
  };

  const getTrendText = () => {
    if (trend === "improving") return "Improving";
    if (trend === "stable") return "Stable";
    return "Declining";
  };

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
              className="inline-block px-2 py-1 bg-[#fef3c7] text-[#f59e0b] text-[12px] font-semibold rounded-[4px]"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              Needs Attention
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
                stroke="#f59e0b"
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
            {getTrendIcon()}
            <span
              className="text-[14px] text-[#64748b]"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              {getTrendText()}
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
              className="inline-block px-3 py-1 bg-[#fef3c7] text-[#f59e0b] text-[12px] font-medium rounded-[4px] whitespace-nowrap"
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

export interface CustomersNeedAttentionProps {
  onCompanyClick?: (companyName: string, healthStatus: 'Healthy' | 'Need Attention' | 'At Risk') => void;
  onViewListClick?: () => void;
}

export function CustomersNeedAttention({ onCompanyClick, onViewListClick }: CustomersNeedAttentionProps) {
  const customers: CustomerCardProps[] = [
    {
      name: "Carrier Network Gamma",
      healthScore: 56,
      trend: "improving",
      totalCustomers: 12,
      customerBreakdown: {
        healthy: 4,
        warning: 6,
        critical: 2,
      },
      topRisks: ["Adoption gap across modules", "SLA inconsistency"],
    },
    {
      name: "Freight Services Delta",
      healthScore: 48,
      trend: "declining",
      totalCustomers: 10,
      customerBreakdown: {
        healthy: 2,
        warning: 5,
        critical: 3,
      },
      topRisks: ["Low engagement rate", "Payment delays"],
    },
  ];

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2
          className="text-[18px] font-bold text-[#26273b]"
          style={{ fontFamily: "Nunito Sans, sans-serif" }}
        >
          Customers Need Attention
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
            onClick={() => onCompanyClick?.(customer.name, 'Need Attention')}
          />
        ))}
      </div>
    </div>
  );
}