import { ReportCard } from '../report-card';
import { BarChart3 } from 'lucide-react';

export default function ReportCardExample() {
  return (
    <div className="p-8 bg-background">
      <div className="max-w-sm">
        <ReportCard
          title="Sales Reports"
          description="A summary of all sales transactions, showing revenue from top selling products."
          icon={BarChart3}
          count={5}
          href="/reports/sales"
        />
      </div>
    </div>
  );
}
