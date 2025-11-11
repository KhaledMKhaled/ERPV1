import { ReportCard } from "@/components/report-card";
import { BarChart3, Receipt, Percent, FileText, Activity, TrendingUp, Scale, Package } from "lucide-react";

export default function ReportsPage() {
  // todo: remove mock functionality
  const reportCategories = [
    {
      title: "Sales Reports",
      description: "A summary of all sales transactions, showing revenue from top selling products.",
      icon: BarChart3,
      count: 5,
      href: "/reports/sales",
    },
    {
      title: "Expense Reports",
      description: "A detailed report of all expenses incurred, categorized by type, vendor and date.",
      icon: Receipt,
      count: 3,
      href: "/reports/expenses",
    },
    {
      title: "VAT Reports",
      description: "Details VAT collected and paid across transactions for easy tax reporting.",
      icon: Percent,
      count: 2,
      href: "/reports/vat",
    },
    {
      title: "Form 41",
      description: "Generates required data for submitting Form 41, including tax withholdings.",
      icon: FileText,
      count: 1,
      href: "/reports/form41",
    },
    {
      title: "Activity Reports",
      description: "Shows all activities in this account including user actions and system events.",
      icon: Activity,
      count: 8,
      href: "/reports/activity",
    },
    {
      title: "Profit & Loss",
      description: "A comprehensive view of revenues, costs, and expenses over a specific period.",
      icon: TrendingUp,
      count: 4,
      href: "/reports/profit-loss",
    },
    {
      title: "Balance Sheet",
      description: "A snapshot of your company's financial position showing assets and liabilities.",
      icon: Scale,
      count: 2,
      href: "/reports/balance-sheet",
    },
    {
      title: "Inventory Reports",
      description: "Track stock levels, inventory movements, and product performance metrics.",
      icon: Package,
      count: 6,
      href: "/reports/inventory",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold" data-testid="text-page-title">Reports</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Access all your business reports and analytics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reportCategories.map((report) => (
          <ReportCard key={report.title} {...report} />
        ))}
      </div>
    </div>
  );
}
