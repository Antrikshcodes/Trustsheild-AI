import { Icon } from "@/components/ui/Icon";
import { RISK_COPY } from "@/lib/constants";
import { cn } from "@/lib/cn";
import type { RiskLevel } from "@/types/analysis";

const STYLES: Record<RiskLevel, string> = {
  high: "bg-risk-high-bg text-risk-high ring-risk-high/20",
  medium: "bg-risk-medium-bg text-risk-medium ring-risk-medium/20",
  low: "bg-risk-low-bg text-risk-low ring-risk-low/20",
};

/** Risk is always shown as text + icon, never colour alone. */
export function RiskBadge({ level, size = "md" }: { level: RiskLevel; size?: "sm" | "md" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-semibold ring-1 ring-inset",
        STYLES[level],
        size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-sm",
      )}
    >
      <Icon name={level === "low" ? "check" : "alert"} className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} />
      {RISK_COPY[level].label}
    </span>
  );
}
