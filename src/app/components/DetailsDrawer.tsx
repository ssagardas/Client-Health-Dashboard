import { useState } from 'react';
import { X, Download, Info } from 'lucide-react';
import { AgGridReact } from 'ag-grid-react';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { ColumnManager } from './ColumnManager';

// Register AG Grid modules
ModuleRegistry.registerModules([AllCommunityModule]);

interface DetailsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onCompanyClick?: (companyName: string, healthStatus: 'Healthy' | 'Need Attention' | 'At Risk') => void;
}

// Custom styles for full-width row borders
const gridStyles = `
  .ag-theme-quartz .ag-row {
    border-bottom: 1px solid #e5e7eb !important;
  }
  
  .ag-theme-quartz .ag-row:last-child {
    border-bottom: 1px solid #e5e7eb !important;
  }
  
  .ag-theme-quartz .ag-cell {
    border-right: none !important;
    font-family: 'Nunito Sans', sans-serif;
  }
  
  .ag-theme-quartz .ag-header-cell {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #26273b;
  }

  .ag-theme-quartz .ag-root-wrapper {
    border: 1px solid #e5e7eb;
    border-radius: 5px;
  }

  .action-button:hover {
    opacity: 0.9;
  }
`;

// Mock table data
const tableData = [
  { companyName: 'Tata Steel Ltd', healthStatus: 'Healthy', score: 92 },
  { companyName: 'Reliance Industries', healthStatus: 'Healthy', score: 88 },
  { companyName: 'Mahindra & Mahindra', healthStatus: 'Healthy', score: 85 },
  { companyName: 'Larsen & Toubro', healthStatus: 'Healthy', score: 91 },
  { companyName: 'Adani Ports', healthStatus: 'Healthy', score: 87 },
  { companyName: 'Hindustan Unilever', healthStatus: 'Need Attention', score: 68 },
  { companyName: 'ITC Limited', healthStatus: 'Need Attention', score: 65 },
  { companyName: 'Asian Paints', healthStatus: 'Need Attention', score: 62 },
  { companyName: 'Bajaj Auto', healthStatus: 'Need Attention', score: 69 },
  { companyName: 'Sun Pharma', healthStatus: 'Need Attention', score: 64 },
  { companyName: 'Dr Reddy\'s Labs', healthStatus: 'At Risk - Improving', score: 45 },
  { companyName: 'Cipla Ltd', healthStatus: 'At Risk - Deteriorating', score: 42 },
  { companyName: 'Biocon Limited', healthStatus: 'At Risk - Improving', score: 38 },
  { companyName: 'Cadila Healthcare', healthStatus: 'At Risk - Deteriorating', score: 41 },
  { companyName: 'Lupin Limited', healthStatus: 'At Risk - Improving', score: 44 },
  { companyName: 'Infosys Technologies', healthStatus: 'Healthy', score: 89 },
  { companyName: 'TCS Limited', healthStatus: 'Healthy', score: 94 },
  { companyName: 'Wipro Limited', healthStatus: 'Need Attention', score: 67 },
  { companyName: 'HCL Technologies', healthStatus: 'Healthy', score: 86 },
  { companyName: 'Tech Mahindra', healthStatus: 'Need Attention', score: 63 },
];

const StatusCellRenderer = (props: any) => {
  const status = props.value;
  
  if (status === 'Healthy') {
    return (
      <div
        style={{
          backgroundColor: '#dcfce7',
          color: '#16a34a',
          padding: '2px 12px',
          borderRadius: '12px',
          display: 'inline-block',
          fontSize: '12px',
          fontWeight: '500',
          fontFamily: 'Nunito Sans, sans-serif',
          height: 'auto',
          lineHeight: '1.5',
        }}
      >
        {status}
      </div>
    );
  } else if (status === 'Need Attention') {
    return (
      <div
        style={{
          backgroundColor: '#fef3c7',
          color: '#d97706',
          padding: '2px 12px',
          borderRadius: '12px',
          display: 'inline-block',
          fontSize: '12px',
          fontWeight: '500',
          fontFamily: 'Nunito Sans, sans-serif',
          height: 'auto',
          lineHeight: '1.5',
        }}
      >
        {status}
      </div>
    );
  } else if (status === 'At Risk - Improving') {
    return (
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <div
          style={{
            backgroundColor: '#fee2e2',
            color: '#dc2626',
            padding: '2px 12px',
            borderRadius: '12px',
            display: 'inline-block',
            fontSize: '12px',
            fontWeight: '500',
            fontFamily: 'Nunito Sans, sans-serif',
            height: 'auto',
            lineHeight: '1.5',
          }}
        >
          At Risk
        </div>
        <span style={{ color: '#16a34a', fontSize: '12px', fontWeight: '500', fontFamily: 'Nunito Sans, sans-serif' }}>
          Improving
        </span>
      </div>
    );
  } else if (status === 'At Risk - Deteriorating') {
    return (
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <div
          style={{
            backgroundColor: '#fee2e2',
            color: '#dc2626',
            padding: '2px 12px',
            borderRadius: '12px',
            display: 'inline-block',
            fontSize: '12px',
            fontWeight: '500',
            fontFamily: 'Nunito Sans, sans-serif',
            height: 'auto',
            lineHeight: '1.5',
          }}
        >
          At Risk
        </div>
        <span style={{ color: '#dc2626', fontSize: '12px', fontWeight: '500', fontFamily: 'Nunito Sans, sans-serif' }}>
          Deteriorating
        </span>
      </div>
    );
  }
  
  return null;
};

const ScoreCellRenderer = (props: any) => {
  const status = props.data.healthStatus;
  let textColor = '';
  
  if (status === 'Healthy') {
    textColor = '#16a34a';
  } else if (status === 'Need Attention') {
    textColor = '#d97706';
  } else if (status === 'At Risk - Improving') {
    textColor = '#dc2626';
  } else if (status === 'At Risk - Deteriorating') {
    textColor = '#dc2626';
  }
  
  return (
    <div
      style={{
        color: textColor,
        fontWeight: '600',
        fontFamily: 'Nunito Sans, sans-serif',
      }}
    >
      {props.value}
    </div>
  );
};

const defaultColDef = {
  sortable: true,
  resizable: true,
  filter: true,
  floatingFilter: true
};

// Separate Grid Component defined outside
function TripGrid({ onCompanyClick, filterStatus }: { onCompanyClick?: (companyName: string, healthStatus: 'Healthy' | 'Need Attention' | 'At Risk') => void, filterStatus?: 'Healthy' | 'Need Attention' | 'At Risk' }) {
  // Create ActionCellRenderer inside TripGrid to access onCompanyClick
  const ActionCellRenderer = (params: any) => {
    return (
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', height: '100%' }}>
        <button
          style={{
            padding: '6px 12px',
            backgroundColor: '#2a4eab',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '12px',
            fontFamily: 'Nunito Sans, sans-serif',
            cursor: 'pointer',
            fontWeight: '600',
            lineHeight: '1'
          }}
          onClick={() => {
            if (onCompanyClick) {
              onCompanyClick(params.data.companyName, params.data.healthStatus);
            }
          }}
          className="action-button"
        >
          View Detail
        </button>
      </div>
    );
  };

  const columnDefsWithAction = [
    { 
      field: 'companyName', 
      headerName: 'Company Name', 
      filter: 'agTextColumnFilter',
      width: 200
    },
    { 
      field: 'healthStatus', 
      headerName: 'Health Status', 
      filter: 'agTextColumnFilter',
      cellRenderer: StatusCellRenderer,
      width: 140
    },
    { 
      field: 'score', 
      headerName: 'Score', 
      filter: 'agNumberColumnFilter',
      cellRenderer: ScoreCellRenderer,
      width: 100
    },
    { 
      field: 'action', 
      headerName: 'View', 
      filter: false,
      sortable: false,
      cellRenderer: ActionCellRenderer,
      width: 120
    }
  ];

  const [visibleColumns, setVisibleColumns] = useState<string[]>(
    columnDefsWithAction.map(col => col.field)
  );

  const handleApplyColumns = (columns: string[]) => {
    setVisibleColumns(columns);
  };

  const filteredColumnDefs = columnDefsWithAction.filter(col => 
    visibleColumns.includes(col.field)
  );

  // Grid options as a separate object to prevent prop spreading
  const filteredData = filterStatus === 'At Risk'
    ? tableData.filter(item => item.healthStatus === 'At Risk - Improving' || item.healthStatus === 'At Risk - Deteriorating')
    : filterStatus 
      ? tableData.filter(item => item.healthStatus === filterStatus)
      : tableData;

  const gridOptions = {
    rowData: filteredData,
    columnDefs: filteredColumnDefs,
    defaultColDef: defaultColDef,
    animateRows: true,
    theme: 'legacy' as any
  };

  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
      {/* Column Manager positioned on table header */}
      <div style={{ position: 'absolute', top: '8px', right: '8px', zIndex: 10 }}>
        <ColumnManager 
          columns={columnDefsWithAction.map(col => ({ field: col.field, headerName: col.headerName }))}
          onApply={handleApplyColumns}
        />
      </div>
      <IsolatedGrid 
        rowData={gridOptions.rowData}
        columnDefs={gridOptions.columnDefs}
        defaultColDef={gridOptions.defaultColDef}
        animateRows={gridOptions.animateRows}
        theme={gridOptions.theme}
      />
    </div>
  );
}

// Isolated Grid component to prevent data-fg attributes from being passed
function IsolatedGrid(props: { 
  rowData: any[];
  columnDefs: any[];
  defaultColDef: any;
  animateRows: boolean;
  theme: any;
  [key: string]: any; // Allow extra props but don't pass them
}) {
  const { rowData, columnDefs, defaultColDef, animateRows, theme, ...rest } = props;
  // Only pass valid AG Grid props, ignore everything else (like data-fg-* attributes)
  
  return (
    <div className="ag-theme-quartz" style={{ height: '100%', width: '100%' }}>
      <AgGridReact 
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        animateRows={animateRows}
        theme={theme}
      />
    </div>
  );
}

export function DetailsDrawer({ isOpen, onClose, onCompanyClick }: DetailsDrawerProps) {
  const [activeTab, setActiveTab] = useState<'Healthy' | 'Need Attention' | 'At Risk'>('Healthy');

  if (!isOpen) return null;

  // Filter data by health status
  const healthyCustomers = tableData.filter(item => item.healthStatus === 'Healthy');
  const needAttentionCustomers = tableData.filter(item => item.healthStatus === 'Need Attention');
  const atRiskCustomers = tableData.filter(item => item.healthStatus === 'At Risk - Improving' || item.healthStatus === 'At Risk - Deteriorating');

  const tabs = [
    { id: 'Healthy' as const, label: `Healthy (${healthyCustomers.length})`, count: healthyCustomers.length },
    { id: 'Need Attention' as const, label: `Need Attention (${needAttentionCustomers.length})`, count: needAttentionCustomers.length },
    { id: 'At Risk' as const, label: `At Risk (${atRiskCustomers.length})`, count: atRiskCustomers.length },
  ];

  return (
    <>
      {/* Inject custom grid styles */}
      <style>{gridStyles}</style>
      
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black z-[60]"
        style={{ opacity: 0.5 }}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-[90%] bg-[#F9FAFC] shadow-2xl z-[70] flex flex-col">
        {/* Header with Shadow */}
        <div className="px-6 bg-white shadow-md h-[38px] flex items-center mb-[25px]">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <h2 className="font-['Nunito_Sans',sans-serif] font-bold text-[18px] text-[#26273b]">
                Health Distribution
              </h2>
              <Info className="w-4 h-4 text-gray-400" />
            </div>
            <button 
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-[5px] transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="px-6 mb-4">
          <div className="flex items-center justify-between border-b border-[#e5e7eb]">
            <div className="flex items-center gap-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-3 text-[14px] font-normal transition-colors relative ${
                    activeTab === tab.id
                      ? 'text-[#2a4eab]'
                      : 'text-[#64748b] hover:text-[#26273b]'
                  }`}
                  style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <span 
                      className="absolute bottom-0 left-0 right-0 bg-[#2a4eab]"
                      style={{ height: '3px' }}
                    ></span>
                  )}
                </button>
              ))}
            </div>
            
            {/* Download Button aligned with tabs */}
            <button className="w-[38px] h-[38px] bg-white border-2 border-[#2a4eab] text-[#2a4eab] rounded-[5px] hover:bg-gray-50 transition-colors flex items-center justify-center mb-3">
              <Download className="w-[20px] h-[20px]" />
            </button>
          </div>
        </div>
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 pb-6">
          {/* Single Table Section */}
          <div className="mb-6">
            <div style={{ height: '600px', width: '100%' }}>
              <TripGrid 
                onCompanyClick={onCompanyClick} 
                filterStatus={activeTab}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}