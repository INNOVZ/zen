import { memo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QuickActionsGridProps, DASHBOARD_CONFIG } from "@/types/dashboard";

const QuickActionButton = memo<{
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  onClick: () => void;
}>(({ icon: Icon, title, onClick }) => (
  <Button
    variant="outline"
    className="h-20 flex flex-col gap-2"
    onClick={onClick}
    aria-label={title}
  >
    <Icon className="h-6 w-6" aria-hidden="true" />
    <span>{title}</span>
  </Button>
));
QuickActionButton.displayName = "QuickActionButton";

export const QuickActionsGrid = memo<QuickActionsGridProps>(({ actions }) => (
  <Card className="mt-8">
    <CardHeader>
      <CardTitle>Quick Actions</CardTitle>
    </CardHeader>
    <CardContent>
      <nav
        aria-label="Quick Actions"
        className={DASHBOARD_CONFIG.QUICK_ACTIONS_GRID_CLASSES}
      >
        {actions.map(({ id, icon, title, onClick }) => (
          <QuickActionButton
            key={id}
            icon={icon}
            title={title}
            onClick={onClick}
          />
        ))}
      </nav>
    </CardContent>
  </Card>
));

QuickActionsGrid.displayName = "QuickActionsGrid";
