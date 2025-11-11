import { Lock, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface UpgradeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function UpgradeDialog({ open, onOpenChange }: UpgradeDialogProps) {
  const features = [
    "Chart of Accounts",
    "Journal Entries",
    "Bank Reconciliation",
    "Financial Reports",
    "Tax Management",
    "Multi-currency Support",
  ];

  const handleUpgrade = () => {
    console.log('Processing payment for Accounting module...');
    // todo: implement actual payment processing
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md" data-testid="dialog-upgrade">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 rounded-lg bg-primary/10">
              <Lock className="h-5 w-5 text-primary" />
            </div>
            <Badge variant="secondary" className="px-2 py-1">Pro Feature</Badge>
          </div>
          <DialogTitle className="text-xl">Unlock Accounting Module</DialogTitle>
          <DialogDescription className="text-sm">
            Get access to advanced accounting features to manage your finances professionally.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="bg-muted/50 rounded-lg p-4 border">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">One-time payment</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold text-primary">3,000</span>
                <span className="text-xl font-semibold text-muted-foreground">LE</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Lifetime access</p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Included features:</p>
            <div className="space-y-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div className="p-0.5 rounded-full bg-primary/10">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <DialogFooter className="flex-col sm:flex-col gap-2">
          <Button 
            onClick={handleUpgrade} 
            className="w-full"
            data-testid="button-upgrade-pay"
          >
            Activate for 3,000 LE
          </Button>
          <Button 
            variant="outline" 
            onClick={() => onOpenChange(false)}
            className="w-full"
            data-testid="button-upgrade-cancel"
          >
            Maybe Later
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
