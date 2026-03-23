import { useState } from 'react';
import { Key } from 'lucide-react';

export function Header() {
  const [isTripsDropdownOpen, setIsTripsDropdownOpen] = useState(false);
  const [isAccountsDropdownOpen, setIsAccountsDropdownOpen] = useState(false);
  const [isDashboardDropdownOpen, setIsDashboardDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  
  const navItems = [
    "Sales Order",
    "Requisitions",
    "Contracts",
    "Leads",
    "Trips",
    "Accounts",
    "Dedicated Vehicles",
    "Loadability",
    "Dashboard",
  ];

  const tripsDropdownItems = [
    "Trip Board",
    "Train Board",
    "Loading Dock",
    "Tracking Board",
    "GRN Board",
    "IBD Board",
    "Invoice Board",
    "InPlant Board",
    "Inplant 5.0",
    "POD Board",
  ];

  const accountsDropdownItems = [
    "Freight Processing",
    "Account Board",
    "Customer Board",
    "Supplier Board",
    "Vendor Board",
    "Partner Board",
    "Client Board",
    "Supplier List",
    "Vendor List",
    "Partner List",
  ];

  const dashboardDropdownItems = [
    "Dashboard",
    "Reports",
  ];

  const profileDropdownItems = [
    "Profile",
    "Settings",
    "Logout",
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-[0px_2px_12px_0px_rgba(227,231,255,0.6)] z-50 h-[55px]">
      <div className="flex items-center justify-between px-4 h-full">
        <div className="flex items-center gap-6">
          <div className="w-[120px] h-8 flex items-center justify-center">
            <span className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] leading-[24px] text-[#0074e9]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              SuperProcure
            </span>
          </div>

          <nav className="flex gap-6">
            {navItems.map((item) => (
              item === "Trips" ? (
                <div 
                  key={item} 
                  className="relative"
                  onMouseEnter={() => setIsTripsDropdownOpen(true)}
                  onMouseLeave={() => setIsTripsDropdownOpen(false)}
                >
                  <button
                    className="font-['Nunito_Sans',sans-serif] font-bold text-[14px] leading-[21px] text-[#26273b] flex items-center gap-1"
                    style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
                  >
                    {item}
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path d="M1 1L5 5L9 1" stroke="#26273b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  
                  {isTripsDropdownOpen && (
                    <div className="absolute top-full left-0 bg-white shadow-lg rounded-[5px] py-2 min-w-[180px] z-50">
                      {tripsDropdownItems.map((dropdownItem) => (
                        <button
                          key={dropdownItem}
                          className="w-full text-left px-4 py-2 font-['Nunito_Sans',sans-serif] text-[14px] text-[#26273b] hover:bg-gray-100"
                          style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
                        >
                          {dropdownItem}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : item === "Accounts" ? (
                <div 
                  key={item} 
                  className="relative"
                  onMouseEnter={() => setIsAccountsDropdownOpen(true)}
                  onMouseLeave={() => setIsAccountsDropdownOpen(false)}
                >
                  <button
                    className="font-['Nunito_Sans',sans-serif] font-bold text-[14px] leading-[21px] text-[#26273b] flex items-center gap-1"
                    style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
                  >
                    {item}
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path d="M1 1L5 5L9 1" stroke="#26273b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  
                  {isAccountsDropdownOpen && (
                    <div className="absolute top-full left-0 bg-white shadow-lg rounded-[5px] py-2 min-w-[180px] z-50">
                      {accountsDropdownItems.map((dropdownItem) => (
                        <button
                          key={dropdownItem}
                          className="w-full text-left px-4 py-2 font-['Nunito_Sans',sans-serif] text-[14px] text-[#26273b] hover:bg-gray-100"
                          style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
                        >
                          {dropdownItem}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : item === "Dashboard" ? (
                <div 
                  key={item} 
                  className="relative"
                  onMouseEnter={() => setIsDashboardDropdownOpen(true)}
                  onMouseLeave={() => setIsDashboardDropdownOpen(false)}
                >
                  <button
                    className="font-['Nunito_Sans',sans-serif] font-bold text-[14px] leading-[21px] text-[#2a4eab] flex items-center gap-1"
                    style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
                  >
                    {item}
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path d="M1 1L5 5L9 1" stroke="#2a4eab" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  
                  {isDashboardDropdownOpen && (
                    <div className="absolute top-full left-0 bg-white shadow-lg rounded-[5px] py-2 min-w-[180px] z-50">
                      {dashboardDropdownItems.map((dropdownItem) => (
                        <button
                          key={dropdownItem}
                          className="w-full text-left px-4 py-2 font-['Nunito_Sans',sans-serif] text-[14px] text-[#26273b] hover:bg-gray-100"
                          style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
                        >
                          {dropdownItem}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item}
                  className="font-['Nunito_Sans',sans-serif] font-bold text-[14px] leading-[21px] text-[#26273b]"
                  style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
                >
                  {item}
                </button>
              )
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {/* Search box */}
          <div className="relative">
            <input
              type="text"
              placeholder="Advanced Search"
              className="bg-white rounded-[5px] pl-4 pr-12 py-2 w-[180px] h-[40px] font-['Nunito_Sans',sans-serif] font-normal text-[14px] text-[#26273b] placeholder:text-[#999]"
              style={{ 
                fontVariationSettings: "'YTLC' 500, 'wdth' 100",
                border: "2px solid transparent",
                backgroundImage: "linear-gradient(white, white), linear-gradient(135deg, #af6eef, #1ed8be, #7183ff)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box"
              }}
            />
            <svg 
              className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none"
            >
              <circle cx="9" cy="9" r="7.5" stroke="#6b7fee" strokeWidth="1.5"/>
              <path d="M14.5 14.5L18 18" stroke="#6b7fee" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Question mark icon */}
          <button className="w-8 h-8 rounded-full border-2 border-[#2a4eab] flex items-center justify-center bg-white">
            <span className="font-['Nunito_Sans',sans-serif] font-bold text-[16px] text-[#2a4eab]">?</span>
          </button>
          
          {/* Profile icon with dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsProfileDropdownOpen(true)}
            onMouseLeave={() => setIsProfileDropdownOpen(false)}
          >
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 rounded-full border-2 border-[#2a4eab] flex items-center justify-center bg-white">
                <span className="font-['Nunito_Sans',sans-serif] font-bold text-[16px] text-[#2a4eab]">S</span>
              </button>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="#2a4eab" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            {isProfileDropdownOpen && (
              <div 
                className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-[5px] py-3 min-w-[280px] z-50"
                style={{ border: '1px solid #e5e7eb' }}
              >
                {/* User Info Section */}
                <div className="px-4 pb-3 border-b border-gray-200">
                  <div className="font-['Nunito_Sans',sans-serif] font-bold text-[16px] text-[#26273b] mb-1">
                    Subhadip
                  </div>
                  <div className="font-['Nunito_Sans',sans-serif] text-[14px] text-[#26273b] mb-1">
                    9830524546
                  </div>
                  <div className="font-['Nunito_Sans',sans-serif] text-[14px] text-[#5b6cf6] mb-3">
                    Teja & Teja Pvt. Ltd
                  </div>
                  
                  {/* Session Info */}
                  <div className="flex items-center gap-2 mb-2">
                    <Key className="w-4 h-4 text-[#26273b]" />
                    <span className="font-['Nunito_Sans',sans-serif] text-[14px] text-[#26273b]">
                      753 other sessions found
                    </span>
                  </div>
                  
                  {/* End Sessions Button */}
                  <button className="font-['Nunito_Sans',sans-serif] text-[14px] text-[#ef4444] border border-[#ef4444] rounded-[5px] px-4 py-1.5 hover:bg-[#fef2f2] transition-colors">
                    End sessions
                  </button>
                </div>

                {/* Menu Items */}
                <div className="py-2 border-b border-gray-200">
                  <button className="w-full text-left px-4 py-2 font-['Nunito_Sans',sans-serif] text-[14px] text-[#26273b] hover:bg-gray-100">
                    My Masters
                  </button>
                  <button className="w-full text-left px-4 py-2 font-['Nunito_Sans',sans-serif] text-[14px] text-[#26273b] hover:bg-gray-100">
                    My Settings
                  </button>
                  <button className="w-full text-left px-4 py-2 font-['Nunito_Sans',sans-serif] text-[14px] text-[#26273b] hover:bg-gray-100 flex items-center justify-between">
                    <span>My Settings</span>
                    <span className="bg-[#ef4444] text-white text-[11px] px-2 py-0.5 rounded-[3px] font-semibold">New</span>
                  </button>
                  <button className="w-full text-left px-4 py-2 font-['Nunito_Sans',sans-serif] text-[14px] text-[#26273b] hover:bg-gray-100 flex items-center justify-between">
                    <span>Connect Api Logs</span>
                    <span className="bg-[#ef4444] text-white text-[11px] px-2 py-0.5 rounded-[3px] font-semibold">New</span>
                  </button>
                  <button className="w-full text-left px-4 py-2 font-['Nunito_Sans',sans-serif] text-[14px] text-[#26273b] hover:bg-gray-100">
                    API Logs
                  </button>
                </div>

                {/* Logout */}
                <div className="py-2">
                  <button className="w-full text-left px-4 py-2 font-['Nunito_Sans',sans-serif] text-[14px] text-[#26273b] hover:bg-gray-100">
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}