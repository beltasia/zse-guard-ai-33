import { SurveillanceHeader } from "@/components/SurveillanceHeader";
import { MarketChart } from "@/components/MarketChart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";

const Markets = () => {
  return (
    <div className="min-h-screen bg-surveillance-bg">
      <SurveillanceHeader />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Market Overview</h1>
            <p className="text-muted-foreground">Real-time market data and trading activity</p>
          </div>
          <Badge variant="outline" className="bg-success/10 text-success border-success/30">
            <Activity className="h-3 w-3 mr-1" />
            Live Data
          </Badge>
        </div>

        {/* Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-surveillance-panel border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">ZSE Index</CardTitle>
              <TrendingUp className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">2,847.52</div>
              <p className="text-xs text-success">+2.4% from yesterday</p>
            </CardContent>
          </Card>

          <Card className="bg-surveillance-panel border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Volume</CardTitle>
              <Activity className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">1.2M</div>
              <p className="text-xs text-muted-foreground">Shares traded</p>
            </CardContent>
          </Card>

          <Card className="bg-surveillance-panel border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Top Gainer</CardTitle>
              <TrendingUp className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">ZSE001</div>
              <p className="text-xs text-success">+8.7%</p>
            </CardContent>
          </Card>

          <Card className="bg-surveillance-panel border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Top Loser</CardTitle>
              <TrendingDown className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">ZSE045</div>
              <p className="text-xs text-destructive">-3.2%</p>
            </CardContent>
          </Card>
        </div>

        {/* Market Chart */}
        <MarketChart />
      </main>
    </div>
  );
};

export default Markets;