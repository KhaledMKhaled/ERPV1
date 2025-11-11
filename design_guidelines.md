# Business Management Dashboard - Design Guidelines

## Design Approach
**Framework**: Modern SaaS Dashboard Pattern (inspired by Linear, Notion, and Stripe Dashboard)
- Clean, data-focused interface optimizing for information density and workflow efficiency
- Clear visual hierarchy for quick scanning and decision-making
- Consistent component patterns throughout the application

## Layout Architecture

**Two-Column Dashboard Structure**
- Fixed sidebar navigation (280px width on desktop)
- Main content area with fluid width
- Sidebar collapses to icon-only mode on tablets (80px)
- Full-width mobile view with bottom navigation

**Spacing System**
Use Tailwind units: **2, 3, 4, 6, 8, 12** for consistent rhythm
- Section padding: `p-6` to `p-8`
- Card spacing: `gap-4` to `gap-6`
- Component internal padding: `p-4`
- Tight spacing: `gap-2` for related elements

## Typography Hierarchy

**Font Stack**: Inter (primary), SF Pro Display (fallback)
- **Page Titles**: text-2xl font-semibold (Dashboard section headers)
- **Section Headers**: text-lg font-semibold
- **Card Titles**: text-base font-medium
- **Body Text**: text-sm font-normal
- **Metadata/Labels**: text-xs font-medium uppercase tracking-wide
- **Numbers/Stats**: text-3xl font-bold (for points display)

## Navigation Structure

**Sidebar Components**

1. **Profile Header** (top section)
   - User avatar (40px circular)
   - Name and role text
   - Points display badge with icon (e.g., "2,450 pts")
   - Dropdown chevron for profile menu

2. **Main Navigation Groups** (vertically stacked)
   Each section with:
   - Icon (20px, left-aligned)
   - Label text
   - Expandable indicator for sections with sub-items
   - Active state indicator (left border accent, 3px)

   **Navigation Sections:**
   - **Home**: Dashboard overview, Activity feed
   - **Sales**: Invoices, Quotations, Customers, Sales Reports
   - **Purchase**: Purchase Orders, Suppliers, Purchase Reports
   - **Item**: Products, Services, Inventory, Categories
   - **Accounting**: Chart of Accounts, Journal Entries, Bank Reconciliation
   - **Report**: All report types (Sales, Expenses, VAT, Form 41, Activity)
   - **Profile**: Settings, Preferences, Logout

3. **Sidebar Footer**
   - Help/Support link
   - Version number (text-xs opacity-60)

## Points Display System

**Header Integration** (top-right of main content area)
- Points widget: Pill-shaped container with icon + number
- Icon: Star or trophy (16px)
- Number: Current points balance (text-xl font-bold)
- Subtle animation on points update (scale pulse)
- Hover reveals tooltip: "Your reward points"

## Reports Page Layout

**Page Header**
- Title: "Reports" (text-2xl font-semibold)
- Subtitle: "Access all your business reports" (text-sm opacity-70)
- Date range selector (right-aligned)

**Report Categories Grid**
- 3-column grid on desktop (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
- Gap between cards: `gap-6`

**Report Card Design**
- Card container: Rounded corners (rounded-lg), subtle border
- Padding: `p-6`
- Card structure:
  - Icon container (48px circle, top-left)
  - Category title (text-lg font-semibold)
  - Description text (text-sm, 2 lines max)
  - Report count badge (text-xs, top-right)
  - Action button: "View Reports" (text-sm, bottom of card)
- Hover state: Slight elevation increase, border accent

**Report Types to Display:**
1. Sales Reports (with chart icon)
2. Expense Reports (with receipt icon)
3. VAT Reports (with percentage icon)
4. Form 41 (with document icon)
5. Activity Reports (with activity icon)
6. Profit & Loss (with trending icon)
7. Balance Sheet (with scale icon)
8. Inventory Reports (with box icon)

## Component Library

**Buttons**
- Primary: Medium height (h-10), rounded-md, font-medium
- Secondary: Same height, outlined variant
- Icon buttons: Square (h-10 w-10), centered icon

**Cards**
- Standard padding: `p-6`
- Border radius: `rounded-lg`
- Subtle border (1px)
- Shadow: Drop shadow on hover only

**Form Elements**
- Input height: `h-10`
- Border radius: `rounded-md`
- Label above input (text-sm font-medium, mb-2)

**Badges/Pills**
- Height: `h-6`, inline-flex, items-center
- Padding: `px-3`
- Border radius: `rounded-full`
- Font: text-xs font-medium

## Responsive Behavior

**Desktop (lg: 1024px+)**: Full sidebar + 3-column reports grid
**Tablet (md: 768px)**: Collapsed icon sidebar + 2-column reports grid  
**Mobile (base)**: Hidden sidebar, hamburger menu, bottom nav bar + 1-column reports grid

## Accessibility
- Keyboard navigation for all interactive elements
- Focus indicators (2px offset ring)
- ARIA labels on icon-only elements
- Sufficient contrast ratios for all text
- Screen reader announcements for points updates

## Images
No hero images required for this dashboard application. Use icon library (Heroicons or Lucide React) for all navigation and report category icons.