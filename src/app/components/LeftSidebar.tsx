import { useState } from 'react';

interface MenuItem {
  icon: string;
  label: string;
  isActive?: boolean;
}

export function LeftSidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems: MenuItem[] = [
    { icon: 'fas fa-th-large', label: 'Dashboard', isActive: true },
    { icon: 'fas fa-industry', label: 'Management' },
    { icon: 'fas fa-boxes', label: 'Freight' },
    { icon: 'fas fa-industry', label: 'Inplant' },
    { icon: 'fas fa-file', label: 'Placement' },
    { icon: 'fas fa-map-marked-alt', label: 'Tracking' },
    { icon: 'fas fa-file-alt', label: 'POD' },
    { icon: 'fas fa-truck', label: 'Trips' },
    { icon: 'fas fa-bullseye', label: 'Performance' },
    { icon: 'fas fa-chart-pie', label: 'SOB' },
    { icon: 'fas fa-calculator', label: 'Freight Accounts' },
    { icon: 'fas fa-chart-bar', label: 'Internal' },
    { icon: 'fas fa-book', label: 'System Adoption' },
    { icon: 'fas fa-box', label: 'Sustainability' }
  ];

  return (
    <>
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />
      
      <nav
        className="bg-white transition-all duration-300 overflow-hidden"
        style={{
          width: isExpanded ? '250px' : '55px',
          position: 'fixed',
          top: '55px',
          left: 0,
          bottom: 0,
          borderRight: '1px solid #e5e7eb',
          zIndex: 50
        }}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="flex flex-col">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center cursor-pointer transition-colors ${
                item.isActive ? 'bg-[#e8f0fe]' : 'hover:bg-gray-50'
              }`}
              style={{
                height: '55px',
                borderBottom: '1px solid #e5e7eb',
                paddingLeft: '16px',
                paddingRight: '16px'
              }}
              title={!isExpanded ? item.label : ''}
            >
              <div className="flex items-center justify-center" style={{ width: '23px' }}>
                <i
                  className={item.icon}
                  style={{
                    color: item.isActive ? '#2a4eab' : '#26273B',
                    fontSize: '14px'
                  }}
                />
              </div>
              {isExpanded && (
                <span
                  className="ml-4 font-['Nunito_Sans',sans-serif] whitespace-nowrap"
                  style={{
                    fontSize: '14px',
                    color: item.isActive ? '#2a4eab' : '#26273b',
                    fontWeight: item.isActive ? '600' : '400'
                  }}
                >
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </nav>
    </>
  );
}