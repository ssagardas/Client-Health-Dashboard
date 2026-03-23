import { ChevronRight, Layers, TrendingUp, Clock, Target, Award, Sparkles, Info } from 'lucide-react';

interface ProductAdoptionPageProps {
  customerName: string;
  serviceProviderName: string;
  onBack: () => void;
}

export function ProductAdoptionPage({
  customerName,
  serviceProviderName,
  onBack,
}: ProductAdoptionPageProps) {
  const modules = [
    {
      name: 'Spot Marketplace',
      status: 'Mature',
      description: 'Fully integrated with automated workflows',
      icon: Award,
      statusColor: '#2a4eab',
      statusBg: '#e0e7ff',
      iconBg: '#e0e7ff',
    },
    {
      name: 'Indent Management',
      status: 'Growing',
      description: 'Expanding usage across additional lanes',
      icon: TrendingUp,
      statusColor: '#10b981',
      statusBg: '#d1fae5',
      iconBg: '#d1fae5',
    },
    {
      name: 'Real-time Tracking',
      status: 'Beginner',
      description: 'Initial deployment with growth potential',
      icon: Sparkles,
      statusColor: '#f59e0b',
      statusBg: '#fef3c7',
      iconBg: '#fef3c7',
    },
    {
      name: 'ePOD Documentation',
      status: 'Mature',
      description: 'Comprehensive digital documentation',
      icon: Award,
      statusColor: '#2a4eab',
      statusBg: '#e0e7ff',
      iconBg: '#e0e7ff',
    },
    {
      name: 'Inplant Operations',
      status: 'Growing',
      description: 'Scaling across facilities',
      icon: TrendingUp,
      statusColor: '#10b981',
      statusBg: '#d1fae5',
      iconBg: '#d1fae5',
    },
    {
      name: 'Freight Accounting',
      status: 'Beginner',
      description: 'Onboarding with core features',
      icon: Sparkles,
      statusColor: '#f59e0b',
      statusBg: '#fef3c7',
      iconBg: '#fef3c7',
    },
  ];

  const funnelStages = [
    { name: 'Planning', width: 100 },
    { name: 'Execution', width: 85 },
    { name: 'Visibility', width: 72 },
    { name: 'Documentation', width: 65 },
    { name: 'Settlement', width: 58 },
  ];

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
            <button onClick={onBack} className="text-[#2a4eab] hover:text-[#26273b] transition-colors">
              {serviceProviderName}
            </button>
          </span>
          <span className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-[#64748b]" />
            <button onClick={onBack} className="text-[#2a4eab] hover:text-[#26273b] transition-colors">
              {customerName}
            </button>
          </span>
          <span className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-[#64748b]" />
            <span className="text-[#26273b] font-semibold">Product Adoption</span>
          </span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[24px] font-bold text-[#26273b] mb-2" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Product Adoption
          </h1>
          <p className="text-[#64748b] text-sm" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Measuring depth and breadth of platform utilization
          </p>
        </div>

        {/* Adoption Index Section */}
        <section className="mb-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[8px] border border-[#e5e7eb] p-8 shadow-sm text-center">
              <div className="w-12 h-12 rounded-xl bg-[#d1fae5] flex items-center justify-center mx-auto mb-4">
                <Layers className="w-6 h-6 text-[#10b981]" />
              </div>
              <h4 className="text-sm font-medium text-[#64748b] mb-2" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                Adoption Index
              </h4>
              <p className="text-[32px] font-bold text-[#26273b] mb-3" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                82
              </p>
              <p className="text-sm text-[#64748b] leading-relaxed" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                Comprehensive score measuring overall platform adoption across all modules and user segments
              </p>
            </div>
            <div className="bg-white rounded-[8px] border border-[#e5e7eb] p-8 shadow-sm flex flex-col justify-center">
              <p className="text-[#64748b] leading-relaxed" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                Adoption reflects strong engagement with core transportation management capabilities. Users are progressively leveraging advanced features, with particular strength in marketplace and documentation modules.
              </p>
            </div>
          </div>
        </section>

        {/* Adoption Momentum Section */}
        <section className="mb-6">
          <div className="mb-6">
            <h2 className="text-[20px] font-semibold text-[#26273b] mb-1" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Adoption Momentum
            </h2>
            <p className="text-sm text-[#64748b]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Growth trajectory across time horizons
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Short-term */}
            <div className="bg-white rounded-[8px] border border-[#e5e7eb] p-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-[#d1fae5]">
                  <TrendingUp className="w-5 h-5 text-[#10b981]" />
                </div>
                <button className="p-1 rounded-full hover:bg-[#f3f4f6] transition-colors">
                  <Info className="w-4 h-4 text-[#94a3b8]" />
                </button>
              </div>
              <h4 className="text-sm font-medium text-[#64748b] mb-2" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                Short-term
              </h4>
              <p className="text-[20px] font-semibold text-[#10b981] mb-2" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                Growing
              </p>
              <p className="text-sm text-[#64748b]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                Recent period shows accelerated feature adoption
              </p>
            </div>

            {/* Mid-term */}
            <div className="bg-white rounded-[8px] border border-[#e5e7eb] p-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-[#f1f5f9]">
                  <Clock className="w-5 h-5 text-[#64748b]" />
                </div>
                <button className="p-1 rounded-full hover:bg-[#f3f4f6] transition-colors">
                  <Info className="w-4 h-4 text-[#94a3b8]" />
                </button>
              </div>
              <h4 className="text-sm font-medium text-[#64748b] mb-2" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                Mid-term
              </h4>
              <p className="text-[20px] font-semibold text-[#64748b] mb-2" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                Stable
              </p>
              <p className="text-sm text-[#64748b]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                Consistent usage patterns maintained
              </p>
            </div>

            {/* Long-term */}
            <div className="bg-white rounded-[8px] border border-[#e5e7eb] p-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-[#d1fae5]">
                  <Target className="w-5 h-5 text-[#10b981]" />
                </div>
                <button className="p-1 rounded-full hover:bg-[#f3f4f6] transition-colors">
                  <Info className="w-4 h-4 text-[#94a3b8]" />
                </button>
              </div>
              <h4 className="text-sm font-medium text-[#64748b] mb-2" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                Long-term
              </h4>
              <p className="text-[20px] font-semibold text-[#10b981] mb-2" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                Improving
              </p>
              <p className="text-sm text-[#64748b]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                Year-over-year adoption trajectory positive
              </p>
            </div>
          </div>
        </section>

        {/* Module Adoption Maturity Section */}
        {/* Removed: Module Adoption Maturity Section */}

        {/* Adoption Funnel Section */}
        <section className="py-6">
          <div className="bg-white rounded-[8px] border border-[#e5e7eb] p-6 shadow-sm">
            <h3 className="text-[18px] font-semibold text-[#26273b] mb-2" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Adoption Funnel
            </h3>
            <p className="text-sm text-[#64748b] mb-8" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Relative progression through adoption stages
            </p>
            <div className="space-y-3">
              {funnelStages.map((stage, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div
                    className="h-12 rounded-lg bg-gradient-to-r from-[#2a4eab] to-[#2a4eab]/70 flex items-center justify-end pr-4 transition-all"
                    style={{ width: `${stage.width}%` }}
                  >
                    <span
                      className="text-sm font-medium text-white whitespace-nowrap"
                      style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                    >
                      {stage.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}