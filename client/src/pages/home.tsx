import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PointsDisplay } from "@/components/points-display";
import { BarChart3, TrendingUp, DollarSign, Package, Users, FileText } from "lucide-react";

export default function HomePage() {
  const { data: user } = useQuery<{ fullName: string; points: number }>({
    queryKey: ['/api/user/current'],
  });

  // todo: remove mock functionality
  const stats = [
    { title: "Total Sales", value: "$124,500", change: "+12.5%", icon: DollarSign, trend: "up" },
    { title: "Active Orders", value: "342", change: "+8.2%", icon: Package, trend: "up" },
    { title: "Total Customers", value: "1,245", change: "+5.4%", icon: Users, trend: "up" },
    { title: "Open Invoices", value: "87", change: "-3.1%", icon: FileText, trend: "down" },
  ];

  // todo: remove mock functionality
  const recentActivity = [
    { id: 1, action: "New invoice created", time: "2 minutes ago", type: "invoice" },
    { id: 2, action: "Payment received", time: "15 minutes ago", type: "payment" },
    { id: 3, action: "New customer added", time: "1 hour ago", type: "customer" },
    { id: 4, action: "Inventory updated", time: "2 hours ago", type: "inventory" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-semibold" data-testid="text-page-title">Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Welcome back, {user?.fullName || "User"}
          </p>
        </div>
        {user && <PointsDisplay points={user.points} variant="large" />}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} data-testid={`card-stat-${stat.title.toLowerCase().replace(/\s+/g, '-')}`}>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <div className="p-2 rounded-lg bg-primary/10">
                <stat.icon className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" data-testid={`text-stat-value-${stat.title.toLowerCase().replace(/\s+/g, '-')}`}>
                {stat.value}
              </div>
              <p className={`text-xs flex items-center gap-1 mt-1 ${
                stat.trend === "up" ? "text-green-600" : "text-red-600"
              }`}>
                <TrendingUp className="h-3 w-3" />
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Quick Stats
            </CardTitle>
            <CardDescription>Overview of your business metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b">
                <span className="text-sm text-muted-foreground">Revenue This Month</span>
                <span className="text-sm font-semibold">$124,500</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b">
                <span className="text-sm text-muted-foreground">Average Order Value</span>
                <span className="text-sm font-semibold">$364</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b">
                <span className="text-sm text-muted-foreground">Conversion Rate</span>
                <span className="text-sm font-semibold">3.24%</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-muted-foreground">Customer Satisfaction</span>
                <span className="text-sm font-semibold">94%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
            <CardDescription>Latest updates from your business</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.map((activity) => (
                <div 
                  key={activity.id} 
                  className="flex items-start gap-3 p-2 rounded-md hover-elevate"
                  data-testid={`activity-${activity.id}`}
                >
                  <div className="p-1.5 rounded-full bg-primary/10 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
