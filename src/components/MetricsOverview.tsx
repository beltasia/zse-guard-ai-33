import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from "lucide-react";
import { useRealtimeData } from "@/hooks/useRealtimeData";

export const MetricsOverview = () => {
  const { marketData, alerts, compliance } = useRealtimeData();

  const metrics = [
    {
      title: "Active Trades",
      value: marketData.activeTrades.toLocaleString(),
      change: marketData.tradeChange,
      icon: TrendingUp,
      trend: marketData.tradeChange > 0 ? "up" : "down",
    },
    {
      title: "Market Volume",
      value: `$${(marketData.volume / 1000000).toFixed(1)}M`,
      change: marketData.volumeChange,
      icon: TrendingUp,
      trend: marketData.volumeChange > 0 ? "up" : "down",
    },
    {
      title: "Active Alerts",
      value: alerts.active.toString(),
      change: 0,
      icon: AlertTriangle,
      trend: "neutral",
      variant: alerts.active > 5 ? "critical" : "info",
    },
    {
      title: "Compliance Score",
      value: `${compliance.score}%`,
      change: compliance.change,
      icon: CheckCircle,
      trend: compliance.change >= 0 ? "up" : "down",
      variant: compliance.score >= 95 ? "success" : compliance.score >= 85 ? "warning" : "critical",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <Card key={index} className="bg-surveillance-panel border-border hover:border-primary/30 transition-all duration-300">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{metric.title}</p>
                <p className="text-2xl font-bold text-foreground mt-1">{metric.value}</p>
                {metric.change !== 0 && (
                  <div className={`flex items-center mt-1 text-sm ${
                    metric.trend === "up" ? "text-success" : 
                    metric.trend === "down" ? "text-destructive" : "text-muted-foreground"
                  }`}>
                    {metric.trend === "up" ? (
                      <TrendingUp className="h-3 w-3 mr-1" />
                    ) : metric.trend === "down" ? (
                      <TrendingDown className="h-3 w-3 mr-1" />
                    ) : null}
                    {metric.change > 0 ? "+" : ""}{metric.change}%
                  </div>
                )}
              </div>
              <div className={`p-3 rounded-lg ${
                metric.variant === "critical" ? "bg-destructive/10 text-destructive" :
                metric.variant === "warning" ? "bg-warning/10 text-warning" :
                metric.variant === "success" ? "bg-success/10 text-success" :
                "bg-primary/10 text-primary"
              }`}>
                <metric.icon className="h-6 w-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};