interface StatsCardsProps {
  stats: {
    unallocated: number;
    indent: number;
    loading: number;
    inTransit: number;
    unloading: number;
  };
}

export function StatsCards({ stats }: StatsCardsProps) {
  const cards = [
    { label: "Unallocated", value: stats.unallocated },
    { label: "Indent", value: stats.indent },
    { label: "Loading", value: stats.loading },
    { label: "In-Transit", value: stats.inTransit },
    { label: "Unloading", value: stats.unloading },
  ];

  return (
    <div className="flex gap-4 mb-6">
      {cards.map((card) => (
        <div
          key={card.label}
          className="bg-white border border-[#7183ff] rounded-[5px] px-2.5 py-2.5 flex items-center gap-2 w-[180px] h-[41px]"
        >
          <span className="font-['Nunito_Sans',sans-serif] font-extrabold text-[20px] leading-[30px] text-[#26273b]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            {card.value}
          </span>
          <span className="font-['Nunito_Sans',sans-serif] font-semibold text-[13px] leading-[19.5px] text-[#6c7c8e]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            {card.label}
          </span>
        </div>
      ))}
    </div>
  );
}
