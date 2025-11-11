import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ReportCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  count?: number;
  href: string;
}

export function ReportCard({ title, description, icon: Icon, count, href }: ReportCardProps) {
  return (
    <Card className="hover-elevate transition-all cursor-pointer" data-testid={`card-report-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader className="space-y-0 pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <CardTitle className="text-base font-semibold">{title}</CardTitle>
            </div>
          </div>
          {count !== undefined && (
            <Badge variant="secondary" className="text-xs" data-testid={`badge-count-${title.toLowerCase().replace(/\s+/g, '-')}`}>
              {count}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-sm line-clamp-2 min-h-[2.5rem]">
          {description}
        </CardDescription>
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full"
          onClick={() => {
            console.log(`Navigating to ${href}`);
            window.location.href = href;
          }}
          data-testid={`button-view-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          View Reports
        </Button>
      </CardContent>
    </Card>
  );
}
