import { useState, useEffect } from 'react';
import { GripVertical, Settings } from 'lucide-react';

interface ColumnConfig {
  field: string;
  headerName: string;
  visible: boolean;
  order: number;
}

interface ColumnManagerProps {
  columns: { field: string; headerName: string }[];
  onApply: (visibleColumns: string[]) => void;
}

export function ColumnManager({ columns, onApply }: ColumnManagerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [columnConfigs, setColumnConfigs] = useState<ColumnConfig[]>(
    columns.map((col, index) => ({
      field: col.field,
      headerName: col.headerName,
      visible: true,
      order: index
    }))
  );
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  useEffect(() => {
    setColumnConfigs(
      columns.map((col, index) => ({
        field: col.field,
        headerName: col.headerName,
        visible: true,
        order: index
      }))
    );
  }, [columns]);

  const handleToggleColumn = (index: number) => {
    const newConfigs = [...columnConfigs];
    newConfigs[index].visible = !newConfigs[index].visible;
    setColumnConfigs(newConfigs);
  };

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    const newConfigs = [...columnConfigs];
    const draggedItem = newConfigs[draggedIndex];
    newConfigs.splice(draggedIndex, 1);
    newConfigs.splice(index, 0, draggedItem);
    
    setColumnConfigs(newConfigs.map((config, i) => ({ ...config, order: i })));
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const handleApply = () => {
    const visibleColumns = columnConfigs
      .filter(config => config.visible)
      .map(config => config.field);
    onApply(visibleColumns);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setColumnConfigs(
      columns.map((col, index) => ({
        field: col.field,
        headerName: col.headerName,
        visible: true,
        order: index
      }))
    );
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Settings Icon Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-[27px] h-[27px] flex items-center justify-center bg-[#2a4eab] hover:bg-[#1e3a8a] rounded transition-colors"
        title="Manage Columns"
      >
        <Settings className="w-4 h-4 text-white" />
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white shadow-xl rounded-[5px] border border-gray-200 z-[100] w-[280px]">
          {/* Column List */}
          <div className="max-h-[400px] overflow-y-auto py-2">
            {columnConfigs.map((config, index) => (
              <div
                key={config.field}
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDragEnd={handleDragEnd}
                className={`flex items-center gap-3 px-4 py-2.5 cursor-move hover:bg-gray-50 transition-colors ${
                  draggedIndex === index ? 'opacity-50' : ''
                }`}
              >
                {/* Drag Handle */}
                <GripVertical className="w-5 h-5 text-gray-400 flex-shrink-0" />
                
                {/* Checkbox */}
                <input
                  type="checkbox"
                  checked={config.visible}
                  onChange={() => handleToggleColumn(index)}
                  className="w-5 h-5 rounded border-2 border-gray-300 text-[#2a4eab] focus:ring-[#2a4eab] focus:ring-offset-0 cursor-pointer flex-shrink-0"
                  style={{
                    accentColor: '#2a4eab'
                  }}
                />
                
                {/* Column Name */}
                <span className="font-['Nunito_Sans',sans-serif] text-[14px] text-[#26273b] flex-1">
                  {config.headerName}
                </span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 px-4 py-3 border-t border-gray-200">
            <button
              onClick={handleCancel}
              className="px-6 py-2 font-['Nunito_Sans',sans-serif] text-[14px] text-[#26273b] border border-gray-300 rounded-[5px] hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleApply}
              className="px-6 py-2 font-['Nunito_Sans',sans-serif] text-[14px] text-white bg-[#2a4eab] rounded-[5px] hover:bg-[#1e3a8a] transition-colors"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}