import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '@fortawesome/fontawesome-free/css/all.min.css';

interface DateRangePickerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (startDate: Date, endDate: Date) => void;
}

export function DateRangePicker({ isOpen, onClose, onSelect }: DateRangePickerProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 0)); // January 2026
  const [startDate, setStartDate] = useState(new Date(2026, 0, 28)); // Jan 28, 2026
  const [endDate, setEndDate] = useState(new Date(2026, 1, 3)); // Feb 3, 2026

  if (!isOpen) return null;

  const presets = [
    'Today',
    'Yesterday',
    'This Week',
    'Last Week',
    'This Month',
    'Last Month',
    'This Quarter',
    'Last Quarter',
    'This Year',
    'Last Year'
  ];

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const renderCalendar = (monthOffset: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + monthOffset);
    const { daysInMonth, startingDayOfWeek } = getDaysInMonth(date);
    const year = date.getFullYear();
    const month = date.getMonth();

    const days = [];
    const prevMonthDays = new Date(year, month, 0).getDate();

    // Previous month days
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: prevMonthDays - i,
        isCurrentMonth: false,
        date: new Date(year, month - 1, prevMonthDays - i)
      });
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        day,
        isCurrentMonth: true,
        date: new Date(year, month, day)
      });
    }

    const isInRange = (date: Date) => {
      return date >= startDate && date <= endDate;
    };

    const isStartDate = (date: Date) => {
      return date.toDateString() === startDate.toDateString();
    };

    const isEndDate = (date: Date) => {
      return date.toDateString() === endDate.toDateString();
    };

    return (
      <div className="flex-1">
        <div className="text-center text-[#94a3b8] text-[14px] mb-3 font-medium">
          {monthNames[month]} {year}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-center text-[12px] text-[#94a3b8] font-medium py-2">
              {day}
            </div>
          ))}
          {days.map((dayObj, idx) => {
            const inRange = isInRange(dayObj.date);
            const isStart = isStartDate(dayObj.date);
            const isEnd = isEndDate(dayObj.date);
            
            return (
              <div
                key={idx}
                className={`text-center py-2 text-[14px] cursor-pointer relative ${
                  !dayObj.isCurrentMonth ? 'text-[#cbd5e1]' : 'text-[#26273b]'
                } ${
                  inRange && dayObj.isCurrentMonth
                    ? isStart || isEnd
                      ? 'bg-[#2a4eab] text-white rounded-md font-medium'
                      : 'bg-[#2a4eab] text-white'
                    : 'hover:bg-[#f1f5f9]'
                }`}
              >
                {dayObj.day}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
      />
      
      {/* Date Picker Modal */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl z-50 p-6 w-[900px]">
        <h2 className="text-[18px] font-semibold text-[#26273b] mb-6 text-center">
          Choose A Date Range
        </h2>

        {/* Date Input Fields */}
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            value="Jan 28, 2026"
            className="flex-1 h-[38px] px-3 border border-[#2a4eab] rounded-[3px] text-center text-[14px] text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#2a4eab]"
            readOnly
          />
          <input
            type="text"
            value="Feb 3, 2026"
            className="flex-1 h-[38px] px-3 border border-[#cbd5e1] rounded-[3px] text-center text-[14px] text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#2a4eab]"
            readOnly
          />
        </div>

        <div className="flex gap-6">
          {/* Presets */}
          <div className="w-[150px] space-y-1">
            {presets.map((preset) => (
              <button
                key={preset}
                className="w-full text-left px-3 py-2 text-[14px] text-[#64748b] hover:bg-[#f1f5f9] rounded-md transition-colors"
              >
                {preset}
              </button>
            ))}
          </div>

          {/* Calendars */}
          <div className="flex-1">
            {/* Navigation */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={prevMonth}
                className="p-1 hover:bg-[#f1f5f9] rounded transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-[#64748b]" />
              </button>
              
              <div className="flex items-center gap-4">
                <select
                  value={currentMonth.getMonth()}
                  onChange={(e) => setCurrentMonth(new Date(currentMonth.getFullYear(), parseInt(e.target.value)))}
                  className="px-3 py-1 border border-[#cbd5e1] rounded-md text-[14px] text-[#64748b] focus:outline-none focus:ring-2 focus:ring-[#2a4eab]"
                >
                  {monthNames.map((month, idx) => (
                    <option key={month} value={idx}>
                      {month}
                    </option>
                  ))}
                </select>
                
                <select
                  value={currentMonth.getFullYear()}
                  onChange={(e) => setCurrentMonth(new Date(parseInt(e.target.value), currentMonth.getMonth()))}
                  className="px-3 py-1 border border-[#cbd5e1] rounded-md text-[14px] text-[#64748b] focus:outline-none focus:ring-2 focus:ring-[#2a4eab]"
                >
                  {[2024, 2025, 2026, 2027, 2028].map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={nextMonth}
                className="p-1 hover:bg-[#f1f5f9] rounded transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-[#64748b]" />
              </button>
            </div>

            {/* Two Month View */}
            <div className="flex gap-8">
              {renderCalendar(0)}
              {renderCalendar(1)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
