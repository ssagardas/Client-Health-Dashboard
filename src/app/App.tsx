import { Header } from "@/app/components/Header";
import { MetricsGrid } from "@/app/components/MetricsGrid";
import { LeftSidebar } from "@/app/components/LeftSidebar";
import { DetailsDrawer } from "@/app/components/DetailsDrawer";
import { CustomerListDrawer } from "@/app/components/CustomerListDrawer";
import { DetentionTrendChart } from "@/app/components/DetentionTrendChart";
import { DetentionAnalysisChart } from "@/app/components/DetentionAnalysisChart";
import { DateRangePicker } from "@/app/components/DateRangePicker";
import { PlatformHealthSection } from "@/app/components/PlatformHealthSection";
import { PartnerHealthSection } from "@/app/components/PartnerHealthSection";
import { CustomersNeedAttention } from "@/app/components/CustomersNeedAttention";
import { DeterioratingCustomers } from "@/app/components/DeterioratingCustomers";
import { CompanyDetailPage } from "@/app/components/CompanyDetailPage";
import { CustomerDetailPage } from "@/app/components/CustomerDetailPage";
import { ProductAdoptionDashboard } from "@/app/components/ProductAdoptionDashboard";
import { HealthDistributionSection } from "@/app/components/HealthDistributionSection";
import { useState } from "react";
import { ChevronDown, Search, RefreshCw, Activity, TrendingUp } from "lucide-react";

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCustomerListDrawerOpen, setIsCustomerListDrawerOpen] = useState(false);
  const [customerListFilter, setCustomerListFilter] = useState<'Healthy' | 'Need Attention' | 'At Risk' | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<{ name: string; status: 'Healthy' | 'Need Attention' | 'At Risk' } | null>(null);
  const [selectedCustomer, setSelectedCustomer] = useState<{ 
    name: string; 
    serviceProvider: string;
    healthStatus: 'Healthy' | 'Attention' | 'Critical';
    healthScore: number;
    trend: 'improving' | 'stable' | 'declining';
  } | null>(null);

  // If a customer is selected, show the customer detail page (2nd level)
  if (selectedCustomer) {
    return (
      <div className="min-h-screen bg-[#f9fafc] flex flex-col">
        <Header />
        <div className="flex flex-1">
          <LeftSidebar />
          <main className="flex-1" style={{ marginLeft: '55px', paddingTop: '55px' }}>
            <CustomerDetailPage 
              customerName={selectedCustomer.name}
              serviceProviderName={selectedCustomer.serviceProvider}
              healthStatus={selectedCustomer.healthStatus}
              healthScore={selectedCustomer.healthScore}
              trend={selectedCustomer.trend}
              onBack={() => setSelectedCustomer(null)}
              onHome={() => {
                setSelectedCustomer(null);
                setSelectedCompany(null);
              }}
            />
          </main>
        </div>
      </div>
    );
  }

  // If a company is selected, show the detail page
  if (selectedCompany) {
    return (
      <div className="min-h-screen bg-[#f9fafc] flex flex-col">
        <Header />
        <div className="flex flex-1">
          <LeftSidebar />
          <main className="flex-1" style={{ marginLeft: '55px', paddingTop: '55px' }}>
            <CompanyDetailPage 
              companyName={selectedCompany.name}
              healthStatus={selectedCompany.status}
              onBack={() => setSelectedCompany(null)}
              onCustomerClick={(customerName, customerStatus, customerScore, customerTrend) => {
                setSelectedCustomer({
                  name: customerName,
                  serviceProvider: selectedCompany.name,
                  healthStatus: customerStatus,
                  healthScore: customerScore,
                  trend: customerTrend
                });
              }}
            />
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9fafc] flex flex-col">
      <Header />
      <div className="flex flex-1">
        <LeftSidebar />
        <main className="flex-1 px-4 pt-[71px] pb-8" style={{ marginLeft: '55px' }}>
          <div className="mx-auto max-w-[1536px]">
             {/* Filter Section */}
            <div className="flex-1 overflow-auto p-[14px]">
              <div className="flex items-center gap-2 mb-6">
                <div className="relative">
                  <button
                    className="h-[38px] w-[240px] px-4 inline-flex items-center gap-2 justify-between rounded-[3px] border border-[#cccccc] bg-white text-sm hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span className="font-normal text-[14px] text-[#64748b]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>All Freighters</span>
                    <ChevronDown className="w-4 h-4 text-[#64748b]" />
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-[240px] bg-white border border-[#e5e7eb] rounded-[5px] shadow-lg z-50">
                      <div className="p-2">
                        <button className="w-full text-left px-3 py-2 text-[14px] text-white bg-[#0074e9] hover:bg-[#0074e9] rounded-[3px]"
                          style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                        >
                          All Freighters
                        </button>
                        <button className="w-full text-left px-3 py-2 text-[14px] text-[#26273b] hover:bg-gray-100 rounded-[3px]"
                          style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                        >
                          VRL Logistics
                        </button>
                        <button className="w-full text-left px-3 py-2 text-[14px] text-[#26273b] hover:bg-gray-100 rounded-[3px]"
                          style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                        >
                          TCI Express
                        </button>
                        <button className="w-full text-left px-3 py-2 text-[14px] text-[#26273b] hover:bg-gray-100 rounded-[3px]"
                          style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                        >
                          Gati Limited
                        </button>
                        <button className="w-full text-left px-3 py-2 text-[14px] text-[#26273b] hover:bg-gray-100 rounded-[3px]"
                          style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                        >
                          Mahindra Logistics
                        </button>
                        <button className="w-full text-left px-3 py-2 text-[14px] text-[#26273b] hover:bg-gray-100 rounded-[3px]"
                          style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                        >
                          Blue Dart
                        </button>
                        <button className="w-full text-left px-3 py-2 text-[14px] text-[#26273b] hover:bg-gray-100 rounded-[3px]"
                          style={{ fontFamily: 'Nunito Sans, sans-serif' }}
                        >
                          Rivigo
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setIsDatePickerOpen(true)}
                  className="h-[38px] w-[240px] inline-flex items-center gap-2 justify-start rounded-[3px] border border-[#cccccc] bg-background px-3 py-2 text-sm ring-offset-background hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <i className="fas fa-calendar-alt" aria-hidden="true" style={{ color: '#64748b' }}></i>
                  <span className="font-medium text-[#000]">26 Jan 2026 - 03 Feb 2026</span>
                </button>

                <button
                  className="h-[38px] w-[38px] inline-flex items-center justify-center rounded-[3px] bg-[#bbbbbb] text-white hover:bg-[#999999] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Go
                </button>

                <button
                  className="h-[38px] w-[38px] inline-flex items-center justify-center rounded-[3px] bg-white border border-[#2a4eab] text-[#2a4eab] hover:bg-[#f0f4ff] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <RefreshCw className="h-4 w-4" />
                </button>
              </div>
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-[18px] font-bold text-[#26273b]" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                      Health Intelligence Dashboard
                    </h1>
                  </div>
                </div>
              </div>

              {/* Content */}
              <PlatformHealthSection onDetailsClick={() => setIsDrawerOpen(true)} />
              <HealthDistributionSection />
              <PartnerHealthSection 
                onCompanyClick={(name, status) => setSelectedCompany({ name, status })} 
                onViewListClick={() => {
                  setCustomerListFilter('Healthy');
                  setIsCustomerListDrawerOpen(true);
                }}
              />
              <CustomersNeedAttention 
                onCompanyClick={(name, status) => setSelectedCompany({ name, status })} 
                onViewListClick={() => {
                  setCustomerListFilter('Need Attention');
                  setIsCustomerListDrawerOpen(true);
                }}
              />
              <DeterioratingCustomers 
                onCompanyClick={(name, status) => setSelectedCompany({ name, status })} 
                onViewListClick={() => {
                  setCustomerListFilter('At Risk');
                  setIsCustomerListDrawerOpen(true);
                }}
              />
            </div>
          </div>
        </main>
      </div>
      <DetailsDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        onCompanyClick={(name, status) => {
          setIsDrawerOpen(false);
          setSelectedCompany({ name, status });
        }}
      />
      <CustomerListDrawer 
        isOpen={isCustomerListDrawerOpen} 
        onClose={() => setIsCustomerListDrawerOpen(false)} 
        filter={customerListFilter}
        onCompanyClick={(name, status) => {
          setIsCustomerListDrawerOpen(false);
          setSelectedCompany({ name, status });
        }}
      />
    </div>
  );
}