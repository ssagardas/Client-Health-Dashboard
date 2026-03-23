import { Info } from "lucide-react";
import { VehicleData } from "@/app/App";

interface VehicleTableProps {
  vehicles: VehicleData[];
}

export function VehicleTable({ vehicles }: VehicleTableProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Indent":
        return "text-[#af6eef]";
      case "Loading":
        return "text-[#00a1ff]";
      case "Unallocated":
        return "text-[#ff6b6b]";
      case "In-Transit":
        return "text-[#4caf50]";
      case "Unloading":
        return "text-[#ff9800]";
      default:
        return "text-[#26273b]";
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-white border-b border-[#e6e9f2]">
            <tr>
              <th className="px-3 py-3.5 text-left w-[33px]">
                <input type="checkbox" className="w-3 h-3" />
              </th>
              <th className="px-3 py-3.5 text-left min-w-[211px]">
                <div className="flex items-center gap-1">
                  <span className="text-[#ccc] text-[14px]">|</span>
                  <span className="font-['Nunito_Sans',sans-serif] font-semibold text-[14px] leading-[21px] text-[#26273b]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    Vehicle Number
                  </span>
                </div>
              </th>
              <th className="px-3 py-3.5 text-left min-w-[211px]">
                <div className="flex items-center gap-1">
                  <span className="text-[#ccc] text-[14px]">|</span>
                  <span className="font-['Nunito_Sans',sans-serif] font-semibold text-[14px] leading-[21px] text-[#26273b]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    Vehicle Type
                  </span>
                </div>
              </th>
              <th className="px-3 py-3.5 text-left min-w-[211px]">
                <div className="flex items-center gap-1">
                  <span className="text-[#ccc] text-[14px]">|</span>
                  <span className="font-['Nunito_Sans',sans-serif] font-semibold text-[14px] leading-[21px] text-[#26273b]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    Carrier
                  </span>
                </div>
              </th>
              <th className="px-3 py-3.5 text-left min-w-[211px]">
                <div className="flex items-center gap-1">
                  <span className="text-[#ccc] text-[14px]">|</span>
                  <span className="font-['Nunito_Sans',sans-serif] font-semibold text-[14px] leading-[21px] text-[#26273b]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    Status
                  </span>
                </div>
              </th>
              <th className="px-3 py-3.5 text-left min-w-[211px]">
                <div className="flex items-center gap-1">
                  <span className="text-[#ccc] text-[14px]">|</span>
                  <span className="font-['Nunito_Sans',sans-serif] font-semibold text-[14px] leading-[21px] text-[#26273b]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    Ongoing Trip ID
                  </span>
                </div>
              </th>
              <th className="px-3 py-3.5 text-left min-w-[150px]">
                <div className="flex items-center gap-1">
                  <span className="text-[#ccc] text-[14px]">|</span>
                  <span className="font-['Nunito_Sans',sans-serif] font-semibold text-[14px] leading-[21px] text-[#26273b]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    Speed
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle, index) => (
              <tr
                key={vehicle.id}
                className="border-b border-[#e6e9f2] hover:bg-gray-50"
              >
                <td className="px-3 py-3.5">
                  <input type="checkbox" className="w-3 h-3" />
                </td>
                <td className="px-3 py-3.5">
                  <span className="font-['Nunito_Sans',sans-serif] font-normal text-[14px] leading-[21px] text-[#2a4eab]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    {vehicle.vehicleNumber}
                  </span>
                </td>
                <td className="px-3 py-3.5">
                  <span className="font-['Nunito_Sans',sans-serif] font-normal text-[14px] leading-[21px] text-[#26273b]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    {vehicle.vehicleType || "-"}
                  </span>
                </td>
                <td className="px-3 py-3.5">
                  <span className="font-['Nunito_Sans',sans-serif] font-normal text-[14px] leading-[21px] text-[#26273b]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    {vehicle.carrier}
                  </span>
                </td>
                <td className="px-3 py-3.5">
                  <span className={`font-['Nunito_Sans',sans-serif] font-bold text-[14px] leading-[19px] capitalize ${getStatusColor(vehicle.status)}`} style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    {vehicle.status}
                  </span>
                </td>
                <td className="px-3 py-3.5">
                  <span className="font-['Nunito_Sans',sans-serif] font-normal text-[14px] leading-[21px] text-[#2a4eab]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    {vehicle.ongoingTripId || "-"}
                  </span>
                </td>
                <td className="px-3 py-3.5">
                  <div className="flex items-center gap-2">
                    <span className="font-['Nunito_Sans',sans-serif] font-normal text-[14px] leading-[21px] text-[#26273b]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                      {vehicle.speed || "-"}
                    </span>
                    {vehicle.speed && (
                      <Info className="w-4 h-4 text-[#6c7c8e] cursor-pointer" />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
