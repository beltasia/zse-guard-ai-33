import { SurveillanceHeader } from "@/components/SurveillanceHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, Activity, AlertTriangle, Eye, TrendingUp, TrendingDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Traders = () => {
  const { toast } = useToast();

  const handleViewTrader = (trader: any) => {
    toast({
      title: "Trader Profile",
      description: `Viewing detailed profile for ${trader.name} (${trader.id})`,
    });
    console.log("Viewing trader details:", trader);
  };

  const traders = [
    { id: "TR001", name: "John Smith", status: "Active", trades: 247, volume: "$2.4M", risk: "Low", performance: "+12.4%" },
    { id: "TR002", name: "Sarah Johnson", status: "Active", trades: 189, volume: "$1.8M", risk: "Medium", performance: "+8.7%" },
    { id: "TR003", name: "Mike Chen", status: "Flagged", trades: 356, volume: "$4.1M", risk: "High", performance: "+15.2%" },
    { id: "TR004", name: "Emma Wilson", status: "Active", trades: 123, volume: "$1.2M", risk: "Low", performance: "-2.1%" },
    { id: "TR005", name: "David Brown", status: "Under Review", trades: 298, volume: "$3.2M", risk: "Medium", performance: "+9.8%" },
  ];

  return (
    <div className="min-h-screen bg-surveillance-bg">
      <SurveillanceHeader />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Trader Monitoring</h1>
            <p className="text-muted-foreground">Real-time trader activity and risk assessment</p>
          </div>
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
            <Users className="h-3 w-3 mr-1" />
            {traders.length} Active Traders
          </Badge>
        </div>

        {/* Trader Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-surveillance-panel border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Traders</CardTitle>
              <Activity className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">124</div>
              <p className="text-xs text-success">+5 from yesterday</p>
            </CardContent>
          </Card>

          <Card className="bg-surveillance-panel border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Volume</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">$48.7M</div>
              <p className="text-xs text-muted-foreground">Today's trading</p>
            </CardContent>
          </Card>

          <Card className="bg-surveillance-panel border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Flagged Traders</CardTitle>
              <AlertTriangle className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">7</div>
              <p className="text-xs text-muted-foreground">Requires review</p>
            </CardContent>
          </Card>

          <Card className="bg-surveillance-panel border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Avg Performance</CardTitle>
              <TrendingUp className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">+8.9%</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
        </div>

        {/* Traders Table */}
        <Card className="bg-surveillance-panel border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Trader Activity</CardTitle>
            <CardDescription>Monitor individual trader performance and risk levels</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-muted-foreground">Trader</TableHead>
                  <TableHead className="text-muted-foreground">Status</TableHead>
                  <TableHead className="text-muted-foreground">Trades</TableHead>
                  <TableHead className="text-muted-foreground">Volume</TableHead>
                  <TableHead className="text-muted-foreground">Risk Level</TableHead>
                  <TableHead className="text-muted-foreground">Performance</TableHead>
                  <TableHead className="text-muted-foreground">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {traders.map((trader) => (
                  <TableRow key={trader.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="text-xs">
                            {trader.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-foreground font-medium">{trader.name}</div>
                          <div className="text-xs text-muted-foreground">{trader.id}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant="outline" 
                        className={
                          trader.status === "Active" ? "bg-success/10 text-success border-success/30" :
                          trader.status === "Flagged" ? "bg-destructive/10 text-destructive border-destructive/30" :
                          "bg-warning/10 text-warning border-warning/30"
                        }
                      >
                        {trader.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-foreground">{trader.trades}</TableCell>
                    <TableCell className="text-foreground">{trader.volume}</TableCell>
                    <TableCell>
                      <Badge 
                        variant="outline"
                        className={
                          trader.risk === "Low" ? "bg-success/10 text-success border-success/30" :
                          trader.risk === "Medium" ? "bg-warning/10 text-warning border-warning/30" :
                          "bg-destructive/10 text-destructive border-destructive/30"
                        }
                      >
                        {trader.risk}
                      </Badge>
                    </TableCell>
                    <TableCell className={trader.performance.startsWith('+') ? "text-success" : "text-destructive"}>
                      {trader.performance.startsWith('+') ? <TrendingUp className="h-4 w-4 inline mr-1" /> : <TrendingDown className="h-4 w-4 inline mr-1" />}
                      {trader.performance}
                    </TableCell>
                    <TableCell>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleViewTrader(trader)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Traders;