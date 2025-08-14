import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, AreaChart, Area } from "recharts";
import { useRealtimeData } from "@/hooks/useRealtimeData";
import { TrendingUp, Activity } from "lucide-react";

export const MarketChart = () => {
  const { marketData } = useRealtimeData();

  return (
    <Card className="bg-surveillance-panel border-border">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg text-foreground flex items-center">
            <Activity className="h-5 w-5 mr-2 text-primary" />
            Market Activity
          </CardTitle>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
              <span className="text-muted-foreground">Price</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-accent mr-2"></div>
              <span className="text-muted-foreground">Volume</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Price Chart */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-foreground">Price Movement</h3>
              <div className="flex items-center text-sm text-success">
                <TrendingUp className="h-4 w-4 mr-1" />
                +2.4%
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={marketData.chartData}>
                  <defs>
                    <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid 
                    strokeDasharray="3 3" 
                    stroke="hsl(var(--border))" 
                    opacity={0.3}
                  />
                  <XAxis 
                    dataKey="time" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Area
                    type="monotone"
                    dataKey="price"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    fill="url(#priceGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Volume Chart */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">Trading Volume</h3>
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={marketData.chartData}>
                  <defs>
                    <linearGradient id="volumeGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid 
                    strokeDasharray="3 3" 
                    stroke="hsl(var(--border))" 
                    opacity={0.3}
                  />
                  <XAxis 
                    dataKey="time" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Area
                    type="monotone"
                    dataKey="volume"
                    stroke="hsl(var(--accent))"
                    strokeWidth={2}
                    fill="url(#volumeGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};