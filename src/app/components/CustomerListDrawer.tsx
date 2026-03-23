import { X, Download, Info } from 'lucide-react';
import { AgGridReact } from 'ag-grid-react';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { useState } from 'react';
import { ColumnManager } from './ColumnManager';

// Register AG Grid modules
ModuleRegistry.registerModules([AllCommunityModule]);

interface CustomerListDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filter: 'Healthy' | 'Need Attention' | 'At Risk' | null;
  onCompanyClick?: (companyName: string, healthStatus: 'Healthy' | 'Need Attention' | 'At Risk') => void;
}

// Custom styles for full-width row borders
const gridStyles = `
  .ag-theme-quartz .ag-row {
    border-bottom: 1px solid #e5e7eb !important;
  }
  .ag-theme-quartz .ag-row::after {
    content: none !important;
  }
  .ag-theme-quartz .ag-cell {
    border-right: none !important;
  }
  .ag-theme-quartz .ag-header-cell {
    border-right: none !important;
  }
  .ag-theme-quartz .action-button {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease, visibility 0.2s ease;
  }
  .ag-theme-quartz .ag-row:hover .action-button {
    opacity: 1;
    visibility: visible;
  }
`;

const allTableData = [
  { companyName: 'Tata Steel Limited', healthStatus: 'Healthy', score: 85 },
  { companyName: 'Reliance Industries Limited', healthStatus: 'Healthy', score: 92 },
  { companyName: 'Hindustan Unilever Limited', healthStatus: 'Need Attention', score: 68 },
  { companyName: 'ITC Limited', healthStatus: 'Healthy', score: 88 },
  { companyName: 'Larsen & Toubro Limited', healthStatus: 'Need Attention', score: 72 },
  { companyName: 'Asian Paints Limited', healthStatus: 'Healthy', score: 90 },
  { companyName: 'Mahindra & Mahindra Limited', healthStatus: 'At Risk - Improving', score: 45 },
  { companyName: 'Sun Pharmaceutical Industries Ltd', healthStatus: 'Healthy', score: 84 },
  { companyName: 'Tech Mahindra Limited', healthStatus: 'Need Attention', score: 70 },
  { companyName: 'Wipro Limited', healthStatus: 'Healthy', score: 81 },
  { companyName: 'Infosys Limited', healthStatus: 'At Risk - Deteriorating', score: 48 },
  { companyName: 'HCL Technologies Limited', healthStatus: 'Healthy', score: 86 },
  { companyName: 'Bajaj Auto Limited', healthStatus: 'Need Attention', score: 67 },
  { companyName: 'Hero MotoCorp Limited', healthStatus: 'Healthy', score: 82 },
  { companyName: 'Maruti Suzuki India Limited', healthStatus: 'At Risk - Improving', score: 43 },
  { companyName: 'Adani Enterprises Limited', healthStatus: 'Healthy', score: 87 },
  { companyName: 'UltraTech Cement Limited', healthStatus: 'Need Attention', score: 71 },
  { companyName: 'Bharti Airtel Limited', healthStatus: 'Healthy', score: 83 },
  { companyName: 'NTPC Limited', healthStatus: 'At Risk - Deteriorating', score: 46 },
  { companyName: 'Power Grid Corporation', healthStatus: 'Healthy', score: 86 },
  { companyName: 'Kotak Mahindra Bank', healthStatus: 'Need Attention', score: 69 },
  { companyName: 'HDFC Bank Limited', healthStatus: 'Healthy', score: 91 },
  { companyName: 'ICICI Bank Limited', healthStatus: 'At Risk - Improving', score: 47 },
  { companyName: 'State Bank of India', healthStatus: 'Healthy', score: 89 },
  { companyName: 'Axis Bank Limited', healthStatus: 'Need Attention', score: 73 },
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

const ActionCellRenderer = (props: any) => {
  return (
    <button
      className="action-button px-3 py-1.5 text-[12px] font-medium text-white bg-[#2a4eab] rounded-[5px] hover:bg-[#1e3a8a] transition-colors border border-[#2a4eab]"
      style={{ fontFamily: 'Nunito Sans, sans-serif' }}
      onClick={() => props.context?.onCompanyClick?.(props.data.companyName, props.data.healthStatus)}
    >
      View Details
    </button>
  );
};

// Wrapper component to isolate AgGridReact from any extra props
function GridWrapper({ rowData, columnDefs, onCompanyClick }: any) {
  return <IsolatedAgGrid rowData={rowData} columnDefs={columnDefs} onCompanyClick={onCompanyClick} />;
}

// Completely isolated AgGrid component
function IsolatedAgGrid({ rowData, columnDefs, onCompanyClick, ...rest }: any) {
  // Only pass valid AG Grid props, ignore everything else (like data-fg-* attributes)
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <AgGridReact
        theme="legacy"
        rowData={rowData}
        columnDefs={columnDefs}
        domLayout="normal"
        rowHeight={48}
        headerHeight={44}
        suppressCellFocus={true}
        context={{ onCompanyClick }}
        defaultColDef={{
          sortable: true,
          filter: true,
          resizable: true,
        }}
      />
    </div>
  );
}

export function CustomerListDrawer({ isOpen, onClose, filter, onCompanyClick }: CustomerListDrawerProps) {
  if (!isOpen) return null;

  // Filter data based on the status
  const filteredData = filter === 'At Risk'
    ? allTableData.filter(item => item.healthStatus === 'At Risk - Improving' || item.healthStatus === 'At Risk - Deteriorating')
    : filter 
      ? allTableData.filter(item => item.healthStatus === filter)
      : allTableData;

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

  const getTitle = () => {
    if (filter === 'Healthy') return 'Healthy Customers';
    if (filter === 'Need Attention') return 'Customers Need Attention';
    if (filter === 'At Risk') return 'Customers at Risk';
    return 'All Customers';
  };

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
                {getTitle()}
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
        
        {/* Download Button Section */}
        <div className="px-6 flex items-center justify-end mb-[10px]">
          <button className="w-[38px] h-[38px] bg-white border-2 border-[#2a4eab] text-[#2a4eab] rounded-[5px] hover:bg-gray-50 transition-colors flex items-center justify-center">
            <Download className="w-[20px] h-[20px]" />
          </button>
        </div>

        {/* Table Content */}
        <div className="flex-1 overflow-hidden px-6">
          <div style={{ height: '100%', width: '100%', position: 'relative' }}>
            {/* Column Manager positioned on table header */}
            <div style={{ position: 'absolute', top: '8px', right: '8px', zIndex: 10 }}>
              <ColumnManager 
                columns={columnDefsWithAction.map(col => ({ field: col.field, headerName: col.headerName }))}
                onApply={handleApplyColumns}
              />
            </div>
            <div className="ag-theme-quartz" style={{ height: '100%', width: '100%' }}>
              <GridWrapper 
                rowData={filteredData}
                columnDefs={filteredColumnDefs}
                onCompanyClick={onCompanyClick}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}