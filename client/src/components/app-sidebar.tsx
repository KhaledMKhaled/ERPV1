import { Home, ShoppingCart, Package, FileText, Calculator, BarChart3, User, Settings, ChevronDown, LogOut, Lock } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";

interface UserProfile {
  name: string;
  role: string;
  points: number;
  avatar?: string;
}

interface AppSidebarProps {
  user: UserProfile;
}

const menuItems = [
  {
    title: "Home",
    icon: Home,
    url: "/",
  },
  {
    title: "Sales",
    icon: ShoppingCart,
    items: [
      { title: "Invoice", url: "/sales/invoice" },
      { title: "Receipts", url: "/sales/receipts" },
      { title: "Payment", url: "/sales/payment" },
      { title: "Clients", url: "/sales/clients" },
    ],
  },
  {
    title: "Purchase",
    icon: Package,
    items: [
      { title: "Bills", url: "/purchase/bills" },
      { title: "Vendors", url: "/purchase/vendors" },
    ],
  },
  {
    title: "Item",
    icon: FileText,
    items: [
      { title: "Code", url: "/items/code" },
      { title: "Settings", url: "/items/settings" },
    ],
  },
  {
    title: "Accounting",
    icon: Calculator,
    locked: true,
    items: [
      { title: "Chart of Accounts", url: "/accounting/chart" },
      { title: "Journal Entries", url: "/accounting/journal" },
      { title: "Bank Reconciliation", url: "/accounting/reconciliation" },
    ],
  },
  {
    title: "Report",
    icon: BarChart3,
    url: "/reports",
  },
  {
    title: "Profile",
    icon: User,
    items: [
      { title: "Company's", url: "/profile/company" },
      { title: "Settings", url: "/profile/settings" },
    ],
  },
];

export function AppSidebar({ user }: AppSidebarProps) {
  const [location] = useLocation();
  const { toast } = useToast();

  return (
    <Sidebar>
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3" data-testid="sidebar-user-profile">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="bg-primary text-primary-foreground text-sm font-semibold">
              {user.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate" data-testid="text-username">{user.name}</p>
            <p className="text-xs text-muted-foreground truncate" data-testid="text-userrole">{user.role}</p>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1" data-testid="badge-points">
            <BarChart3 className="h-3 w-3" />
            <span className="text-sm font-semibold">{user.points.toLocaleString()}</span>
            <span className="text-xs">pts</span>
          </Badge>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 py-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase tracking-wide px-2 mb-1">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                if (item.items) {
                  const isLocked = 'locked' in item && item.locked;
                  return (
                    <Collapsible key={item.title} defaultOpen={item.title === "Report"} className="group/collapsible">
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild disabled={isLocked}>
                          <SidebarMenuButton
                            className={isLocked ? "opacity-50 cursor-not-allowed" : "hover-elevate active-elevate-2"}
                            data-testid={`button-nav-${item.title.toLowerCase()}`}
                            onClick={(e) => {
                              if (isLocked) {
                                e.preventDefault();
                                toast({
                                  title: "Premium Feature",
                                  description: "Accounting module requires a paid subscription. Please upgrade to access this feature.",
                                  variant: "destructive",
                                });
                              }
                            }}
                          >
                            <item.icon className="h-4 w-4" />
                            <span className="flex items-center gap-2">
                              {item.title}
                              {isLocked && <Badge variant="secondary" className="text-xs px-1.5 py-0">Pro</Badge>}
                            </span>
                            {isLocked ? (
                              <Lock className="ml-auto h-4 w-4 text-muted-foreground" />
                            ) : (
                              <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                            )}
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        {!isLocked && (
                          <CollapsibleContent>
                            <SidebarMenuSub>
                              {item.items.map((subItem) => (
                                <SidebarMenuSubItem key={subItem.title}>
                                  <SidebarMenuSubButton
                                    asChild
                                    isActive={location === subItem.url}
                                    className="hover-elevate active-elevate-2"
                                    data-testid={`link-nav-${subItem.title.toLowerCase().replace(/\s+/g, '-')}`}
                                  >
                                    <a href={subItem.url}>
                                      <span>{subItem.title}</span>
                                    </a>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        )}
                      </SidebarMenuItem>
                    </Collapsible>
                  );
                }

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={location === item.url}
                      className="hover-elevate active-elevate-2"
                      data-testid={`link-nav-${item.title.toLowerCase()}`}
                    >
                      <a href={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="hover-elevate active-elevate-2 text-muted-foreground"
              data-testid="button-settings"
            >
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="hover-elevate active-elevate-2 text-destructive"
              data-testid="button-logout"
              onClick={() => console.log('Sign out clicked')}
            >
              <LogOut className="h-4 w-4" />
              <span>Sign Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <p className="text-xs text-muted-foreground text-center mt-3">v1.0.0</p>
      </SidebarFooter>
    </Sidebar>
  );
}
