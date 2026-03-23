export function HealthDistributionSection() {
  return (
    <div className="flex gap-5 mb-6">
      {/* Health Distribution (300) */}
      <div className="bg-white rounded-[5px] p-6 border border-[#e5e7eb]" style={{ width: '62%' }}>
        <div className="mb-4">
          <h3 className="text-[14px] font-bold text-[#26273b]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Health Distribution (150)
          </h3>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div>
            <p className="text-[11px] text-[#64748b] mb-2" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Total Customers
            </p>
            <p className="text-[24px] font-bold text-[#7183FF]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              150
            </p>
          </div>
          <div>
            <p className="text-[11px] text-[#64748b] mb-2" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Healthy
            </p>
            <p className="text-[24px] font-bold text-[#1ED8BE]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              50
            </p>
          </div>
          <div>
            <p className="text-[11px] text-[#64748b] mb-2" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Need Attention
            </p>
            <p className="text-[24px] font-bold text-[#EB7A09]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              50
            </p>
          </div>
          <div>
            <p className="text-[11px] text-[#64748b] mb-2" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              At Risk
            </p>
            <p className="text-[24px] font-bold text-[#EB7971]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              50
            </p>
          </div>
        </div>
      </div>

      {/* At Risk (50) */}
      <div className="bg-white rounded-[5px] p-6 border border-[#e5e7eb]" style={{ width: '38%' }}>
        <div className="mb-4">
          <h3 className="text-[14px] font-bold text-[#26273b]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            At Risk (50)
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-[11px] text-[#64748b] mb-2" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Improving
            </p>
            <p className="text-[24px] font-bold text-[#1ED8BE]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              35
            </p>
          </div>
          <div>
            <p className="text-[11px] text-[#64748b] mb-2" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Deterioration
            </p>
            <p className="text-[24px] font-bold text-[#EB7971]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              15
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}