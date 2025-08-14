import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Shield, TrendingDown, Clock } from "lucide-react";
import { useRealtimeData } from "@/hooks/useRealtimeData";

export const AlertsPanel = () => {
  const { alerts } = useRealtimeData();

  const alertIcons = {
    critical: AlertTriangle,
    warning: Shield,
    info: TrendingDown,
  };

  return (
    <Card className="bg-surveillance-panel border-border h-fit">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg text-foreground">Active Alerts</CardTitle>
          <Badge variant="outline" className="bg-alert-critical/10 text-alert-critical border-alert-critical/30">
            {alerts.active} Active
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {alerts.list.map((alert, index) => {
          const IconComponent = alertIcons[alert.severity as keyof typeof alertIcons];
          return (
            <div
              key={index}
              className={`p-3 rounded-lg border transition-all duration-300 hover:shadow-lg ${
                alert.severity === "critical"
                  ? "bg-alert-critical/5 border-alert-critical/30"
                  : alert.severity === "warning"
                  ? "bg-alert-warning/5 border-alert-warning/30"
                  : "bg-alert-info/5 border-alert-info/30"
              }`}
            >
              <div className="flex items-start space-x-3">
                <div
                  className={`p-1.5 rounded-md ${
                    alert.severity === "critical"
                      ? "bg-alert-critical/20 text-alert-critical"
                      : alert.severity === "warning"
                      ? "bg-alert-warning/20 text-alert-warning"
                      : "bg-alert-info/20 text-alert-info"
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant="secondary"
                      className={`text-xs ${
                        alert.severity === "critical"
                          ? "bg-alert-critical/20 text-alert-critical"
                          : alert.severity === "warning"
                          ? "bg-alert-warning/20 text-alert-warning"
                          : "bg-alert-info/20 text-alert-info"
                      }`}
                    >
                      {alert.severity.toUpperCase()}
                    </Badge>
                  </div>
                  <p className="text-sm text-foreground mt-1 font-medium">
                    {alert.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {alert.description}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {alert.time}
                    </div>
                    <Button variant="ghost" size="sm" className="h-6 text-xs hover:bg-muted">
                      Investigate
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        
        {alerts.list.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <Shield className="h-12 w-12 mx-auto mb-3 opacity-50" />
            <p className="text-sm">No active alerts</p>
            <p className="text-xs">System operating normally</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};