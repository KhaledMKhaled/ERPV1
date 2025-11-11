import { Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PointsDisplayProps {
  points: number;
  variant?: "default" | "large";
}

export function PointsDisplay({ points, variant = "default" }: PointsDisplayProps) {
  if (variant === "large") {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <div 
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 hover-elevate cursor-pointer"
            data-testid="badge-points-large"
          >
            <Trophy className="h-5 w-5 text-primary" />
            <div className="flex flex-col items-start">
              <span className="text-xs text-muted-foreground">Reward Points</span>
              <span className="text-xl font-bold text-primary">{points.toLocaleString()}</span>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Your total reward points</p>
        </TooltipContent>
      </Tooltip>
    );
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Badge 
          variant="secondary" 
          className="flex items-center gap-1.5 px-3 py-1.5 cursor-pointer hover-elevate"
          data-testid="badge-points"
        >
          <Trophy className="h-4 w-4 text-primary" />
          <span className="text-sm font-semibold">{points.toLocaleString()}</span>
          <span className="text-xs text-muted-foreground">pts</span>
        </Badge>
      </TooltipTrigger>
      <TooltipContent>
        <p>Your reward points</p>
      </TooltipContent>
    </Tooltip>
  );
}
