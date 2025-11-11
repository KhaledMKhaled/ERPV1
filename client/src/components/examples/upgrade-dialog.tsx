import { UpgradeDialog } from '../upgrade-dialog';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function UpgradeDialogExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8 bg-background">
      <Button onClick={() => setOpen(true)}>
        Open Upgrade Dialog
      </Button>
      <UpgradeDialog open={open} onOpenChange={setOpen} />
    </div>
  );
}
