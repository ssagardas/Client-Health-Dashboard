# SuperProcure Design System Guidelines

## Standard Components

These components MUST remain consistent across all screens and should be strictly followed in all further designs.

---

## Top Menu Component

The Top Menu is a fixed header component that provides global navigation and user controls across the entire application.

### Structure & Layout

**Container:**
- Position: Fixed at top (top-0, left-0, right-0)
- Height: Exactly **55px** (h-[55px])
- Background: White (#ffffff)
- Shadow: `shadow-[0px_2px_12px_0px_rgba(227,231,255,0.6)]`
- Z-index: 50 (z-50)
- Padding: 16px horizontal (px-4)

**Layout:**
- Display: Flex container with space-between alignment
- Two main sections: Left (logo + navigation) and Right (search + controls)

### Left Section

**Logo:**
- Width: 120px (w-[120px])
- Text: "SuperProcure"
- Font: Nunito Sans, Bold
- Font size: 20px (text-[20px])
- Line height: 24px
- Color: #0074e9
- Font variation settings: `'YTLC' 500, 'wdth' 100`

**Navigation Items:**
- Gap between items: 24px (gap-6)
- Font: Nunito Sans, Bold
- Font size: 14px (text-[14px])
- Line height: 21px
- Default color: #26273b
- Active/Selected color: #2a4eab
- Font variation settings: `'YTLC' 500, 'wdth' 100`

**Navigation Menu Items (in order):**
1. Sales Order
2. Requisitions
3. Contracts
4. Leads
5. Trips (dropdown)
6. Accounts (dropdown)
7. Dedicated Vehicles
8. Loadability
9. Dashboard (dropdown) - Active item shown in #2a4eab

### Dropdown Menus

**Trigger:**
- Displays chevron-down icon (10x6 SVG)
- Opens on hover (onMouseEnter)
- Closes on mouse leave (onMouseLeave)

**Dropdown Container:**
- Position: Absolute, positioned below trigger (top-full left-0)
- Background: White
- Shadow: Large shadow (shadow-lg)
- Border radius: 5px (rounded-[5px])
- Padding: 8px vertical (py-2)
- Min width: 180px (min-w-[180px])
- Z-index: 50

**Dropdown Items:**
- Width: Full
- Text align: Left
- Padding: 16px horizontal, 8px vertical (px-4 py-2)
- Font: Nunito Sans
- Font size: 14px
- Color: #26273b
- Hover: Light gray background (hover:bg-gray-100)
- Font variation settings: `'YTLC' 500, 'wdth' 100`

**Trips Dropdown Items:**
- Trip Board
- Train Board
- Loading Dock
- Tracking Board
- GRN Board
- IBD Board
- Invoice Board
- InPlant Board
- Inplant 5.0
- POD Board

**Accounts Dropdown Items:**
- Freight Processing
- Account Board
- Customer Board
- Supplier Board
- Vendor Board
- Partner Board
- Client Board
- Supplier List
- Vendor List
- Partner List

**Dashboard Dropdown Items:**
- Dashboard
- Reports

### Right Section

**Search Box:**
- Width: 180px (w-[180px])
- Height: 40px (h-[40px])
- Background: White
- Border radius: 5px (rounded-[5px])
- Padding: 16px left, 48px right, 8px vertical (pl-4 pr-12 py-2)
- Border: 2px gradient border (linear-gradient: #af6eef, #1ed8be, #7183ff at 135deg)
- Font: Nunito Sans, Normal
- Font size: 14px
- Text color: #26273b
- Placeholder color: #999
- Placeholder text: "Advanced Search"
- Search icon: Positioned absolute right (right-4), purple color (#6b7fee), 20x20px

**Help Button:**
- Size: 32x32px (w-8 h-8)
- Shape: Circle (rounded-full)
- Border: 2px solid #2a4eab
- Background: White
- Content: "?" character
- Font: Nunito Sans, Bold
- Font size: 16px
- Color: #2a4eab

**Profile Dropdown:**
- Trigger: 32x32px circle (w-8 h-8, rounded-full)
- Border: 2px solid #2a4eab
- Background: White
- Content: User initial "S" (or first letter of user name)
- Font: Nunito Sans, Bold
- Font size: 16px
- Color: #2a4eab
- Chevron icon: 10x6 SVG in #2a4eab

**Profile Dropdown Menu:**
- Position: Absolute, top-full right-0, with margin-top: 8px (mt-2)
- Background: White
- Shadow: Large shadow (shadow-lg)
- Border: 1px solid #e5e7eb
- Border radius: 5px (rounded-[5px])
- Padding: 12px vertical (py-3)
- Min width: 280px (min-w-[280px])
- Z-index: 50

**Profile Dropdown - User Info Section:**
- Padding: 16px horizontal, 12px bottom (px-4 pb-3)
- Border bottom: 1px solid #e5e7eb
- User name: Nunito Sans Bold, 16px, #26273b
- Phone number: Nunito Sans Normal, 14px, #26273b
- Company: Nunito Sans Normal, 14px, #5b6cf6
- Session info: Key icon (16x16) + text (14px, #26273b)
- End sessions button: Red border (#ef4444), red text, rounded-[5px], hover:bg-[#fef2f2]

**Profile Dropdown - Menu Items:**
- Section separated by border-bottom
- Items: My Masters, My Settings, My Settings (with "New" badge), Connect Api Logs (with "New" badge), API Logs
- "New" badge: Background #ef4444, white text, 11px, rounded-[3px], font-semibold
- Logout item in separate section at bottom

**Gap between right section items:** 12px (gap-3)

### Interaction Behavior

**Hover States:**
- Dropdown triggers: Show dropdown on hover
- Navigation items: No background change (only color change for active state)
- Dropdown items: Light gray background (#f3f4f6)
- Profile/Help buttons: No hover state (static)

**Active States:**
- Current page navigation item: Color changes to #2a4eab
- Dropdown active state: Maintains #2a4eab color with matching chevron

### Z-Index Hierarchy
- Header container: z-50
- Dropdown menus: z-50
- All dropdowns appear above page content but below modals

### Important Notes
- This component is FIXED and appears on every page
- Height must always be exactly 55px
- All page content should account for this header (typically with pt-[55px] or mt-[55px])
- Logo text and colors must never change
- Navigation items order must remain consistent
- Font must always be Nunito Sans with specified variation settings
- Dropdown behavior is hover-based, not click-based
- Active page indicator uses #2a4eab color consistently

---

## Other Standard Components

### Left Sidebar Component
(To be documented)

### Dashboard Widget Grid
- Layout: 6-column grid (grid-cols-6)
- Gap: 16px (gap-4)
- Widget borders: 4px thick bottom border with colored accent
(Full specifications to be added)

---

## General Guidelines

* Use Nunito Sans as the primary font throughout the application
* Primary brand color: #0074e9 (logo)
* Primary action color: #2a4eab (active states, buttons)
* Default text color: #26273b
* Border radius for cards/containers: 5px
* Use responsive layouts with flexbox and grid by default
* Maintain consistent spacing using Tailwind's spacing scale
