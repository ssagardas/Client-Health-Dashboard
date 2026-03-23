import { Layers, TrendingUp, Clock, Target, Award, Sparkles, Info, ChevronRight } from 'lucide-react';

export function ProductAdoptionDashboard() {
  return (
    <div className="pb-6">
      {/* Adoption Index Section */}
      <section className="pb-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Adoption Index Card */}
          <div className="bg-white rounded-[8px] border border-[#e5e7eb] p-6 text-center shadow-sm">
            <h4 className="text-[14px] font-medium text-[#64748b] mb-1" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Adoption Index
            </h4>
            <p className="text-[32px] font-bold text-[#26273b]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              82
            </p>
            <p className="text-[14px] text-[#64748b] mt-2" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Comprehensive score measuring overall platform adoption across all modules and user segments
            </p>
          </div>

          {/* Description Card */}
          <div className="bg-white rounded-[8px] border border-[#e5e7eb] p-6 flex flex-col justify-center shadow-sm">
            <p className="text-[14px] text-[#64748b] leading-relaxed" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Adoption reflects strong engagement with core transportation management capabilities. Users are progressively leveraging advanced features, with particular strength in marketplace and documentation modules.
            </p>
          </div>
        </div>
      </section>

      {/* Adoption Momentum Section */}
      <section className="pt-1 pb-6">
        <div className="mb-6">
          <h2 className="text-[18px] font-semibold text-[#26273b]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Adoption Momentum
          </h2>
          <p className="text-[14px] text-[#64748b] mt-1" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Growth trajectory across time horizons
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {/* Short-term */}
          <div className="bg-white rounded-[8px] border border-[#e5e7eb] p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-[14px] font-medium text-[#64748b]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                Short-term
              </h4>
              <button className="p-1 rounded-full hover:bg-[#f3f4f6] transition-colors">
                <Info className="w-4 h-4 text-[#64748b]" />
              </button>
            </div>
            <p className="text-[18px] font-semibold text-[#10b981]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Growing
            </p>
            <p className="text-[14px] text-[#64748b] mt-2" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Recent period shows accelerated feature adoption
            </p>
          </div>

          {/* Mid-term */}
          <div className="bg-white rounded-[8px] border border-[#e5e7eb] p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-[14px] font-medium text-[#64748b]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                Mid-term
              </h4>
              <button className="p-1 rounded-full hover:bg-[#f3f4f6] transition-colors">
                <Info className="w-4 h-4 text-[#64748b]" />
              </button>
            </div>
            <p className="text-[18px] font-semibold text-[#64748b]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Stable
            </p>
            <p className="text-[14px] text-[#64748b] mt-2" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Consistent usage patterns maintained
            </p>
          </div>

          {/* Long-term */}
          <div className="bg-white rounded-[8px] border border-[#e5e7eb] p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-[14px] font-medium text-[#64748b]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                Long-term
              </h4>
              <button className="p-1 rounded-full hover:bg-[#f3f4f6] transition-colors">
                <Info className="w-4 h-4 text-[#64748b]" />
              </button>
            </div>
            <p className="text-[18px] font-semibold text-[#10b981]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Improving
            </p>
            <p className="text-[14px] text-[#64748b] mt-2" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Year-over-year adoption trajectory positive
            </p>
          </div>
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
                <span className="text-[12px] font-medium px-2 py-0.5 rounded-full bg-[#e0e7ff] text-[#5b6cf6]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  Mature
                </span>
              </div>
              <p className="text-[14px] text-[#64748b] truncate" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                Fully integrated with automated workflows
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-[#64748b]" />
          </div>

          {/* Indent Management */}
          <div className="bg-white rounded-[8px] border border-[#e5e7eb] p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <h4 className="font-semibold text-[#26273b] text-[14px]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  Indent Management
                </h4>
                <span className="text-[12px] font-medium px-2 py-0.5 rounded-full bg-[#d1fae5] text-[#10b981]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  Growing
                </span>
              </div>
              <p className="text-[14px] text-[#64748b] truncate" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                Expanding usage across additional lanes
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-[#64748b]" />
          </div>

          {/* Real-time Tracking */}
          <div className="bg-white rounded-[8px] border border-[#e5e7eb] p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <h4 className="font-semibold text-[#26273b] text-[14px]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  Real-time Tracking
                </h4>
                <span className="text-[12px] font-medium px-2 py-0.5 rounded-full bg-[#fef3c7] text-[#f59e0b]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  Beginner
                </span>
              </div>
              <p className="text-[14px] text-[#64748b] truncate" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                Initial deployment with growth potential
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-[#64748b]" />
          </div>

          {/* ePOD Documentation */}
          <div className="bg-white rounded-[8px] border border-[#e5e7eb] p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <h4 className="font-semibold text-[#26273b] text-[14px]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  ePOD Documentation
                </h4>
                <span className="text-[12px] font-medium px-2 py-0.5 rounded-full bg-[#e0e7ff] text-[#5b6cf6]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  Mature
                </span>
              </div>
              <p className="text-[14px] text-[#64748b] truncate" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                Comprehensive digital documentation
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-[#64748b]" />
          </div>

          {/* Inplant Operations */}
          <div className="bg-white rounded-[8px] border border-[#e5e7eb] p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <h4 className="font-semibold text-[#26273b] text-[14px]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  Inplant Operations
                </h4>
                <span className="text-[12px] font-medium px-2 py-0.5 rounded-full bg-[#d1fae5] text-[#10b981]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  Growing
                </span>
              </div>
              <p className="text-[14px] text-[#64748b] truncate" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                Scaling across facilities
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-[#64748b]" />
          </div>

          {/* Freight Accounting */}
          <div className="bg-white rounded-[8px] border border-[#e5e7eb] p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <h4 className="font-semibold text-[#26273b] text-[14px]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  Freight Accounting
                </h4>
                <span className="text-[12px] font-medium px-2 py-0.5 rounded-full bg-[#fef3c7] text-[#f59e0b]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  Beginner
                </span>
              </div>
              <p className="text-[14px] text-[#64748b] truncate" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                Onboarding with core features
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-[#64748b]" />
          </div>
        </div>
      </section>

      {/* Adoption Funnel Section */}
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
  );
}