import { X } from "lucide-react";
import { FilterState } from "@/app/App";

interface AppliedFiltersProps {
  filters: FilterState;
  onClearAll: () => void;
  onRemoveFilter: (type: keyof FilterState, value?: string) => void;
}

export function AppliedFilters({ filters, onClearAll, onRemoveFilter }: AppliedFiltersProps) {
  const hasFilters = filters.branch.length > 0 || filters.status.length > 0;

  if (!hasFilters) return null;

  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="font-['Nunito_Sans',sans-serif] font-semibold text-[14px] leading-[21px] text-[#535859]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Applied Filters:
      </span>

      <div className="flex gap-2">
        {filters.branch.map((branch) => (
          <div
            key={branch}
            className="bg-[#e3e7ff] rounded px-2 py-1.5 flex items-center gap-2 h-[30px]"
          >
            <span className="font-['Nunito_Sans',sans-serif] font-semibold text-[13px] leading-[19.5px] text-[#334da5]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              Branch: {branch}
            </span>
            <button
              onClick={() => onRemoveFilter("branch", branch)}
              className="hover:opacity-70"
            >
              <X className="w-2 h-2 text-[#334da5]" />
            </button>
          </div>
        ))}

        {filters.status.map((status) => (
          <div
            key={status}
            className="bg-[#e3e7ff] rounded px-2 py-1.5 flex items-center gap-2 h-[30px]"
          >
            <span className="font-['Nunito_Sans',sans-serif] font-semibold text-[13px] leading-[19.5px] text-[#334da5]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              Status: {status}
            </span>
            <button
              onClick={() => onRemoveFilter("status", status)}
              className="hover:opacity-70"
            >
              <X className="w-2 h-2 text-[#334da5]" />
            </button>
          </div>
        ))}

        <button
          onClick={onClearAll}
          className="bg-white border border-[#2a4eab] rounded px-3 py-1.5 h-[30px]"
        >
          <span className="font-['Nunito_Sans',sans-serif] font-normal text-[12px] leading-[18px] text-[#2a4eab]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            Clear All
          </span>
        </button>
      </div>
    </div>
  );
}
